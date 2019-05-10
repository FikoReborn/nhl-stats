import React, { Component } from 'react';
import Teams from './components/Teams';
import TeamStats from './components/TeamStats';
import Standings from './components/Standings';
import { Route } from 'react-router-dom';
import './App.css';

class App extends Component {
  state = {
    playerStats: [],
    playerInfo: [],
    teams: [],
    standings: [],
    metro: [],
    atlantic: [],
    central: [],
    pacific: [],
    easternWildCard: [],
    westernWildCard: [],
    error: false
  };

  componentDidMount = () => {
    this.pullTeams();
    this.pullStandings();
  };
  pullTeams = () => {
    fetch(
      'https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster&expand=team.schedule.next&expand=team.schedule.previous&expand=team.stats'
    )
      .then(response => response.json())
      .then(data => {
        let newTeams = data.teams;
        for (let i = 0; i < newTeams.length; i++) {
          newTeams[i].id = i;
        }
        this.setState({teams:newTeams});
      })
      .catch(err => console.log(err));
  };

  pullStandings = () => {
    fetch('https://statsapi.web.nhl.com/api/v1/standings?expand=standings.record')
    .then(response => response.json())
    .then(data => {
      let metro = [];
      let atlantic = [];
      let central = [];
      let pacific = [];
      let easternWildCard = [];
      let westernWildCard = [];
      this.setState({standings:data.records});
      this.state.standings.forEach(division => {
        if (division.conference.name === "Eastern") {
          division.teamRecords.forEach(team => {
            if (team.wildCardRank > 0) {
              easternWildCard.push(team)
            }
          })
        }
        if (division.conference.name === "Western") {
          division.teamRecords.forEach(team => {
            if (team.wildCardRank > 0) {
              westernWildCard.push(team);
            }
          })
        }
        division.teamRecords.forEach(team => {
          if (team.divisionRank <= 3 && division.division.abbreviation === "M") {
            metro.push(team);
          } else if (team.divisionRank <= 3 && division.division.abbreviation === "A") {
            atlantic.push(team);
          } else if (team.divisionRank <= 3 && division.division.abbreviation === "C") {
            central.push(team);
          } else if (team.divisionRank <= 3 && division.division.abbreviation === "P") {
            pacific.push(team);
          }
        })
      })
      this.setState({easternWildCard:easternWildCard, westernWildCard:westernWildCard})
      this.setState({metro:metro,atlantic:atlantic,central:central,pacific:pacific})
      }
      )
    .catch(err => console.log(err))
  }

  pullPlayerInfo = (playerid) => {
    this.forceUpdate();
    fetch(
        'https://statsapi.web.nhl.com/api/v1/people/' + playerid
    )
    .then(response => response.json())
    .then(data => {
    this.setState({playerInfo:data.people[0]});
    })
    .catch(err => console.log(err));
  };

  pullPlayerStats = (playerid) => {
      fetch(
          'https://statsapi.web.nhl.com/api/v1/people/' + playerid + '/stats?stats=statsSingleSeason'
      )
      .then(response => response.json())
      .then(data => {
        if (data.stats[0].splits.length >= 1) {
          this.setState({playerStats:data.stats[0].splits[0].stat})
        }
      })
  }

  filterTeams = division => {
    return this.state.teams.filter(
      fteam => fteam.division.abbreviation === division
    );
  };

  render() {
    return (
      <div className="App">
        <header className="App-header" />
        <div>
          {this.state.teams.length > 0 ? (
            <div className="nhl-container">
              <nav>
                <ul className="team-list">
                  <Teams teams={this.state.teams} />
                </ul>
              </nav>
              <main>
                <Route
                  path="/teams/:id"
                  render={props => (
                    <TeamStats
                      teams={this.state.teams}
                      playerStats={this.state.playerStats}
                      playerInfo={this.state.playerInfo}
                      pullPlayerInfo={this.pullPlayerInfo}
                      pullPlayerStats={this.pullPlayerStats}
                      id={props.match.params.id}
                    />
                  )}
                />
                <Route
                  path="/standings"
                  render={() => (
                    <Standings 
                      standings={this.state.standings}
                      easternWildCard={this.state.easternWildCard}
                      westernWildCard={this.state.westernWildCard}
                      metro={this.state.metro}
                      atlantic={this.state.atlantic}
                      central={this.state.central}
                      pacific={this.state.pacific}
                    />
                  )}
                />
              </main>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
}

export default App;
