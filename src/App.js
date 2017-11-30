import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

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

  componentDidMount() {
    // Grab our dogs from the API
    // Make a request for a user with a given ID
    axios.get('/api/dogs')
      .then(function (response) {
        console.log('Success!')
        console.log(response.data);
      })
      .catch(function (error) {
        console.log('Whoops!')
        console.log(error);
      });

  }

}

export default App;
