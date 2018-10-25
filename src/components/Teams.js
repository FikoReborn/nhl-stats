import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Teams extends Component {
    render() {
        const teams = this.props.teams;
        return (
            <div className="teams">
            {teams.map(team => (
                <Link to={`teams/${team.id}`} key={team.id}>
                    <img src={require(`../img/${team.abbreviation}.svg`)} alt={team.name} className="team-logo" />
                </Link>
            ))}
            </div>
        )
    }
}

export default Teams;