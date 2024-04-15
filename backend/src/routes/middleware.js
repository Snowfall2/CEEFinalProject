const Game = require('../model/game')

async function getGame(req, res, next) {
    let game
    try {
        game = await Game.findOne({ "lobbyPIN": req.params.lobbyPIN })
        if (game == null) {
            return res.status(404).json({ message: "Cannot find game" })
        } 
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }

    res.game = game
    next()
}

module.exports = getGame