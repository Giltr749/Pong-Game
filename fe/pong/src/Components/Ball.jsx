import React from 'react';
import { useState } from 'react';
import "./Ball.css"

function Ball(props) {

    const  ballInit = Math.round((props.ROW_SIZE * props.COL_SIZE)/2) + props.ROW_SIZE;

    const [ballSpeed, setBallSpeed] = useState();
    const [deltaX, setDeltaX] = useState(-props.COL_SIZE);
    const [deltaY, setDeltaY] = useState(-1);
    const [ball, setBall] = useState(ballInit);

    return (
        <div className='ball-style'>
            
        </div>
    );
}

export default Ball;