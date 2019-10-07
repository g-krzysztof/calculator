import React from 'react';
import '../css/Display.css';

function Display(props) {
    return (
        <div className="Display">
            {props.display}
        </div>
    );
}

export default Display;