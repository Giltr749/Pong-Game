import React, { useState } from "react";
import PlayerPaddle from "../Components/PlayerPaddle";
import ComputerPaddle from "../Components/ComputerPaddle";
import "./PingPongPage.css";
import Ball from "../Components/Ball";
import Score from "../Components/Score";

//update loop
export default function PingPongPage() {
  const [positionX, setPositionX] = useState(50);
  const [positionY, setPositionY] = useState(50);
  const [deltaX, setDeltaX] = useState(0.5);
  const [deltaY, setDeltaY] = useState(0.5);
  const [playerPaddlePosition, setPlayerPaddlePosition] = useState(50);

  //   function movePlayer(e) {
  //     let y = e.clientY;
  //   }

  return (
    <div>
      <Score />
      <ComputerPaddle />
      <PlayerPaddle
        playerPaddlePosition={playerPaddlePosition}
        setPlayerPaddlePosition={setPlayerPaddlePosition}
        // movePlayer={movePlayer}
      />
      <Ball
        positionX={positionX}
        setPositionX={setPositionX}
        positionY={positionY}
        setPositionY={setPositionY}
        deltaY={deltaY}
        setDeltaY={setDeltaY}
        deltaX={deltaX}
        setDeltaX={setDeltaX}
      />
    </div>
  );
}

//   let lastTime;
//   function update(time) {
//     if (lastTime != null) {
//       const delta = time - lastTime;
//       update(delta);
//     }
//     lastTime = time;
//     // window.requestAnimationFrame(update);
//   }

//   window.requestAnimationFrame(update);
