// czy jest mozliwe wyrenderowac z obiekt Map? Ja tutaj przeksztalcam,
import React from "react";

function TeamSinglePlayer({ player, index, team }) {
  return (
    <li
      className="flex flex-row h-12 w-full justify-between items-start py-0 my-2 border border-stone-700 rounded-md border-opacity-40"
      key={`${team}-${player}`}
    >
      <div className="w-12 h-full bg-orange-400 rounded-l-md flex justify-center items-center font-bold text-white">
        {index + 1}
      </div>
      <div className="bg-stone-700 h-full  w-full flex justify-start items-center px-3">
        <img
          className="w-12 h-12 pr-4 "
          src={`https://api.dicebear.com/6.x/pixel-art/svg?seed=${player}`}
        ></img>
        <p className="text-white"> {player}</p>
      </div>
    </li>
  );
}

const TeamGenerator = ({ teams }) => {
  return (
    <>
      <div>
        {[...teams].map(([team, members]) => (
          <div key={team}>
            <p className="text-left">{team}</p>
            {members.map((player, index) => (
              <TeamSinglePlayer
                player={player}
                index={index}
                team={team}
                key={`${team}-${player}`}
              />
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default TeamGenerator;
