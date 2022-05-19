const mongoose = require('mongoose')

const Schema = mongoose.Schema

const gameSchema = new Schema({
    _id: Schema.Types.ObjectId,
    userId: Number,
    game: String,
    genre: String,
    platforms: [String],
    playTime: Number,
})

const Game = mongoose.model('games', gameSchema)

module.exports = Game
