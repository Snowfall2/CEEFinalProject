const mongoose = require('mongoose')

const shipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        immutable: true,
        default: "alive"
    },
    position: {
        type: Array,
        required: true
    }
})

module.exports = shipSchema