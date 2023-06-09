  
// czy jest mozliwe wyrenderowac z obiekt Map? Ja tutaj przeksztalcam,


import React from "react";

const TeamGenerator = ({ teams }) => {
  return (
    <>
      {[...teams].map(([team, members]) => (
        <div key={team}>
          <p>{team}</p>
          {members.map((player,index)=>(
            <p key={`${team}-{player}`}>{player}</p>
          ))}
        </div>
      ))}
    </>
  );
};

export default TeamGenerator;

