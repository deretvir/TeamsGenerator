// 1. przyjmuje players które są array of player + onDeletePlayer
// 2. dla każdego playera zwraca playerBanner

//pytania
//1. Czy jezeli mam zdefiniowany context, jest sens dawac jako props zmienne z contextu do elementu? Patrz props do PlayerBanner
//2. Czy moze od razu w PlayerBanner używać tych zmiennych z contextu?
//
import React, { useContext } from "react";
import { Player } from "../Player/Player";
import { PlayerBanner } from "./components/PlayerBanner";
import { PlayerManagerContext } from "./PlayerManager";

type PlayerListProps = {
  deletePlayer: (player: Player) => void;
  players: Player[];
};

const PlayerList = () => {
  const { players } = useContext<PlayerListProps>(PlayerManagerContext);
  const { deletePlayer } = useContext<PlayerListProps>(PlayerManagerContext);
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
