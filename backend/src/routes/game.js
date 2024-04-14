const express = require('express')
const router = express.Router()

const getGame = require('./middleware')

// Attack a player
router.post('/:lobbyPIN', getGame, async (req, res) => {
    /*
        name: <player who get attacked>
        position: [x, y]
     */
    const x = req.body.position[0]
    const y = req.body.position[1]
    try {
        res.game.player.find(player => player.name === req.body.name).board[x][y] = 1
        await res.game.save()
        res.json({ message: "Attack Successfully" })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

// Check if the ship is dead
router.post('/:lobbyPIN', getGame, async (req, res) => {
    
})

module.exports = router