import React, { useState, useEffect } from "react";
import NumberTeamsOrPlayers from "./NumberTeamsOrPlayers";
import TeamGenerator from "./TeamGenerator";

function Teams({ players }) {
 // const [numberOfTeams, setNumberOfTeams] = useState(2);
  const [teams, setTeams] = useState(new Map());
  const [isErrorNumberOfTeams, setIsErrorNumberOfTeams] = useState(false);

 const handleTeams = (numberOfTeams) => {
  const randomPlayers = [];
  const map = new Map();
  
  console.log('Team compontent: number of teams  - ',numberOfTeams);

  while (randomPlayers.length !== players.length) {
    const randomNumber = Math.floor(Math.random() * players.length);
    if (!randomPlayers.includes(players[randomNumber])) {
      randomPlayers.push(players[randomNumber]);
    }
  }

  const playersPerTeam = players.length / numberOfTeams;
  let playerIndex = 0;

  for (let i = 0; i < numberOfTeams; i++) {
    const teamPlayers = [];

    for (let j = 0; j < playersPerTeam; j++) {
      teamPlayers.push(randomPlayers[playerIndex]);
      playerIndex++;
    }

    map.set(`team${i}`, teamPlayers);
  }

  setTeams(map); // Use functional form of setTeams

  // Optional: You can also log the updated teams here to verify
  console.log(map);
};

  return (
    <>
      <div>
        <NumberTeamsOrPlayers
          players={players}
         
          setIsErrorNumberOfTeams={setIsErrorNumberOfTeams}
          handleTeams={handleTeams}
        />
        {isErrorNumberOfTeams && (
          <p className="text-red-700 font-bold capitalize text-lg">
            wrong input!
          </p>
        )}
      </div>
      <TeamGenerator teams={teams} />
    </>
  );
}

export default Teams;
