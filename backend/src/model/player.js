const mongoose = require('mongoose')
const Ship = require('./ship')

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    status: {
        type: String,
        immutable: true,
        default: "alive"
    },
    board: { 
        type: Array,
        default: Array(10).fill(Array(10).fill(false))
    },
    ship: [Ship]
})

module.exports = playerSchema