const mongoose = require('mongoose')
const Player = require('./player')

const gameSchema = new mongoose.Schema({
    lobbyPIN: {
        type: Number,
        required: true
    },
    player: [Player],
    rank: {
        type: Number,
        default: 0
    }
})

module.exports = mongoose.model('Game', gameSchema)