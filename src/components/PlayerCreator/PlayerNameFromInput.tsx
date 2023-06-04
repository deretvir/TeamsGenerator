import React, { useState } from "react";

const dimension = 12;

function PlayerNameFromInput({ addPlayer }) {
  const [playerName, setPlayerName] = useState("");

  const handlePlayerName = (event) => {
    setPlayerName(event.target.value);
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
      displayName();
    }
  };

  const displayName = () => {
    if (playerName.trim() !== "") {
      addPlayer(playerName);
    }
  };

  return (
    <div className="flex flex-col justify-center items-start">
      <p className="text-l text-white">Add player</p>

      <div className={`flex w-full h-${dimension}`}>
        <input
          type="text"
          placeholder="Player name"
          className="flex-grow rounded-l-md outline-none py-2 px-5"
          onChange={handlePlayerName}
          onKeyDown={handleEnterKey}
        />
        <button
          className={`bg-orange-400 w-${dimension} rounded-r-md text-white`}
          onClick={displayName}
        >
          +
        </button>
      </div>
      <p className="text-l text-white">
        Press "Enter" to add a player or press the button
      </p>
    </div>
  );
}

export default PlayerNameFromInput;
