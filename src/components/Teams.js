import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';

class Teams extends Component {
    render() {
        const teams = this.props.teams;
        return (
            <div className="teams">
            <li className="nav-title-link"><Link to="/">Standings</Link></li>
            {teams.map(team => (
                <li key={team.name}>
                    <Link to={`/teams/${team.id}`}>
                        <img src={require(`../img/${team.abbreviation}.svg`)} alt={team.name} className="team-logo" /> {team.name}
                    </Link>
                </li>
            ))}
            </div>
        )
    }
}

export default Teams;