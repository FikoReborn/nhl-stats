import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { Link, withRouter } from 'react-router-dom';
import Select from 'react-select';
import '../App.css';

class Teams extends Component {
    state = {
        open: false,
    }

    handleChange = selectedTeam => {
        this.setState({ selectedTeam});
        this.props.history.push('/teams/' + selectedTeam.value);
    }

    handleMenu = () => {
        this.setState({open: !this.state.open})
        const nav = document.getElementsByTagName('nav')[0];
        const icon = document.getElementsByClassName('team-list')[0];
        const sButton = document.getElementsByClassName('nav-title-link')[0];
        sButton.classList.toggle('show');
        icon.classList.toggle('show');
        nav.classList.toggle('extend');
    };

    render() {
        const teams = this.props.teams;
        const width = this.props.windowWidth;
        const dropdownOptions = this.props.dropdownOptions;
        return (
            <div className="teams">
                <div className="team-selector"><h4 className="selector-title">Team: </h4>
                    <Select
                        placeholder="Select a team.."
                        onChange={this.handleChange}
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

export default withRouter(Teams);