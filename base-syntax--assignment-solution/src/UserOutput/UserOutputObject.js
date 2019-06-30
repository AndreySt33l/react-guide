import React, {Component} from 'react';

import './UserOutput.css';

class UserOutputObject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            firstname: props.firstName
        }
    }

    

    render() {
        return (
            <h1>Hello, {this.state.firstname}</h1>
        );
    }
}

export default UserOutputObject;
