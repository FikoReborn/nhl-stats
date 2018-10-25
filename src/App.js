import React, { Component } from 'react';
import Teams from './components/Teams';
import TeamStats from './components/TeamStats';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    teams: [],
    error: false
  };

  componentDidMount = () => {
    this.pullTeams();
  };
  pullTeams = () => {
    fetch(
      'https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster&expand=team.schedule.next&expand=team.schedule.previous&expand=team.stats'
    )
      .then(response => response.json())
      .then(data => {
        this.setState({
          teams: data.teams
        });
      })
      .catch(err => console.log(err));
  };

  filterTeams = division => {
    return this.state.teams.filter(
      fteam => fteam.division.abbreviation === division
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <Route
          exact
          path="/"
          render={() => (
            <div>
              {this.state.teams.length > 0 ? (
                <div>
                <nav>
                  <ul className="team-list">
                    <Teams teams={this.state.teams} />
                  </ul>
                </nav>
                <main>
                </main>
                </div>
              ) : (
                <p>Loading...</p>
              )}
            </div>
          )}
        />
        <Route
          path="/teams/:id"
          render={props => (
            <TeamStats teams={this.state.teams} id={props.match.params.id} />
          )}
        />
      </div>
    );
  }
}

export default App;
