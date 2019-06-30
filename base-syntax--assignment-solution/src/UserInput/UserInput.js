import React from 'react';

const userInput = (props) => {
    const inputStyle = {
        display: 'block'
    };

    return (
    <input type="text"
           style={inputStyle}
           onChange={props.changed}
           />
    );
};

export default userInput;