import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import "./GameOver.css"

function GameOver({
    playerScore
}) {
        
    const navigate = useRef(useNavigate());

    function handleClick() {
        navigate.current('/pong');
    }

    return (
        <div className='over-div'>
            <h1>GAME OVER</h1>
            <p>Your Score: {playerScore}</p>
            <button onClick={handleClick}>Play Again?</button>
        </div>
    );
}

export default GameOver;