const Game = require('../models/game')

const select_top_by_playtime_file = async (dataset, options) => {
    const games = dataset
        .filter((game) => {
            let flag = true
            if (options.genre) flag = options.genre === game.genre
            if (options.platforms)
                flag = flag & game.platforms.includes(options.platforms)
            return flag
        })
        .sort((a, b) => b.playTime - a.playTime)
        .slice(0, options?.nb)
    return games
}

const select_top_by_players_file = async (dataset, options) => {
    const games = dataset
        .filter((game) => {
            let flag = true
            if (options.genre) flag = options.genre === game.genre
            if (options.platforms)
                flag = flag & game.platforms.includes(options.platforms)
            return flag
        })
        .sort((a, b) => b.userId - a.userId)
        .slice(0, options?.nb)
    return games
}

const select_top_by_playtime_db = async (options) => {
    const games = await Game.find(
        options,
        {},
        { sort: { playTime: -1 } }
    ).limit(options?.nb)
    return games
}

const select_top_by_players = async (options) => {
    const games = await Game.find(options, {}, { sort: { userId: -1 } }).limit(
        options?.nb
    )
    return games
}

module.exports = {
    select_top_by_playtime_file,
    select_top_by_players_file,
    select_top_by_playtime_db,
    select_top_by_players
}
