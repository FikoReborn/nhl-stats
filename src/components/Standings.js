import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import '../App.css';

class Standings extends Component {
    state = {
        loadedConfs: []
    }

    trackConfs = (conf) => {
        let addConf = this.state.loadedConfs;
        addConf.push(conf);
        this.setState({loadedConfs:addConf})
    }

    render() {
        return (
            <div className="standings">
                {this.props.standings.map(division => (
                    <div className="standings-inner" key={division.division.id}>
                    {(division !== this.props.standings[1] && division !== this.props.standings[3]) && (
                        <h2 className="conf-heading">{division.conference.name}</h2>
                    )}
                        <table className="standings-table">
                            <thead>
                                <tr>
                                    <th>{division.division.name}</th>
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
                                {division.teamRecords.filter(team => team.divisionRank <= 3).map(currentTeam => (
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
                                        <td>{currentTeam.goalsScored - currentTeam.goalsAgainst}</td>
                                        <td>{currentTeam.records.overallRecords[0].wins} - {currentTeam.records.overallRecords[0].losses} - {currentTeam.records.overallRecords[0].ot}</td>
                                        <td>{currentTeam.records.overallRecords[1].wins} - {currentTeam.records.overallRecords[1].losses} - {currentTeam.records.overallRecords[1].ot}</td>
                                        <td>{currentTeam.records.overallRecords[2].wins} - {currentTeam.records.overallRecords[2].losses}</td>
                                        <td>{currentTeam.records.overallRecords[3].wins} - {currentTeam.records.overallRecords[3].losses} - {currentTeam.records.overallRecords[3].ot}</td>
                                        <td>{currentTeam.streak.streakCode}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ))}
            </div>
        )
    }
}

export default Standings;