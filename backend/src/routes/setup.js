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
        let check_dup = []
        let ck = false
        for (let i = 0; i < req.body.ship.length; i++) {
            for (let j = 0; j < req.body.ship[i].position.length; j++) {
                for (let k = 0; k < check_dup.length; k++) {
                    if (check_dup[k] == req.body.ship[i].position[j])
                    ck = true
                }
                if (req.body.ship[i].position[j] < 0 || req.body.ship[i].position[j] >= 100)
                res.json({ message: "Invalid ship placing position" })
                check_dup.push(req.body.ship[i].position[j])
            }
        }
        if (ck) {
            res.json({ message: "Some ship is overlapped" })
        }
        else {
            await res.game.save()
            res.json({ message: "Ship setup." })
        }
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

module.exports = router
