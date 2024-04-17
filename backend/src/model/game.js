const mongoose = require('mongoose')
const Player = require('./player')

const gameSchema = new mongoose.Schema({
    lobbyPIN: {
        type: Number,
        required: true
    },
    player: [Player]
})

module.exports = mongoose.model('Game', gameSchema)