import React, { Component } from 'react';
import '../App.js';

class PlayerStats extends Component {
    state = {
        playerInfo: [],
        playerStats: [],
        error: false
      };
    
    componentDidMount = () => {
    this.pullPlayerInfo();
    this.pullPlayerStats();
    };

    pullPlayerInfo = () => {
        fetch(
            'https://statsapi.web.nhl.com/api/v1/people/' + this.props.id
        )
        .then(response => response.json())
        .then(data => {
        this.setState({playerInfo:data.people[0]});
        })
        .catch(err => console.log(err));
    };

    pullPlayerStats = () => {
        fetch(
            'https://statsapi.web.nhl.com/api/v1/people/' + this.props.id + '/stats?stats=statsSingleSeason'
        )
        .then(response => response.json())
        .then(data => {
            this.setState({playerStats:data.stats[0].splits[0].stat})
        })
    }

    render() {
        const player = [];
        return (
            <div>
                {player ? (
                    <div>test</div>

                ) : (<p>Loading...</p>)}
            </div>
        )
    }
}

export default PlayerStats;