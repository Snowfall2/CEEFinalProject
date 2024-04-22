const express = require('express')
const router = express.Router()
const Game = require('../model/game')

const getGame = require('./middleware')

// Get All Lobby (To check if the PIN already exists)
router.get('/', async (req, res) => {
    const game = await Game.find()
    res.status(200).json({"lobby" : game})
})

// Find Lobby
router.get('/:lobbyPIN', getGame, (req, res) => {
    res.status(200).json(res.game)
})   

// Find Player 
router.get('/:lobbyPIN/:player_name', getGame, async (req, res) => {
    try {
        const player = res.game.player.find(player => player.name === req.params.player_name)
        res.status(200).json(player)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Create Lobby
router.post('/', async (req, res) => {
    let ck_game = await Game.findOne({ "lobbyPIN": req.body.lobbyPIN })
    if(ck_game != null)
    return res.status(400).json({ message: "Lobby is already exist" })

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
    if (res.game.player.length == 4) 
        return res.json({ message: "Lobby is full" })
    
    const player = res.game.player.find(player => player.name === req.body.name)
    try {
        if (player != null) {
            return res.status(400).json({ message: "Player with this username already exists in this room" })
        }
        res.game.player.push({ name: req.body.name })
        const newPlayer = await res.game.save()
        res.status(201).json(newPlayer)
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

// Delete Lobby (Game finished)
router.delete('/:lobbyPIN', getGame, async (req, res) => {
    try {
        await res.game.deleteOne()
        res.status(200).json({ message: "Deleted Lobby '" + req.params.lobbyPIN + "'"})
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Delete Player (Player Leave)
router.delete('/:lobbyPIN/:player_name', getGame, async (req, res) => {
    try {
        res.game.player = res.game.player.filter(player => player.name !== req.params.player_name)
        const updatePlayer = await res.game.save()
        res.status(200).json(updatePlayer)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router;

