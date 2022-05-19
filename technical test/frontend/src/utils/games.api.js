import axios from 'axios';

export async function getTopPlayedGames(options) {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}topPlayedGames`, { params: { nb: options?.nb, genre:options?.genre, platforms:options?.platforms} }
    );
    return res.data;
}

export async function getMaxPlayers(options) {
    const res = await axios.get(
      `${process.env.REACT_APP_SERVER_URL}maxPlayers`, { params: { nb: options?.nb, genre:options?.genre, platforms:options?.platforms} }
    );
    return res.data;
}