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

                    <div>
                        <div className="info">
                            <h3>{player.fullName}</h3>
                            <ul>
                                <li>{player.birthCity}, {player.birthStateProvince}, {player.birthCountry}</li>
                                <li>Birthdate: {player.birthDate}</li>
                                <li>{player.height}</li>
                                <li>{player.weight} lbs</li>
                            </ul>
                        </div>
                        <div className="player-stats">
test
                        </div>
                    </div>


            </div>
        )
    }
}

export default PlayerStats;