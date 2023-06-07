import React, { useState } from "react";
import NumberTeamsOrPlayers from "./NumberTeamsOrPlayers";

function Teams({players}) {
  const [numberOfTeams, setNumberOfTeams]=useState(2);
  const [teams, setTeams]= useState(new Map());
  const [isTeamsActive, setIsTeamsActive] = useState(true);

 
  
  

  return (
    <div>
        <NumberTeamsOrPlayers players={players} setNumberOfTeams={setNumberOfTeams} />
       
    </div>
  );
}

export default Teams;


