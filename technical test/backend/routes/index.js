var express = require('express')
var router = express.Router()
const {
    select_top_by_playtime_file,
    select_top_by_players_file,
    select_top_by_playtime_db,
    select_top_by_players
} = require('../services/game')

const fs = require('fs')

const rawdata = fs.readFileSync(
    require('path').resolve(__dirname, '../public/games.json'),
    'utf8',
    (err, jsonString) => {
        if (err) {
            console.log('File read failed:', err)
            return
        }
        console.log('File data:', jsonString)
    }
)

let dataset = JSON.parse(rawdata);

/* GET games with most time play from json file. */
router.get('/fileTopPlayedGames', async (req, res) => {
    const options = ({ genre, platforms, nb } = req.query)
    const result = await select_top_by_playtime_file(dataset, options)
    res.json(result)
})

/* GET games with most players from json file. */
router.get('/fileMaxPlayers', async (req, res) => {
    const options = ({ genre, platforms, nb } = req.query)
    const result = await select_top_by_players_file(dataset, options)
    res.json(result)
})

/* GET games with most time play from database. */
router.get('/topPlayedGames', async (req, res) => {
    const options = ({ genre, platforms, nb } = req.query)
    const result = await select_top_by_playtime_db(options)
    res.json(result)
})

/* GET games with most players from database. */
router.get('/maxPlayers', async (req, res) => {
    const options = ({ genre, platforms, nb } = req.query)
    const result = await select_top_by_players(options)
    res.json(result)
})

module.exports = router
