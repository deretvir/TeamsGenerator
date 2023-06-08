import React, { useState } from "react";

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
      <div className="flex justify-between items-center m-0 mt-10">
        <button
          className={` ${
            isTeamsActive ? "bg-orange-400" : "bg-gray-500 blur-[0.7px]"
          } flex-1`}
          onClick={() => handleUserChoice(true)}
        >
          Number of teams
        </button>
        <button
          className={`${
            isTeamsActive ? "bg-gray-500 blur-[0.7px]" : "bg-orange-400"
          } flex-1`}
          onClick={() => handleUserChoice(false)}
        >
          Number of players in one team
        </button>
      </div>

      <div className="flex flex-row h-12 w-full justify-between items-start py-0 m-0 border border-stone-700 rounded-md border-opacity-40">
        <button
          className="w-14 h-full bg-orange-400 rounded-l-md flex justify-center items-center font-bold text-white"
          onClick={minusCounter}
        >
          -
        </button>
        <div className="bg-stone-[rgb(128, 128, 129)]] h-full  w-full flex justify-center items-center px-8">
          {counter}
        </div>
        <button
          className="bg-orange-400 w-14 rounded-r-md text-white h-full"
          onClick={addCounter}
        >
          +
        </button>
      </div>
      <button className="bg-orange-400 w-full h-12 flex justify-center items-center">
        Draw teams
      </button>
    </>
  );
};

export default NumberTeamsOrPlayers;
