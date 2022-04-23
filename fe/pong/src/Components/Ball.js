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
}) {
  //getting current x variable
  useEffect(() => {
    const getX = getComputedStyle(document.documentElement).getPropertyValue(
      "--x"
    );
    const getY = getComputedStyle(document.documentElement).getPropertyValue(
      "--y"
    );
    // console.log(getX);
    // console.log(getY);
  }, []);

  // console.log(positionX);
  // console.log(positionY);

  //moving the ball on the x axis
  function setX(position) {
    document.documentElement.style.setProperty("--x", positionX);
  }

  function setY(position) {
    document.documentElement.style.setProperty("--y", positionY);
  }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setX(setPositionX((positionX += deltaX)));
  //     setY(setPositionY((positionY += deltaY)));
  //     // velocity -= 0.001;
  //     if (positionY > 99 || positionY < 1) {
  //       deltaY *= -1;
  //     } else if (positionX < 1 || positionX > 99) {
  //       deltaX *= -1;
  //     }
  //   }, 10);
  //   return () => clearInterval(interval);
  // }, []);

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
