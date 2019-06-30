import React from 'react';

import './UserOutput.css';

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <h1>User Information</h1>
            <p>First name: {props.firstName}</p>
            <p>Last name: {props.lastName}</p>
            <p>Date of birth: {props.dateOfBirth}</p>
        </div>
    );
};

export default userOutput;