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
    const teams = this.state.teams;
    return (
      <div className="App">
        <header className="App-header">

        </header>
        <h2>Eastern Conference</h2>
          <h3>Metropolitan</h3>
          {teams.filter(fteam => fteam.division.abbreviation === "M").map(team => (
            <img src={require(`./img/${team.abbreviation}.svg`)} alt={team.name} className="team-logo" />
          ))}
        
          <h3>Atlantic</h3>
          {teams.filter(fteam => fteam.division.abbreviation === "A").map(team => (
            <img src={require(`./img/${team.abbreviation}.svg`)} alt={team.name} className="team-logo" />
          ))}
        <h2>Western Conference</h2>
          <h3>Central</h3>
          {teams.filter(fteam => fteam.division.abbreviation === "C").map(team => (
            <img src={require(`./img/${team.abbreviation}.svg`)} alt={team.name} className="team-logo" />
          ))}
          <h3>Pacific</h3>
          {teams.filter(fteam => fteam.division.abbreviation === "P").map(team => (
            <img src={require(`./img/${team.abbreviation}.svg`)} alt={team.name} className="team-logo" />
          ))}
      </div>
    );
  }
}

export default App;
