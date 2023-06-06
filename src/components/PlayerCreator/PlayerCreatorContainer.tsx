import React, { useState } from "react";
import PlayerNameFromInput from "./PlayerNameFromInput";
import PlayersList from "./PlayersList";
import TeamGenerator from "../TeamGenerator/TeamGenerator";
import NumberTeamsOrPlayers from "../TeamGenerator/NumberTeamsOrPlayers"

function PlayerCreatorContainer() {
  const [players, setPlayers] = useState([]);
  const [isNameUsedError, setIsNameUsedError] = useState(false);
  const [numberTeams, setNumberTeams] = useState(2);
  const [numberPlayers, setNumberPlayers] = useState(1);

  const addPlayer = (playerName) => {
    if (playerName.trim() !== "") {
      if ([...players].includes(playerName)) {
        setIsNameUsedError(true);
        return;
      } else {
        setPlayers([...players, playerName]);
        setIsNameUsedError(false);
      }
    }
  };

  function deletePlayer(index) {
    players.splice(index, 1);
    setPlayers([...players]);
  }



  return (
    <div>
      <PlayerNameFromInput addPlayer={addPlayer} />
      {isNameUsedError && (
        <p className="text-red-300  font-bold flex justify-start text-lg">
          Error: the name is already used
        </p>
      )}
      <PlayersList players={players} deletePlayer={deletePlayer} />
      <TeamGenerator players={players} />
    </div>
  );
}

export default PlayerCreatorContainer;
