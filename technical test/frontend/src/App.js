import "./App.css";
import GamesTable from "./components/gamesTable/gamesTable";
import React, { useEffect, useState } from "react";
import { getTopPlayedGames, getMaxPlayers } from "./utils/games.api";
import FilterInput from "./components/filterInput/filterInput";

function App() {
  const [topPlayedGames, setTopPlayedGames] = useState([]);
  const [maxPlayersGames, setMaxPlayersGames] = useState([]);
  const [topPlayedGamesOptions, setTopPlayedGamesOptions] = useState({});
  const [maxPlayersGamesOptions, setMaxPlayersGamesOptions] = useState({});
  const [filtre, setFiltre] = useState(false);

  async function onGenerate() {
    try {
      const topGames = await getTopPlayedGames(topPlayedGamesOptions);
      setTopPlayedGames(topGames);
      const maxPlayers = await getMaxPlayers(maxPlayersGamesOptions);
      setMaxPlayersGames(maxPlayers);
      setFiltre(false);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    onGenerate();
  }, [filtre]);
  return (
    <div className="App">
      <div className="App-games-table">
        most played games
        <FilterInput
          setOptions={setTopPlayedGamesOptions}
          setFiltre={setFiltre}
          options={topPlayedGamesOptions}
        ></FilterInput>
        <GamesTable gamesList={topPlayedGames}></GamesTable>
      </div>
      <div>
        games with most players
        <FilterInput
          setOptions={setMaxPlayersGamesOptions}
          setFiltre={setFiltre}
          options={maxPlayersGamesOptions}
        ></FilterInput>
        <GamesTable gamesList={maxPlayersGames}></GamesTable>
      </div>
    </div>
  );
}

export default App;
