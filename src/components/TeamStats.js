import React, { Component } from 'react';
import '../App.js';

class TeamStats extends Component {
    render() {
        const team = this.props.teams[this.props.id - 1];
        return (
            <div>
                {team ? (
                    <p>{team.name}</p>
                ) : (<p>Loading...</p>)}
            </div>
        )
    }
}

export default TeamStats;