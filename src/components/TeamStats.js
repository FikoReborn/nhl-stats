import React, { Component } from 'react';
import '../App.js';

class TeamStats extends Component {
    render() {
        const team = this.props.teams[this.props.id];
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
                        <img src={require(`../img/${team.abbreviation}.svg`)} alt={team.name} className="team-logo-stats" />
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
                    <table>
                        <tbody>
                            <tr>
                                <th>Games Played:</th>
                                <td>{statValue.gamesPlayed}</td>
                            </tr>
                            <tr>
                                <th>Wins:</th>
                                <td>{statValue.wins} ({statPlace.wins})</td>
                            </tr>
                            <tr>
                                <th>Losses:</th>
                                <td>{statValue.losses} ({statPlace.losses})</td>
                            </tr>
                            <tr>
                                <th>OT Losses:</th>
                                <td>{statValue.ot} ({statPlace.ot})</td>
                            </tr>
                            <tr>
                                <th>Points:</th>
                                <td>{statValue.pts} ({statPlace.pts})</td>
                            </tr>
                            <tr>
                                <th>Power Play:</th>
                                <td>{statValue.powerPlayPercentage}% ({statPlace.powerPlayPercentage})</td>
                            </tr>
                            <tr>
                                <th>Penalty Kill:</th>
                                <td>{statValue.penaltyKillPercentage}% ({statPlace.penaltyKillPercentage})</td>
                            </tr>
                            </tbody>
                    </table>
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