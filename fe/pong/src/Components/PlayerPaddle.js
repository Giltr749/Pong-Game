import React from "react";
import { useEffect } from "react";

export default function PlayerPaddle({
  playerPaddlePosition,
  setPlayerPaddlePosition,
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
    setPaddle(setPlayerPaddlePosition((e.y / window.innerHeight) * 100)); //convert from px to vh
  });

  return (
    <div>
      <div className="paddle right"></div>
    </div>
  );
}
