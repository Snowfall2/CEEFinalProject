const mongoose = require('mongoose')
const Ship = require('./ship')

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        immutable: true,
        default: "alive"
    },
    board: { 
        type: Array,
        required: true
    },
    ship: [Ship]
})

module.exports = playerSchema