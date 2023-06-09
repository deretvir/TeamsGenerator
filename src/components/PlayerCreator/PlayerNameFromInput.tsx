import React, { useState, ChangeEvent, KeyboardEvent } from "react";

interface InputProps {
  handlePlayerName: (event: ChangeEvent<HTMLInputElement>) => void;
  handleEnterKey: (event: KeyboardEvent<HTMLInputElement>) => void;
}

function Input({ handlePlayerName, handleEnterKey }: InputProps) {
  return (
    <input
      type="text"
      placeholder="Player name"
      className="flex-grow rounded-l-md outline-none py-2 px-5"
      onChange={handlePlayerName}
      onKeyDown={handleEnterKey}
    />
  );
}

interface InputBtnProps {
  displayName: () => void;
}

function InputBtn({ displayName }: InputBtnProps) {
  return (
    <button
      className="bg-orange-400 w-12 rounded-r-md text-white"
      onClick={displayName}
    >
      +
    </button>
  );
}

interface PlayerNameFromInputProps {
  addPlayer: (playerName: string) => void;
}

function PlayerNameFromInput({ addPlayer }: PlayerNameFromInputProps) {
  const [playerName, setPlayerName] = useState("");

  const handlePlayerName = (event: ChangeEvent<HTMLInputElement>) => {
    setPlayerName(event.target.value);
  };

  const handleEnterKey = (event: KeyboardEvent<HTMLInputElement>) => {
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

      <div className="flex w-full h-12">
        <Input
          handlePlayerName={handlePlayerName}
          handleEnterKey={handleEnterKey}
        />
        <InputBtn displayName={displayName} />
      </div>
      <p className="text-l text-white">
        Press "Enter" to add a player or click the button
      </p>
    </div>
  );
}

export default PlayerNameFromInput;
