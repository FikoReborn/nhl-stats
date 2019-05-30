import React, { Component } from 'react';
import sort from 'fast-sort';
import { Route, withRouter } from 'react-router-dom';
import PlayerStats from './PlayerStats';
import TeamOverview from './TeamOverview';
import TeamRoster from './TeamRoster';
import '../App.js';

class TeamStats extends Component {
    state = {
        selectedPlayer: null,
        change: false
    }
    handlePlayer = (playerid) => {
        this.setState({selectedPlayer:playerid});
        this.props.pullPlayerInfo(playerid);
        this.props.pullPlayerStats(playerid);
        this.setState({change:true})
        this.props.history.push('/teams/' + this.props.id + '/player/' + playerid)
    }
    render() {
        
        const team = this.props.teams[this.props.id];
        let roster = team.roster.roster;
        // Sort team roster
        sort(roster).by([
            { desc: t => t.position.type },
            { asc: n => n.person.fullName.substring(n.person.fullName.indexOf(' ')+1) }
        ]);
        let count = 0;
        // Count goalies, then shift/push to end of array
        roster.forEach(player => {
            if (player.position.type === "Goalie") {
                count++;
            }
        });
        for (let i = 0; i < count; i++) {
            roster.push(roster.shift());
        }
        count = 0;
        let statValue;
        let statPlace;
        if (team) {
            statValue = team.teamStats[0].splits[0].stat;
            statPlace = team.teamStats[0].splits[1].stat;
        }
        return (
            <div>
                {team ? (
                    <div className="stats">
                        <div className="logo-container">
                            <img src={require(`../img/${team.abbreviation}.svg`)} alt={team.name} className="team-logo-stats" />
                            <h1>{team.name}</h1>
                        </div>

                        <TeamRoster 
                            roster={roster}
                            handlePlayer={this.handlePlayer}
                            pullPlayerInfo={this.props.pullPlayerInfo}
                            pullPlayerStats={this.props.pullPlayerStats}
                            selectedPlayer={this.state.selectedPlayer}
                        />
                        <Route
                  path="/teams/:id/player/:pid"
                  render={props => (
                            <PlayerStats
                            playerStats={this.props.playerStats}
                            playerInfo={this.props.playerInfo}
                            
                            />
                            )}
                            />
                        <Route exact path="/teams/:id"
                        render={props => (
                            <TeamOverview 
                                team={team}
                            />
                        )}
                    />
                            
                    </div>
                    

                ) : (<p>Loading...</p>)}
            </div>
        )
    }
}

export default withRouter(TeamStats);