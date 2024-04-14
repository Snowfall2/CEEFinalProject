const express = require('express')
const router = express.Router()
const Game = require('../model/game')

const getGame = require('./middleware')

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
        if (res.game.player.length == 4) {
            return res.json({ message: "Lobby is full" })
        }
        res.game.player.push({ name: req.body.name })
        const newPlayer = await res.game.save()
        res.json(newPlayer)
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

module.exports = router;

