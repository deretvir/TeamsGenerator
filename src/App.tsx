import { useState } from "react";
import PlayerCreatorContainer from "./components/PlayerCreator/PlayerCreatorContainer";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <PlayerCreatorContainer />
    </>
  );
}

export default App;
