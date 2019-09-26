import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class StandingsTable extends Component {
    render() {
        let width = this.props.windowWidth;
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
                        <th className="hide">ROW</th>
                        <th className="hide">GF</th>
                        <th className="hide">GA</th>
                        <th className="hide">DIFF</th>
                        <th className="hide">Home</th>
                        <th className="hide">Away</th>
                        <th className="hide-small">S/O</th>
                        <th className="hide">L10</th>
                        <th className="hide">Streak</th>
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
                            <td className="hide">{currentTeam.row}</td>
                            <td className="hide">{currentTeam.goalsScored}</td>
                            <td className="hide">{currentTeam.goalsAgainst}</td>
                            <td className={(currentTeam.goalsScored - currentTeam.goalsAgainst) > 0 ? ("diff-positive hide") : ("diff-negative hide")}>{(currentTeam.goalsScored - currentTeam.goalsAgainst) > 0 && ("+")}{currentTeam.goalsScored - currentTeam.goalsAgainst}</td>
                            <td className="hide">{currentTeam.records.overallRecords[0].wins} - {currentTeam.records.overallRecords[0].losses} - {currentTeam.records.overallRecords[0].ot}</td>
                            <td className="hide">{currentTeam.records.overallRecords[1].wins} - {currentTeam.records.overallRecords[1].losses} - {currentTeam.records.overallRecords[1].ot}</td>
                            <td className="hide-small">{currentTeam.records.overallRecords[2].wins} - {currentTeam.records.overallRecords[2].losses}</td>
                            <td className="hide">{currentTeam.records.overallRecords[3].wins} - {currentTeam.records.overallRecords[3].losses} - {currentTeam.records.overallRecords[3].ot}</td>
                            <td className="hide">{currentTeam.streak.streakCode}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        )
    }
}

export default StandingsTable;