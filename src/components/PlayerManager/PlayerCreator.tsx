import React, { ChangeEvent, useEffect, useRef, useState } from "react";

const PlayerCreator = ({ addPlayer, deletePlayer }) => {
  const [name, setName] = useState("");
  const inputRef = useRef(null);

  interface Player {
    name: string;
    id: number;
    avatar: string;
    deletePlayer: (name: string) => void;
  }

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleEnterKeyDown(event: KeyboardEvent<HTMLInputElement>): void {
    if (event.key === "Enter") handleCreatPlayer();
  }

  function handleNameChange(event: ChangeEvent<HTMLInputElement>): void {
    setName(event.target.value);
  }

  function handleCreatPlayer(): void {
    if (name) {
      const player: Player = {
        name: name,
        id: Math.random(),
        avatar: `https://api.dicebear.com/6.x/pixel-art/svg?seed=${name}`,
        deletePlayer: deletePlayer,
        //player.deletePlayer(index); gdy bede chcial usunac
      };
      addPlayer(player);
      inputRef.current.focus();
      setName("");
    }
  }

  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={handleNameChange}
        ref={inputRef}
        onKeyDown={handleEnterKeyDown}
      />
      <button onClick={handleCreatPlayer}> +</button>
    </div>
  );
};
export { PlayerCreator };
