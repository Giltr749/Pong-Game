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
  const initialVelocity = 0.025;
  //getting current x variable
  useEffect(() => {
    const getX = getComputedStyle(document.documentElement).getPropertyValue(
      "--x"
    );
    const getY = getComputedStyle(document.documentElement).getPropertyValue(
      "--y"
    );
    console.log(getX);
    console.log(getY);
  }, []);

  console.log(positionX);
  console.log(positionY);

  //moving the ball on the x axis
  function setX(position) {
    document.documentElement.style.setProperty("--x", positionX);
  }

  function setY(position) {
    document.documentElement.style.setProperty("--y", positionY);
  }

  // setInterval(() => {
  //   setPositionX((positionX += deltaX));
  //   setPositionY((positionY += deltaY));
  // }, 100);

  // useEffect(() => {
  //   setX(positionX);
  //   setY(positionY);
  // }, []);

  // setX(positionX);
  // setY(positionY);

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

  return (
    <div>
      <div className="ball"></div>
    </div>
  );
}
