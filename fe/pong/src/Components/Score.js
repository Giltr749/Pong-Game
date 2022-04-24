import React from "react";

export default function Score({
  computerScore,
  setComputerScore,
  playerScore,
  setPlayerScore,
}) {
  console.log(playerScore);
  return (
    <div className="score">
      <div className="computer-score">{computerScore}</div>
      <div className="player-score">{playerScore}</div>
    </div>
  );
}
