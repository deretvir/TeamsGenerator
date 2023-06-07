

function SinglePlayer({index, player,deletePlayer}){
  return(
  <li
            className="flex flex-row h-12 w-full justify-between items-start py-0 my-2 border border-stone-700 rounded-md border-opacity-40"
            key={index}
          >
            <div className="w-12 h-full bg-orange-400 rounded-l-md flex justify-center items-center font-bold text-white">
              {index + 1}
            </div>
            <div className="bg-stone-700 h-full  w-full flex justify-start items-center px-8">
              {player}
            </div>
            <button
              className="bg-red-700 w-14 rounded-r-md text-white h-full"
              onClick={() => deletePlayer(index)}
            >
              X
            </button>
          </li>)
}

function PlayersList({ players, deletePlayer }) {
  return (
    <div>
      <h2>Players List:</h2>
      <ul className="w-full">
        {players.map((player, index) => (
       <SinglePlayer index={index}  player={player} deletePlayer={deletePlayer} />
        ))}
      </ul>
    </div>
  );
}

export default PlayersList;
