import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Teams extends Component {
    render() {
        const teams = this.props.teams;
        return (
            <div className="teams">
            {teams.map(team => (
                <li key={team.id}>
                    <Link to={`teams/${team.id}`}>
                        <img src={require(`../img/${team.abbreviation}.svg`)} alt={team.name} className="team-logo" />
                    </Link>
                </li>
            ))}
            </div>
        )
    }
}

export default Teams;