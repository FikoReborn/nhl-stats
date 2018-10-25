import React, { Component } from 'react';
import '../App.js';

class TeamStats extends Component {
    render() {
        const team = this.props.teams[this.props.id - 1];
        let statValue;
        let statPlace;
        if (team) {
            statValue = team.teamStats[0].splits[0].stat;
            statPlace = team.teamStats[0].splits[1].stat;
        }
        console.log(team);
        return (
            <div>
                {team ? (
                    <div className="stats">
                    <div className="logo-container">
                        <img src={require(`../img/${team.abbreviation}.svg`)} alt={team.name} className="team-logo" />
                    </div>
                    <div className="conference">
                        {team.conference.name} Conference
                    </div>
                    <div className="division">
                        {team.division.name} Division
                    </div>
                    <div className="venue">
                        {team.venue.name}, {team.venue.city}
                    </div>
                    <div className="team-stats">
                    <div className="stat-window">
                        <div className="stat-title">
                            Games Played:
                        </div>

                        <div className="stat-value">
                            {statValue.gamesPlayed}
                        </div>
                        <div className="stat-title">
                            Wins:
                        </div>

                        <div className="stat-value">
                            {statValue.wins} ({statPlace.wins})
                        </div>
                        
                        <div className="stat-title">
                            Losses:
                        </div>

                        <div className="stat-value">
                            {statValue.losses} ({statPlace.losses})
                        </div>

                        <div className="stat-title">
                            Overtime Losses:
                        </div>

                        <div className="stat-value">
                            {statValue.ot} ({statPlace.ot})
                        </div>

                        <div className="stat-title">
                            Points: 
                        </div>

                        <div className="stat-value">
                            {statValue.pts} ({statPlace.pts})
                        </div>
                    </div>
                    </div>
                    <div className="roster">
                        <table className="players-table">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Player Name</th>
                                    <th>Position</th>
                                </tr>
                            </thead>
                            <tbody>
                                {team.roster.roster.map(player => (
                                    <tr key={player.person.id}>
                                        <td>{player.jerseyNumber}</td>
                                        <td>{player.person.fullName}</td>
                                        <td>{player.position.name}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    </div>

                ) : (<p>Loading...</p>)}
            </div>
        )
    }
}

export default TeamStats;