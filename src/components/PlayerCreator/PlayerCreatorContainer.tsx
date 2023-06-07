import React, { useState } from "react";
import PlayerNameFromInput from "./PlayerNameFromInput";
import PlayersList from "./PlayersList";
import Teams from "../TeamGenerator/Teams";

function PlayerCreatorContainer() {
  const [players, setPlayers] = useState([]);
  const [isNameUsedError, setIsNameUsedError] = useState(false);
 
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
        <Teams players={players} />
    
     
   

    </div>
  );
}

export default PlayerCreatorContainer;
