import React, { useState } from "react";
import { PlayerCreator } from "./PlayerCreator";

const PlayerManager = () => {
  const [players, setPlayers] = useState([]);

  const addPlayer = (player) => {
    console.log(player);
    setPlayers([...players, player]);
  };

  function deletePlayer(index) {
    players.splice(index, 1);
    setPlayers([...players]);
  }

  return (
    <div>
      <h1>Player Manager</h1>
      <PlayerCreator addPlayer={addPlayer} deletePlayer={deletePlayer} />
    </div>
  );
};

export default PlayerManager;
