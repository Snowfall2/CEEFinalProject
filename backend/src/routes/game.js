const express = require('express')
const router = express.Router()
const Game = require('../model/game')

// Find Game Lobby and Get All players
router.get('/:game_id', async (req, res) => {
    const lobby = await Game.find({ lobbyPIN: req.params.game_id })
})

/* Get A Player
   Check if the username already exists */
router.get('/:game_id/:player_name', (req, res) => {

})

// Add new player
router.post('/:game_id', (req, res) => {

})

