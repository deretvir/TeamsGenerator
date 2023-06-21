import React, {
  ChangeEvent,
  KeyboardEvent,
  useRef,
  useState,
  useContext,
} from "react";
import { Player } from "../Player/Player";
import { PlayerManagerContext } from "./PlayerManager";
import { PlayerCreatorButton } from "./components/PlayerCreatorButton";
import { PlayerCreatorInput } from "./components/PlayerCreatorInput";

type PlayerCreatorProps = {
  addPlayer: (player: Player) => void;
};

const PlayerCreator = () => {
  const [name, setName] = useState("");
  const inputRef = useRef(null);
  const { addPlayer } = useContext<PlayerCreatorProps>(PlayerManagerContext);

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setName(event.target.value);
  };

  const handleEnterKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
    if (event.key === "Enter") handleCreatePlayer();
  };

  const handleCreatePlayer = (): void => {
    if (name === "") {
      return;
    }

    const player: Player = {
      name: name,
      avatar: `https://api.dicebear.com/6.x/pixel-art/svg?seed=${name}`,
    };

    inputRef.current.focus();
    setName("");
    addPlayer(player);
  };

  return (
    <div>
      <PlayerCreatorInput
        name={name}
        handleNameChange={handleNameChange}
        inputRef={inputRef}
        handleEnterKeyDown={handleEnterKeyDown}
      />
      <PlayerCreatorButton handleCreatePlayer={handleCreatePlayer}>
        +
      </PlayerCreatorButton>
    </div>
  );
};
export { PlayerCreator };
