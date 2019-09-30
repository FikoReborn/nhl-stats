import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Select from 'react-select';
import '../App.css';

class Teams extends Component {
    render() {
        const dropdownOptions = this.props.dropdownOptions;
        return (
            <div className="teams">
                <div className="team-selector">
                    <Select
                        placeholder="Select a team.."
                        onChange={this.props.handleTeam}
                        options={dropdownOptions}
                    />
                </div>
                <div className="menu-container">
                    <span className="nav-title-link"><Link to="/">Standings</Link></span>   
                </div>
            </div>
        )
    }
}

export default Teams;