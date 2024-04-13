const express = require('express')
const router = express.Router()
const Game = require('../model/game')

router.get('/', async (req, res) => {
    try {
        const game = await Game.find()
        res.json(game)
    } catch (err) {
        res.status(500).json({ message: err.message })
    }
})

router.post('/', async (req, res) => {
    const game = new Game({
        lobbyPIN: req.body.lobbyPIN
    })
    try {
        const newGame = await game.save()
        res.status(201).json(newGame) 
    } catch (err) {
        res.status(400).json({ message: err.message })
    }
})

module.exports = router;

