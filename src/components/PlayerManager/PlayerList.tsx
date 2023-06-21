// 1. przyjmuje players które są array of player + onDeletePlayer
// 2. dla każdego playera zwraca playerBanner

import { PlayerBanner } from "./PlayerListComponents/PlayerBanner";

const PlayerList = ({ players, deletePlayer }) => {
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
