require('dotenv').config()

const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const gameRouter = require('./routes/game')

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to Database'))

// Body-Parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

// Allow request from other origin (Frontend which is at different port)
app.use(cors());

// Use Routes
app.use('/', gameRouter)

app.listen(3000, () => console.log('Server Started'))
