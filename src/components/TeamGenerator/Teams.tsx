import React, { useState, useEffect } from "react";
import NumberTeamsOrPlayers from "./NumberTeamsOrPlayers";
import TeamGenerator from "./TeamGenerator";
import {Team} from "../Team/Team";

function Teams({ players }) {
  // const [numberOfTeams, setNumberOfTeams] = useState(2);
  const [teams, setTeams] = useState(new Map());
  //lepiej tak
  //const [teams, setTeams] = useState([]);
  //a jeszcze lepiej tak
  // const [teams, setTeams] = useState<Team[]>([]);
  //i potem jak chcesz lecieć po teamach to robisz: teams.map((team, index) => {
  // return <Team team={team}/> //(to sobie musisz dorobić)
  // })

  const [isErrorNumberOfTeams, setIsErrorNumberOfTeams] = useState(false);

  const handleTeams = (numberOfTeams) => {
    const randomPlayers = [];
    const map = new Map();

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

      map.set(`Team ${i + 1}`, teamPlayers);
    }

    setTeams(map);
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
