const express = require('express')
const router = express.Router()

const getGame = require('./middleware')

// Check if the player is dead and change his status to "dead"
router.post('/:lobbyPIN/status', getGame, async (req, res) => {
    try {
        const player = res.game.player.find(player => player.name === req.body.name)
        if (player.ship.filter(ship => ship.status === "alive").length == 0) {
            res.game.player.find(player => player.name === req.body.name).status = "dead"
            await res.game.save()
            return res.json({ message: "This player is dead" })
        }
        return res.json({ message: "This player is alive" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

// Attack a player
router.post('/:lobbyPIN/attack', getGame, async (req, res) => {
    /*
        name: <player who get attacked>
        position: <int>
     */
    const pos = req.body.position
    try {
        let board = res.game.player.find(player => player.name === req.body.name).board
        board = board.substring(0, pos) + "1" + board.substring(pos+1)
        res.game.player.find(player => player.name === req.body.name).board = board
        await res.game.save()

        res.json({ message: "Attack Successfully" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Check if there is any dead ship after an attack and update it's status to "dead"
router.post('/:lobbyPIN/deadship', getGame, async (req, res) => {
    let deadShip
    try {
        const player = res.game.player.find(player => player.name === req.body.name)
        for (let i = 0; i < player.ship.length; i++) {
            if (player.ship[i].status === "dead") 
                continue
            
            if (!shipIsAlive(player.ship[i].position, player.board)) {
                deadShip = player.ship
                res.game.player.find(player => player.name === req.body.name).ship[i].status = "dead"
                break // We can break because only one ship can be destroyed in one attack
            }
        }
        await res.game.save()
        res.json(deadShip)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

function shipIsAlive(shipPosition, playerBoard) {
    for (let i = 0; i < shipPosition.length; i++) {
        const pos = shipPosition[i]
        
        // 0 - not attacked,  1 - attacked
        if (playerBoard[pos] == 0) return true
    }
    return false
}

module.exports = router