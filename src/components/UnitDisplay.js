import React from 'react';
import '../styles/unitDisplay.css';



const UnitDisplay = (props) => {
    const HandleUnSelectUnit = props.HandleUnSelectUnit;
    const unit = props.unit;

    return (
        <div className="unit-container">
            <button onClick={() => {HandleUnSelectUnit()}}></button>
        </div>
    );
};

export default UnitDisplay;
