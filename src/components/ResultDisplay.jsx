import React from 'react';
import styles, { layout } from '../style'

const ResultDisplay = ({ rating, feedback }) => {
    return(
        <div>
            <h2>Calificación: {rating}</h2>
            <p>Feddback: {feedback}</p>
        </div>
    );
};

export default ResultDisplay;