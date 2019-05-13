import React, { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import { Link } from 'react-router-dom';
import '../App.css';

class Teams extends Component {
    state = {
        open: false
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
        return (
            <div className="teams">
                <div className="menu-container">
                    <span className="nav-title-link"><Link to="/">Standings</Link></span>   
                    <div className="menu-icon">
                        <HamburgerMenu 
                            isOpen={this.state.open}
                            menuClicked={this.handleMenu.bind(this)}
                        />
                    </div>
                </div>
                <ul className="team-list">
                    {teams.map(team => (
                        <li key={team.name}>
                            <Link to={`/teams/${team.id}`}>
                                <img src={require(`../img/${team.abbreviation}.svg`)} alt={team.name} className="team-logo" /> {(width <= 768) ? (team.abbreviation) : (team.name)}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        )
    }
}

export default Teams;