import React from 'react';
import './Parks.css';

const Parks = (props) => {
    return (
        <div className="Parks">
        {props.parks.map((color, idx) =>
            <div
            onClick={() => props.handleColorSelection(idx)}
            className="Parks-color"
            style={{
                backgroundColor: props.selColorIdx === idx ? 'white' : color,
                border: props.selColorIdx === idx ? `14px solid ${color}` : false
            }}
            key={color}
            />
        )}
        </div>
    );
}

export default ColorPicker;
