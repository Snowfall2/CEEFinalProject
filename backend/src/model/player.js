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
        type: Array,
        default: Array.from({ length: 10 }, () => Array(10).fill(0))
    },
    ship: [Ship]
})

module.exports = playerSchema