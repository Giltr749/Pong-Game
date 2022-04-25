import React, {useState} from "react";
import PingPongPage from "./pages/PingPongPage";
import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import GameOver from "./pages/GameOver";

export default function App() {
  
  const [playerScore, setPlayerScore] = useState(0);

  return (
    <div>
      <Routes>
        <Route index element={<Login />} />
        <Route path="/pong" element={<PingPongPage playerScore={playerScore} setPlayerScore={setPlayerScore} />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/gameover" element={<GameOver playerScore={playerScore}/>}/>
      </Routes>
    </div>
  );
}
