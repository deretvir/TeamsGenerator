import React, { useEffect, useState, createContext, useContext } from "react";
import { PlayerCreator } from "./PlayerCreator";
import { Player } from "../Player/Player";
import { PlayerList } from "./PlayerList";
//import PlayersList from "../PlayerCreator/PlayersList";

//stworzyć context https://blog.logrocket.com/how-to-use-react-context-typescript/

export const PlayerManagerContext = createContext(null);

const PlayerManager = () => {
  const [players, setPlayers] = useState([]);
  //czy tu trzeba definiowac players jako useState? nie wystarczy zmienna?

  const addPlayer = (player: Player) => {
    const isPlayerExistInPlayers = players.some(
      (obj) => obj.name === player.name
    );
    if (isPlayerExistInPlayers) return;
    setPlayers([...players, player]);
    console.log(players);
  };

  const deletePlayer = (player: Player) => {
    const indexToDelete = players.findIndex((obj) => obj.name === player.name);
    players.splice(indexToDelete, 1);
    setPlayers([...players]);
  };

  return (
    <PlayerManagerContext.Provider value={{ addPlayer, deletePlayer, players }}>
      <div>
        <h1>Player Manager</h1>
        <PlayerCreator />
        <PlayerList />
      </div>
    </PlayerManagerContext.Provider>
  );
};

export default PlayerManager;
