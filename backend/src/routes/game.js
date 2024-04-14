const express = require('express')
const router = express.Router()
const Game = require('../model/game')
const Ship = require('../model/ship')

// Get All Lobby (To check if the PIN already exists)
router.get('/', async (req, res) => {
    const game = await Game.find()
    res.json(game)
})

// Find Lobby
router.get('/:lobbyPIN', getGame, (req, res) => {
    res.json(res.game)
})

// Find Player 
router.get('/:lobbyPIN/:player_name', getGame, async (req, res) => {
    try {
        const player = res.game.player.find(player => player.name === req.params.player_name)
        res.json(player)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Find Player's Ship
router.get('/:lobbyPIN/:player_name/ship', getGame, async (req, res) => {
    try {
        const player = res.game.player.find(player => player.name === req.params.player_name)
        res.json(player.ship)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Create Lobby
router.post('/', async (req, res) => {
    const game = new Game({
        lobbyPIN: req.body.lobbyPIN,
        player: req.body.player
    })
    try {
        const newGame = await game.save()
        res.status(201).json(newGame) 
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Create Player (Join Game)
router.post('/:lobbyPIN', getGame, async (req, res) => {
    const player = res.game.player.find(player => player.name === req.body.name)
    try {
        if (player != null) {
            return res.json({ message: "Player with this username already exists in this room" })
        }
        res.game.player.push({ name: req.body.name })
        const newPlayer = await res.game.save()
        res.json(newPlayer)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Create Ship for Player (with validation)
router.post('/:lobbyPIN/:player_name', getGame, async (req, res) => {
    const player = res.game.player.find(player => player.name === req.params.player_name)
    try {
        if (player == null) {
            return res.json({ message: "Player with this username didn't exists in this room" })
        }
        const shipPos = placeShip(req.body.posX, req.body.posY, req.body.size, req.body.rotation)
        
        // if place ship is valid
        if(shipPos.length != 0 && checkShip(shipPos,player.ship)) {
            console.log(shipPos)
            
            player.ship.push({
                name: req.body.name,
                position: shipPos
            })
        }
        await res.game.save()
        res.json(player)
       
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Delete Lobby (Game finished)
router.delete('/:lobbyPIN', getGame, async (req, res) => {
    try {
        await res.game.deleteOne()
        res.json({ message: "Deleted Game" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Delete Player (Player Leave)
router.delete('/:lobbyPIN/:player_name', getGame, async (req, res) => {
    try {
        res.game.player = res.game.player.filter(player => player.name !== req.params.player_name)
        const updatePlayer = await res.game.save()
        res.json(updatePlayer)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

async function getGame(req, res, next) {
    let game
    try {
        game = await Game.findOne({ "lobbyPIN": req.params.lobbyPIN })
        if (game == null) {
            return res.status(404).json({ message: "Cannot find game" })
        } 
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.game = game
    next()
}

function placeShip(posX, posY, size, rotation) {
    /*
        posX, posY - row, column of leftmost or upmost of ship
        size - length of ship
        rotation - if true will start from upmost
                   if false will start from leftmost
    */
    if(posX<0 || posX>=10 || posY<0 || posY>=10)
    return []
    if((rotation && posX+size>=10) || (!rotation && posY+size>=10))
    return []
    let shipPosition = []
    for(let i = 0;i < size;i++) {
        if(rotation)
            shipPosition.push([posX+i, posY])
        else
            shipPosition.push([posX, posY+i])
    }
    return shipPosition
}

function checkShip(shipPos, allShip) {
    for(let i = 0;i < shipPos.length;i++) {
        for(let j = 0;j < allShip.length;j++) {
            for(let k = 0;k < allShip[j].position.length;k++) {
                if(shipPos[i][0] == allShip[j].position[k][0] &&
                shipPos[i][1] == allShip[j].position[k][1])
                    return false
            }
        }
    }
    return true
}

module.exports = router;

