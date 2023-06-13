import { useState } from "react";
import PlayerCreatorContainer from "./components/PlayerCreator/PlayerCreatorContainer";
import Header from "./components/Header";
import "./App.css";
import PlayerManager from "./components/PlayerManager/PlayerManager";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <PlayerManager />
    </>
  );
}

export default App;
