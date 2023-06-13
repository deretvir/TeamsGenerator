import React, {useEffect, useState} from "react";
import {PlayerCreator} from "./PlayerCreator";
import {Player} from "../Player/Player";
import PlayersList from "../PlayerCreator/PlayersList";

//stworzyć context https://blog.logrocket.com/how-to-use-react-context-typescript/

const PlayerManager = () => {
    const [players, setPlayers] = useState([]);

    const addPlayer = (player: Player) => {
        setPlayers([...players, player]);
    };

    const deletePlayer = (player: Player) => {
        // znajdz index playera po name jeżeli jest unikalne :)


        // players.splice(index, 1);
        //   setPlayers([...players]);
    }

    return (
        // <PlayerManagerContext.Provider value={{players, addPlayer, deletePlayer}}>
            <div>
                <h1>Player Manager</h1>
                <PlayerCreator onPlayer={addPlayer}/>

                <PlayersList players={players} onDeletePlayer={deletePlayer}/>
            </div>
        // </PlayerManagerContext.Provider>
    );
};

export default PlayerManager;
