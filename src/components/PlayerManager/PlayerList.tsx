// 1. przyjmuje players które są array of player + onDeletePlayer
// 2. dla każdego playera zwraca playerBanner

//pytania
//1. Czy jezeli mam zdefiniowany context, jest sens dawac jako props zmienne z contextu do elementu? Patrz props do PlayerBanner
//2. Czy moze od razu w PlayerBanner używać tych zmiennych z contextu?
//3. Jak zdefiniowac typ Typescript zmiennej z contextu? Przy definicji "useContext"?
//
import React, { useContext } from "react";
import { PlayerBanner } from "./components/PlayerBanner";
import { PlayerManagerContext } from "./PlayerManager";

import { PlayerManagerContextType } from "./PlayerManager";

const PlayerList = () => {
  const { players } =
    useContext<PlayerManagerContextType>(PlayerManagerContext);
  const { deletePlayer } =
    useContext<PlayerManagerContextType>(PlayerManagerContext);
  return (
    <>
      <ul className="w-full">
        {players.map((player, index) => (
          <PlayerBanner
            key={index}
            player={player}
            index={index}
            deletePlayer={deletePlayer}
          />
        ))}
      </ul>
    </>
  );
};

export { PlayerList };
