const express = require('express')
const router = express.Router()

const getGame = require('./middleware')

// Check if the player is dead
router.get('/:lobbyPIN/:player_name/status', getGame, async (req, res) => {
    try {
        const player = res.game.player.find(player => player.name === req.params.player_name)
        if (player.ship.filter(ship => ship.status === "alive").length == 0) {
            return res.json({ message: "This player is dead" })
        }
        return res.json({ message: "This player is alive" })
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})

// Attack a player
router.patch('/:lobbyPIN/attack', getGame, async (req, res) => {
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
            if (!shipIsAlive(player.ship[i].position, player.board)) {
                deadShip = player.ship
                res.game.player.find(player => player.name === req.body.name).ship[i].status = "dead"
                break
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
        const x = shipPosition[i][0]
        const y = shipPosition[i][1]
        
        // 0 - not attacked,  1 - attacked
        if (playerBoard[x][y] == 0) return true
    }
    return false
}

module.exports = router