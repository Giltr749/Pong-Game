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

  const handleMouse = (e) => {
    setPaddle(setPlayerPaddlePosition(e));
    console.log(e.clientY);
    console.log(e.pageY);
  };
  console.log(playerPaddlePosition);

  return (
    <div>
      <div className="paddle right" onMouseMove={handleMouse}></div>
    </div>
  );
}
