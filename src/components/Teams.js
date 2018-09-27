import React, { Component } from 'react'
import '../App.css'

class Teams extends Component {
    render() {
        const teams = this.props.teams;
        return (
            <div className="teams">
            {teams.map(team => (
                <img src={require(`../img/${team.abbreviation}.svg`)} alt={team.name} className="team-logo" key={team.id} />
            ))}
            </div>
        )
    }
}

export default Teams;