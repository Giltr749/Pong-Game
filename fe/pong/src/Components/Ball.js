import React, { useRef } from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

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
  playerPaddlePosition,
  computerPaddlePosition,
  setPlayerPaddlePosition,
  setComputerPaddlePosition,
}) {
  const navigate = useRef(useNavigate());
  const [mod, setMod] = useState(1);
  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);

  //getting variables from css
  useEffect(() => {
    const getX = getComputedStyle(document.documentElement).getPropertyValue(
      "--x"
    );
    const getY = getComputedStyle(document.documentElement).getPropertyValue(
      "--y"
    );
    const getHue = getComputedStyle(document.documentElement).getPropertyValue(
      "--hue"
    );
  }, []);

  const reset = () => {
    setPositionX(50);
    setPositionY(80);
    setX(50);
    setY(50);
    setPlayerPaddlePosition(50);
    setComputerPaddlePosition(50);
  };

  const navigation = useRef(useNavigate());

  //moving the ball on the x axis
  function setX(position) {
    document.documentElement.style.setProperty("--x", positionX);
  }

  function setY(position) {
    document.documentElement.style.setProperty("--y", positionY);
  }

  function setHue(time) {
    document.documentElement.style.setProperty("--hue", color);
  }

  function update() {
    window.requestAnimationFrame(update);
    let posX = positionX + deltaX;
    setPositionX(posX);
    setX(posX);
    let posY = positionY + deltaY;
    setPositionY(posY);
    setY(posY);

    //===== TOP/BOTTOM BOUNCE =====//

    if (positionY > 99 || positionY < 1) {
      if (positionY < 50) {
        let yIncrease = positionY + 1;
        setPositionY(yIncrease);
        setY(yIncrease);
      } else if (positionY > 50) {
        let yDecrease = positionY - 1;
        setPositionY(yDecrease);
        setY(yDecrease);
      }
      setDeltaY(deltaY * -1);
    }

    //===== SCORE =====//

    if (positionX < 1) {
      console.log("score");
      let pScoreIncrease = playerScore + 1;
      setPlayerScore(pScoreIncrease + 1);
    } else if (positionX > 99) {
      console.log("score");
      let cScoreIncrease = computerScore + 1;
      setComputerScore(cScoreIncrease);
    }

    //===== PADDLE HIT =====//

    if (
      positionX >= 2 &&
      positionX <= 2.5 &&
      positionY < computerPaddlePosition + 5 &&
      positionY > computerPaddlePosition - 5
    ) {
      console.log("bounce");
      let xIncrease = positionX + 1;
      setPositionX(xIncrease);
      setX(xIncrease);
      setDeltaX(deltaX * -1);
    }
    if (
      positionX <= 98.5 &&
      positionX >= 98 &&
      positionY < playerPaddlePosition + 5 &&
      positionY > playerPaddlePosition - 5
    ) {
      console.log("nice");
      let pScoreIncrease = playerScore + 1;
      setPlayerScore(pScoreIncrease);
      let xDecrease = positionX - 1;
      setPositionX(xDecrease);
      setX(xDecrease);
      setDeltaX(deltaX * -1);
    }

    //===== Game End =====//

    if (computerScore >= 3) {
      navigate.current("/gameover");
    }

    //===== Speedup =====//

    let countIncrease = count + 1;
    setCount(countIncrease);
    if (count >= 15) {
      let modDecrease = mod - 0.005;
      setMod(modDecrease);
      setCount(0);
    }

    //===== Color Change =====//

    let colorIncrease = color + 1;
    setColor(colorIncrease);
    setHue(color);
  }

  useEffect(() => {
    window.requestAnimationFrame(update);
  });

  useEffect(() => {
    reset();
  }, [computerScore]);

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
