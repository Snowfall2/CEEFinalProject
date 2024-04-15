const mongoose = require('mongoose')

const shipSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    status: {
        type: String,
        default: "alive"
    },
    position: {
        type: Array,
        required: true
    }
})

module.exports = shipSchema