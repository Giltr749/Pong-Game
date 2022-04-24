import React from "react";
import { useEffect } from "react";

export default function PlayerPaddle({
  playerPaddlePosition,
  setPlayerPaddlePosition,
  movePlayer,
}) {
  useEffect(() => {
    const getPaddle = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--position-player");
  }, []);

  function setPaddle(position) {
    document.documentElement.style.setProperty(
      "--position-player",
      playerPaddlePosition
    );
  }

  document.addEventListener("mousemove", (e) => {
    //convert from px to vh
    setPaddle(setPlayerPaddlePosition((e.y / window.innerHeight) * 100));
  });

  // const handleMouse = (e) => {
  //   setPaddle(setPlayerPaddlePosition(e));
  //   console.log(e.clientY);
  // };
  // console.log(playerPaddlePosition);

  return (
    <div>
      <div className="paddle right"></div>
    </div>
  );
}
