import React, { Component } from 'react';
import '../App.js';

class TeamRoster extends Component {
    render() {
        const roster = this.props.roster;
        let windowWidth = this.props.windowWidth;
        return (
            <div className="team-stats">
                    <div className="stat-window">
                    <div className="vertical">Roster</div>
                        <table className="players-table">
                            <thead>
                                <tr>
                                    <th colSpan="3">Team Roster</th>
                                </tr>
                            </thead>
                            <tbody>
                                {roster.map(player => (
                                    <tr 
                                        key={player.person.id} 
                                        className={player.person.id === this.props.selectedPlayer ? 'active' : 'player-row'} 
                                        onClick={() => this.props.handlePlayer(player.person.id)}
                                        >
                                            <td>{player.jerseyNumber}</td>
                                            <td>{player.person.fullName}</td>
                                            <td>{player.position.abbreviation}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
            </div>
        )
    }
}

export default TeamRoster;