import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class StandingsTable extends Component {
    render() {
        return (
            <table className="standings-table">
                <thead>
                    <tr>
                        <th>{this.props.division}</th>
                        <th>GP</th>
                        <th>W</th>
                        <th>L</th>
                        <th>OT</th>
                        <th>PTS</th>
                        <th>ROW</th>
                        <th>GF</th>
                        <th>GA</th>
                        <th>DIFF</th>
                        <th>Home</th>
                        <th>Away</th>
                        <th>S/O</th>
                        <th>L10</th>
                        <th>Streak</th>
                    </tr>
                </thead>
                <tbody>
                    {this.props.standings.map(currentTeam => (
                        <tr key={currentTeam.team.id}>
                            <td>{currentTeam.team.name}</td>
                            <td>{currentTeam.gamesPlayed}</td>
                            <td>{currentTeam.leagueRecord.wins}</td>
                            <td>{currentTeam.leagueRecord.losses}</td>
                            <td>{currentTeam.leagueRecord.ot}</td>
                            <td>{currentTeam.points}</td>
                            <td>{currentTeam.row}</td>
                            <td>{currentTeam.goalsScored}</td>
                            <td>{currentTeam.goalsAgainst}</td>
                            <td className={(currentTeam.goalsScored - currentTeam.goalsAgainst) > 0 ? ("diff-positive") : ("diff-negative")}>{(currentTeam.goalsScored - currentTeam.goalsAgainst) > 0 && ("+")}{currentTeam.goalsScored - currentTeam.goalsAgainst}</td>
                            <td>{currentTeam.records.overallRecords[0].wins} - {currentTeam.records.overallRecords[0].losses} - {currentTeam.records.overallRecords[0].ot}</td>
                            <td>{currentTeam.records.overallRecords[1].wins} - {currentTeam.records.overallRecords[1].losses} - {currentTeam.records.overallRecords[1].ot}</td>
                            <td>{currentTeam.records.overallRecords[2].wins} - {currentTeam.records.overallRecords[2].losses}</td>
                            <td>{currentTeam.records.overallRecords[3].wins} - {currentTeam.records.overallRecords[3].losses} - {currentTeam.records.overallRecords[3].ot}</td>
                            <td>{currentTeam.streak.streakCode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default StandingsTable;