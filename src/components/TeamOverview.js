import React, { Component } from 'react';
import '../App.js';

class TeamOverview extends Component {
    state = {
        error: false,
      };

    render() {
        const team = this.props.team;
        const stats = this.props.team.teamStats[0].splits[0].stat;
        return (
            <div className="player-info" key={team.name}>
                
                    <div className="player-inner">
                        <div className="info">
                            <h3>{team.name}</h3>
                            <ul>
                                <li>{team.venue.name}, {team.venue.city}</li>
                                <li>{team.conference.name} Conference</li>
                                <li>{team.division.name} Division</li>
                            </ul>
                        </div>
                        <div className="player-stats">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Power Play Percentage</td>
                                        <td>{stats.powerPlayPercentage}</td>
                                    </tr>
                                    <tr>
                                        <td>Penalty Kill Percentage</td>
                                        <td>{stats.penaltyKillPercentage}</td>
                                    </tr>
                                    <tr>
                                        <td>Faceoff Win Percentage</td>
                                        <td>{stats.faceOffWinPercentage}</td>
                                    </tr>
                                    <tr>
                                        <td>Games Played</td>
                                        <td>{stats.gamesPlayed}</td>
                                    </tr>
                                    <tr>
                                        <td>Wins</td>
                                        <td>{stats.wins}</td>
                                    </tr>
                                    <tr>
                                        <td>Losses</td>
                                        <td>{stats.losses}</td>
                                    </tr>
                                    <tr>
                                        <td>OT Losses</td>
                                        <td>{stats.losses}</td>
                                    </tr>
                                    <tr>
                                        <td>Points</td>
                                        <td>{stats.pts}</td>
                                    </tr>
                                    <tr>
                                        <td>Goals Against Per Game</td>
                                        <td>{stats.goalsAgainstPerGame}</td>
                                    </tr>
                                    <tr>
                                        <td>Goals Per Game</td>
                                        <td>{stats.goalsPerGame}</td>
                                    </tr>
                                    <tr>
                                        <td>Shots Per Game</td>
                                        <td>{stats.shotsPerGame}</td>
                                    </tr>
                                    <tr>
                                        <td>Shooting Percentage</td>
                                        <td>{stats.shootingPctg}</td>
                                    </tr>
                                    <tr>
                                        <td>Shots Allowed</td>
                                        <td>{stats.shotsAllowed}</td>
                                    </tr>
                                    <tr>
                                        <td>Power Play Opportunities</td>
                                        <td>{stats.powerPlayOpportunities}</td>
                                    </tr>
                                    <tr>
                                        <td>Save Percentage</td>
                                        <td>{stats.savePctg}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                

            </div>
        )
    }
}

export default TeamOverview;