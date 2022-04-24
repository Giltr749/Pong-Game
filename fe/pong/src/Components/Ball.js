import React from "react";
import { useEffect, useState } from "react";

export default function Ball({
  positionX,
  setPositionX,
  positionY,
  setPositionY,
  deltaX,
  setDeltaX,
  deltaY,
  setDeltaY,
  computerScore,
  setComputerScore,
  playerScore,
  setPlayerScore,
  setPlayerPaddlePosition,
  setComputerPaddlePosition,
}) {

  // const [test, setTest] = useState(playerScore);

  //getting current x variable
  useEffect(() => {
    const getX = getComputedStyle(document.documentElement).getPropertyValue(
      "--x"
    );
    const getY = getComputedStyle(document.documentElement).getPropertyValue(
      "--y"
    );
  }, []);

  const reset = () => {
    setPositionX(50);
    setPositionY(50);
    setX(50);
    setY(50);
    setPlayerPaddlePosition(50);
    setComputerPaddlePosition(50);
  };

  //moving the ball on the x axis
  function setX(position) {
    document.documentElement.style.setProperty("--x", positionX);
  }

  function setY(position) {
    document.documentElement.style.setProperty("--y", positionY);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      let posX = positionX + deltaX;
      setPositionX(posX);
      setX(posX);
      let posY = positionY + deltaY;
      setPositionY(posY);
      setY(posY);
      if (positionY > 99 || positionY < 1) {
        setDeltaY(deltaY*-1);
        setDeltaX(deltaX *-1);
      }
      if (positionX < 1) {
        console.log("score");
        setComputerScore(computerScore + 1);
      } else if (positionX > 99) {
        console.log("score");
        let scoreIncrease = playerScore + 1
        setPlayerScore(scoreIncrease);
      }
    }, 30);
    return () => clearInterval(interval);
  });

  useEffect(() => {
    reset();
  }, [playerScore, computerScore]);

  return (
    <div>
      <div className="ball"></div>
    </div>
  );
}
//move randomly
// function reset() {
//   while (true) {
//     const heading = randomNumberBetween(0, 2 * Math.PI);
//     setPostionY(Math.cos(heading));
//     setPostionX(Math.sin(heading));
//   }
// }

// function randomNumberBetween(min, max) {
//   return Math.random() * (max - min) + min;
// }
