import React from 'react';
import '../css/Display.css';

function Display(props) {

    let { time, display, operator, secondDisplay } = props;

    return (
        <div className="Display">
            {time === 3 || time === 4 ? secondDisplay : null}
            {time === 3 || time === 4 ? operator : null}
            {time === 1 ? 0 : null}
            {time === 2 || time === 4 || time === 5 ? display : null}
            {time === 3 && display === "0" ? "0" : null}
        </div>
    );
}

export default Display;