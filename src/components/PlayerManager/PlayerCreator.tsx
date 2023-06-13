import React, {ChangeEvent, KeyboardEvent, useRef, useState} from "react";
import {Player} from "../Player/Player";

type PlayerCreatorProps = {
    onPlayer: (player: Player) => void
}

const PlayerCreator = ({onPlayer}: PlayerCreatorProps) => {
    const [name, setName] = useState("");
    const inputRef = useRef(null);

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>): void => {
        setName(event.target.value);
    }

    const handleEnterKeyDown = (event: KeyboardEvent<HTMLInputElement>): void => {
        if (event.key === "Enter") handleCreatePlayer();
    }

    const handleCreatePlayer = (): void => {
        if(name === ""){
            return;
        }

        const player: Player = {
            name: name,
            avatar: `https://api.dicebear.com/6.x/pixel-art/svg?seed=${name}`,
        };

        inputRef.current.focus();
        setName("");

        onPlayer(player);
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
            <button onClick={handleCreatePlayer}>+</button>
        </div>
    );
};
export {PlayerCreator};
