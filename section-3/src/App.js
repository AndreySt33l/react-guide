import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
    state = {
        persons: [
            { name: "Max", age: 25 },
            { name: "Stephanie", age: 42 },
            { name: "John", age: 24 }
        ]
    }

    switchHandler = (newName) => {
        console.log("Clicked");
        this.setState({
            persons: [
                { name: "Andrey", age: 23 },
                { name: "Stephanie", age: 42 },
                { name: "John", age: 24 }
            ]
        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button onClick={this.switchHandler.bind(this, "Andrey")}>Switch</button>
                <h1>This is my DEMO</h1>
                <Person
                    name = {this.state.persons[0].name}
                    age = {this.state.persons[0].age}
                    click = {this.switchHandler}>
                        I am the best
                </Person>
                <Person
                    name = {this.state.persons[1].name}
                    age = {this.state.persons[1].age}
                    click = {this.switchHandler.bind(this, "Stalnoy")}>
                        He is the best
                </Person>
                <Person
                    name = {this.state.persons[2].name}
                    age = {this.state.persons[2].age}
                    click = {this.switchHandler.bind(this, "Smith")}>
                        We are the best
                </Person>
            </div>
        );
    }
}

export default App;
