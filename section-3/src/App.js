import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './Person/Person.css';
import Person from './Person/Person.js';

class App extends Component {
    state = {
        persons: [
            { name: "Max", age: 25 },
            { name: "Stephanie", age: 42 },
            { name: "John", age: 24 }
        ]
    }

    switchHandler = () => {
        console.log("Clicked");
        this.setState({
            persons: [
                { name: "Andrey", age: 23 },
                { name: "Stephanie", age: 42 },
                { name: "John", age: 24 }
            ]
        });
    }

    nameChangedHandler = (event) => {
        this.setState( {
            persons: [
                { name: 'Max', age: 25 },
                { name: event.target.value , age: 42 },
                { name: "John", age: 24 }
            ]
        })
    }
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <button
                    style={style}
                    onClick={this.switchHandler}>
                        Switch
                </button>
                <h1>This is my DEMO</h1>
                <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age}>I am the best</Person>
                <Person
                    name = {this.state.persons[1].name}
                    age = {this.state.persons[1].age}
                    click={this.switchHandler.bind(this, 'Max!')}
                    changed={this.nameChangedHandler}>
                        I am the best
                </Person>
                <Person name = {this.state.persons[2].name} age = {this.state.persons[2].age}>I am the best</Person>
            </div>
        );
    }
}

export default App;
