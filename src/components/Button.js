import React from 'react';
import '../css/Button.css';

function Button(props) {
    return (
        <div className="Button">
            <button value={props.name} onClick={props.onClick}>{props.name}</button>
        </div>
    );
}

export default Button;