import React, {useEffect, useState, createContext, useContext} from "react";
import {PlayerCreator} from "./PlayerCreator";
import {Player} from "../Player/Player";
//import PlayersList from "../PlayerCreator/PlayersList";

//stworzyć context https://blog.logrocket.com/how-to-use-react-context-typescript/

export const PlayerManagerContext = createContext(null)


const PlayerManager = () => {
    const [players, setPlayers] = useState([]);
    //czy tu trzeba definiowac players jako useState? nie wystarczy zmienna?

    const addPlayer = (player: Player) => {
        const isPlayerExistInPlayers = players.some(obj=> obj.name===player.name);
       if(isPlayerExistInPlayers) return;
        setPlayers([...players, player]);
        console.log(players)
    };

    const deletePlayer = (player: Player) => {
      //  players.indexOf(player.name)


        // players.splice(index, 1);
        //   setPlayers([...players]);
    }

    return (
       <PlayerManagerContext.Provider value={{addPlayer}}>
            <div>
                <h1>Player Manager</h1>
                <PlayerCreator addPlayer = {addPlayer}/>
            </div>
            </PlayerManagerContext.Provider>
        
      
    );
};

export default PlayerManager;
