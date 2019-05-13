import React, { Component } from 'react';
import StandingsTable from '../components/StandingsTable';
import '../App.css';

class Standings extends Component {
    render() {
        return (
            <div className="standings">
                    <div className="standings-inner">
                        <h2 className="conf-heading">Eastern Conference</h2>
                        <StandingsTable
                            standings={this.props.metro}
                            division="Metropolitan"
                            windowWidth={this.props.windowWidth}
                        />
                        <StandingsTable
                            standings={this.props.atlantic}
                            division="Atlantic"
                            windowWidth={this.props.windowWidth}
                        />

                        <StandingsTable
                            standings={this.props.easternWildCard}
                            division="Wild Card"
                            windowWidth={this.props.windowWidth}
                        />

                        <h2 className="conf-heading">Western Conference</h2>
                        <StandingsTable
                            standings={this.props.central}
                            division="Central"
                            windowWidth={this.props.windowWidth}
                        />
                        <StandingsTable
                            standings={this.props.pacific}
                            division="Pacific"
                            windowWidth={this.props.windowWidth}
                        />

                        <StandingsTable
                            standings={this.props.westernWildCard}
                            division="Wild Card"
                            windowWidth={this.props.windowWidth}
                        />
                    </div>
            
            </div>
        
    
        )}}

export default Standings;