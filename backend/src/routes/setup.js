const express = require('express')
const router = express.Router()

const getGame = require('./middleware')

// Setup Ships for one player (This has to be fetched 4 times)
router.post('/:lobbyPIN', getGame, async (req, res) => {
    /*
        name: <player's name>
        ship: Array of [{
            name: <ship's name>
            position: Array of ship's position
                      ex. [[3,1], [4,1] ,[5,1], [6,1]]
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