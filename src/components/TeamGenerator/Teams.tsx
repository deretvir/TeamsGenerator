import React, { useState } from "react";
import NumberTeamsOrPlayers from "./NumberTeamsOrPlayers";

function Teams({ players }) {
  const [numberOfTeams, setNumberOfTeams] = useState(2);
  const [teams, setTeams] = useState(new Map());
  const [isErrorNumberOfTeams, setIsErrorNumberOfTeams] = useState(false);

  return (
    <div>
      <NumberTeamsOrPlayers
        players={players}
        setNumberOfTeams={setNumberOfTeams}
        setIsErrorNumberOfTeams={setIsErrorNumberOfTeams}
      />
      {isErrorNumberOfTeams && <p className="text-red ">wrong input</p>}
    </div>
  );
}

export default Teams;
