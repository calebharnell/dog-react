import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  state = {
    // Set state to empty array
    dogs: []
  }

  render() {
    return (
      <div className="App">
        {
          // Display list of dogs
          this.state.dogs.map(dog => <p>{dog}</p>)
        }
      </div>
    );
  }

  componentDidMount() {
    // Grab our dogs from the API
    axios.get('/api/dogs')
      .then((response) => {
        console.log('Success!')
        console.log(response.data);
        // Set state to array of dogs from API
        this.setState({
          dogs: response.data
        })

      })
      .catch(function (error) {
        console.log('Whoops!')
        console.log(error);
      });

  }

}

export default App;
