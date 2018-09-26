import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    teams: [],
    error: false
  }
  componentDidMount = () => {
    this.pullTeams();
  }

  pullTeams = () => {
    fetch('https://statsapi.web.nhl.com/api/v1/teams')
      .then(response => response.json())
      .then(data => {
        this.setState({
          teams: data.teams
        })
      })
      .catch(err => console.log(err));
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">

        </header>
        
      </div>
    );
  }
}

export default App;
