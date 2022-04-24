import React, { useEffect } from "react";

export default function ComputerPaddle({
  computerPaddlePosition,
  setComputerPaddlePosition,
  positionY,
}) {
  useEffect(() => {
    const getPaddle = getComputedStyle(
      document.documentElement
    ).getPropertyValue("--position-computer");
  }, []);

  function setPaddle(position) {
    document.documentElement.style.setProperty(
      "--position-computer",
      computerPaddlePosition
    );
  }

  useEffect(() => {
    setPaddle(setComputerPaddlePosition(positionY));
  });

  return (
    <div>
      <div className="paddle left"></div>
    </div>
  );
}
