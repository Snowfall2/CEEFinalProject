const mongoose = require('mongoose')
const Ship = require('./ship')

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    status: {
        type: String,
        default: "alive"
    },
    board: { 
        type: String,
        default: "0".repeat(100)
    },
    ship: [Ship]
})

module.exports = playerSchema