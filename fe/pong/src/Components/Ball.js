import React from "react";
import { useEffect } from "react";

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
    setPositionY(50);
    setPositionX(50);
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
      setX(setPositionX((positionX += deltaX)));
      setY(setPositionY((positionY += deltaY)));
      if (positionY > 99 || positionY < 1) {
        deltaY *= -1;
      } else if (positionX < 1) {
        setComputerScore((computerScore += 1));
      } else if (positionX > 99) {
        setPlayerScore((playerScore += 1));
      }
    }, 10);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    reset();
  }, [playerScore]);

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
