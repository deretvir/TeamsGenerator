import React, { useState, createContext } from "react";
import { PlayerCreator } from "./PlayerCreator";
import { Player } from "../Player/Player";
import { PlayerList } from "./PlayerList";
//import PlayersList from "../PlayerCreator/PlayersList";

//stworzyć context https://blog.logrocket.com/how-to-use-react-context-typescript/

export type PlayerManagerContextType = {
  addPlayer: (player: Player) => void;
  deletePlayer: (player: Player) => void;
  players: Player[];
};

export const PlayerManagerContext = createContext<PlayerManagerContextType>(
  {} as PlayerManagerContextType
);

function PlayerManager() {
  const [players, setPlayers] = useState<Player[]>([]);
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
    // tutaj mozna od razu splice użyć, ale chyba lepiejj pracować na kopi?
    const updatedPlayers = players.slice().splice(indexToDelete, 1);
    setPlayers(updatedPlayers);
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
}

export default PlayerManager;
