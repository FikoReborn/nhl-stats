import React, { Component } from 'react';
import '../App.js';

class PlayerStats extends Component {
    state = {
        error: false,
      };

    render() {
        const player = this.props.playerInfo;
        const playerStats = this.props.playerStats;
        return (
            <div className="player-info" key={player.id}>
                {player.id && (
                    <div className="player-inner">
                        <div className="info">
                            <h3>{player.fullName}</h3>
                            <ul>
                                <li>{player.birthCity}, {player.birthStateProvince}, {player.birthCountry}</li>
                                <li>Born: {player.birthDate}</li>
                                <li>{player.height}</li>
                                <li>{player.weight} lbs</li>
                            </ul>
                        </div>
                        {player.primaryPosition.code === 'G' ? (
                            <div className="player-stats">
                                <table>
                                    <tbody>
                                        <tr>
                                            <td>Games Played</td>
                                            <td>{playerStats.games}</td>
                                        </tr>
                                        <tr>
                                            <td>Games Started</td>
                                            <td>{playerStats.gamesStarted}</td>
                                        </tr>
                                        <tr>
                                            <td>Wins</td>
                                            <td>{playerStats.wins}</td>
                                        </tr>
                                        <tr>
                                            <td>Losses</td>
                                            <td>{playerStats.losses}</td>
                                        </tr>
                                        <tr>
                                            <td>Overtime Losses:</td>
                                            <td>{playerStats.ot}</td>
                                        </tr>
                                        <tr>
                                            <td>Shots Against</td>
                                            <td>{playerStats.shotsAgainst}</td>
                                        </tr>
                                        <tr>
                                            <td>Goals Against</td>
                                            <td>{playerStats.goalsAgainst}</td>
                                        </tr>
                                        <tr>
                                            <td>GAA</td>
                                            <td>{playerStats.goalAgainstAverage}</td>
                                        </tr>
                                        <tr>
                                            <td>Save %</td>
                                            <td>{playerStats.savePercentage}</td>
                                        </tr>
                                        <tr>
                                            <td>Shutouts</td>
                                            <td>{playerStats.shutouts}</td>
                                        </tr>
                                        <tr>
                                            <td>Minutes Played</td>
                                            <td>{playerStats.timeOnIce}</td>
                                        </tr>
                                    </tbody>
                                </table>
                        </div>
                        ) : (
                        <div className="player-stats">
                            <table>
                                <tbody>
                                    <tr>
                                        <td>Games Played</td>
                                        <td>{playerStats.games}</td>
                                    </tr>
                                    <tr>
                                        <td>Goals</td>
                                        <td>{playerStats.goals}</td>
                                    </tr>
                                    <tr>
                                        <td>Assists</td>
                                        <td>{playerStats.assists}</td>
                                    </tr>
                                    <tr>
                                        <td>Points</td>
                                        <td>{playerStats.points}</td>
                                    </tr>
                                    <tr>
                                        <td>+/-</td>
                                        <td>{playerStats.plusMinus}</td>
                                    </tr>
                                    <tr>
                                        <td>PIM</td>
                                        <td>{playerStats.pim}</td>
                                    </tr>
                                    <tr>
                                        <td>PowerPlay Goals</td>
                                        <td>{playerStats.powerPlayGoals}</td>
                                    </tr>
                                    <tr>
                                        <td>PowerPlay Points</td>
                                        <td>{playerStats.powerPlayPoints}</td>
                                    </tr>
                                    <tr>
                                        <td>Short-handed Goals</td>
                                        <td>{playerStats.shortHandedGoals}</td>
                                    </tr>
                                    <tr>
                                        <td>Short-handed Points</td>
                                        <td>{playerStats.shortHandedPoints}</td>
                                    </tr>
                                    <tr>
                                        <td>Game Winning Goals</td>
                                        <td>{playerStats.gameWinningGoals}</td>
                                    </tr>
                                    <tr>
                                        <td>Overtime Goals</td>
                                        <td>{playerStats.overTimeGoals}</td>
                                    </tr>
                                    <tr>
                                        <td>Shots</td>
                                        <td>{playerStats.shots}</td>
                                    </tr>
                                    <tr>
                                        <td>Shot %</td>
                                        <td>{playerStats.shotPct}</td>
                                    </tr>
                                    <tr>
                                        <td>Faceoff %</td>
                                        <td>{playerStats.faceOffPct}</td>
                                    </tr>
                                    <tr>
                                        <td>Average TOI</td>
                                        <td>{playerStats.timeOnIcePerGame}</td>
                                    </tr>
                                    <tr>
                                        <td>Even-strength TOI</td>
                                        <td>{playerStats.evenTimeOnIcePerGame}</td>
                                    </tr>
                                    <tr>
                                        <td>Short-handed TOI</td>
                                        <td>{playerStats.shortHandedTimeOnIcePerGame}</td>
                                    </tr>
                                    <tr>
                                        <td>PowerPlay TOI</td>
                                        <td>{playerStats.powerPlayTimeOnIcePerGame}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        )}
                    </div>
                )}

            </div>
        )
    }
}

export default PlayerStats;