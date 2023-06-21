import { Player } from "../Player";

type PlayerBannerProps = {
  player: Player;
  index?: number;
  deletePlayer: (player: Player) => void;
};

const PlayerBanner = ({ player, index, deletePlayer }: PlayerBannerProps) => {
  return (
    <li
      className="flex flex-row h-12 w-full justify-between items-start py-0 my-2 border border-stone-700 rounded-md border-opacity-40"
      key={player.name}
    >
      {index !== null && (
        <div className="w-12 h-full bg-orange-400 rounded-l-md flex justify-center items-center font-bold text-white">
          {index + 1}
        </div>
      )}
      <div className="bg-stone-700 h-full  w-full flex justify-start items-center px-3">
        <img className="w-12 h-12 pr-4 " src={player.avatar}></img>
        <p className="text-white"> {player.name}</p>
      </div>
      {deletePlayer && (
        <button
          className="bg-red-700 w-14 rounded-r-md text-white h-full"
          onClick={() => deletePlayer(player)}
        >
          X
        </button>
      )}
    </li>
  );
};

export { PlayerBanner };

// tu sobie zrobisz plakietkę playera czyli wyciągasz z playera wszystkie
// jego propsy avatar itd. np. {player.avatar}
// np. {player.name}
// dodatkowo jeżeli jest zdefiniowany onDelete to pokazujesz przycisk do
// usunięcia i po kliknieciu wywałujesz on delete z aktualnym playerem
// {onDelete ? <button onClick={() => onDelete(player)}>x</button> : null}
// jezeli index to wyswietlasz numerek itd
// {index ? <span>{index}</span> : null}
