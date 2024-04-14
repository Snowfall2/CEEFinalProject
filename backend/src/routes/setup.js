const express = require('express')
const router = express.Router()

const getGame = require('./middleware')

// Setup Ships for one player (This has to be fetched 4 times)
router.post('/:lobbyPIN/setup', getGame, async (req, res) => {
    /*
        name: <player's name>
        ship: Array of [{
            name: <ship's name>
            position: <int>
        }, .....]
    */
    try {  
        res.game.player.find(player => player.name === req.body.name).ship = req.body.ship
        await res.game.save()
        res.json({ message: "Ship setup." })
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router