import React from 'react';
import { useState } from 'react';
import "./Ball.css"

function Ball(props) {

    const [ballSpeed, setBallSpeed] = useState();
    const [deltaX, setDeltaX] = useState(-props.COL_SIZE);
    const [deltaY, setDeltaY] = useState(-1);

    return (
        <div className='ball-style'>
            
        </div>
    );
}

export default Ball;