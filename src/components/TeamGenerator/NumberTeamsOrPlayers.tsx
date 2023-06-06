import React, { useState } from "react";

function TeamsDivisionMethod({ isTeamsActive, text, handleUserChoice, color1, color2 }) {
  return (
    <button
      className={`${isTeamsActive ? color1: color2} flex-1`}
      onClick={() => handleUserChoice()}
    >
      {text}
    </button>
  );
}

function NumberChangeBtn({ addCounter, sign, radius }) {
  return (
    <button
      className={`bg-orange-400 w-14 ${radius} text-white h-full`}
      onClick={addCounter}
    >
      {sign}
    </button>
  );
}

function DrawBtn(){
  return(
    <button className="w-full h-12 bg-orange-400">
      Draw teams</button>
  )}

const NumberTeamsOrPlayers = () => {
  const [isTeamsActive, setIsTeamsActive] = useState(true);
  const [counter, setCounter] = useState(1);

  function handleUserChoice(isTrue) {
    if (!isTrue) setIsTeamsActive(false);
    else setIsTeamsActive(true);
  }

  function addCounter() {
    setCounter(counter + 1);
  }

  function minusCounter() {
    if (counter < 2) return;
    setCounter(counter - 1);
  }

  return (
    <>
      <div className="flex justify-between items-center m-0">
       <TeamsDivisionMethod isTeamsActive={isTeamsActive} text="number of teams" color1="bg-orange-400" color2="bg-gray-500" handleUserChoice={() => handleUserChoice(true)}/>
       <TeamsDivisionMethod isTeamsActive={isTeamsActive} text="number players in team" color1="bg-gray-500" color2="bg-orange-400" handleUserChoice={() => handleUserChoice(false)} />
      </div>
      
      <div className="flex flex-row h-12 w-full justify-between items-start py-0 m-0 border border-stone-700 rounded-md border-opacity-40">
     <NumberChangeBtn addCounter={minusCounter} sign="-" radius="rounded-l-md"/>
        <div className="bg-stone-[rgb(128, 128, 129)]] h-full  w-full flex justify-center items-center px-8">
          {counter}
        </div>
       <NumberChangeBtn addCounter={addCounter} sign="+" radius="rounded-r-md"/>
      </div>
      <DrawBtn />
    </>
  );
};

export default NumberTeamsOrPlayers;
