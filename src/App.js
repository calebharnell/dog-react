import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state = {
    dogs: ['Jeff', 'Scooby']
  }
  render() {
    return (
      <div className="App">
        {
          this.state.dogs.map(dog => <p>{dog}</p>)
        }
      </div>
    );
  }
}

export default App;
