(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,,function(e,t,a){},,,,,,,,,function(e,t,a){var n={"./ANA.svg":46,"./ARI.svg":47,"./BOS.svg":48,"./BUF.svg":49,"./CAR.svg":50,"./CBJ.svg":51,"./CGY.svg":52,"./CHI.svg":53,"./COL.svg":54,"./DAL.svg":55,"./DET.svg":56,"./EDM.svg":57,"./FLA.svg":58,"./LAK.svg":59,"./MIN.svg":60,"./MTL.svg":61,"./NJD.svg":62,"./NSH.svg":63,"./NYI.svg":64,"./NYR.svg":65,"./OTT.svg":66,"./PHI.svg":67,"./PIT.svg":68,"./SJS.svg":69,"./STL.svg":70,"./TBL.svg":71,"./TOR.svg":72,"./VAN.svg":73,"./VGK.svg":74,"./WPG.svg":75,"./WSH.svg":76};function l(e){var t=r(e);return a(t)}function r(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}l.keys=function(){return Object.keys(n)},l.resolve=r,e.exports=l,l.id=24},,,,,,function(e,t,a){e.exports=a(77)},,,,,function(e,t,a){},,,,,,,,,,,function(e,t,a){e.exports=a.p+"static/media/ANA.9bc562de.svg"},function(e,t,a){e.exports=a.p+"static/media/ARI.8f690ed8.svg"},function(e,t,a){e.exports=a.p+"static/media/BOS.68807e3d.svg"},function(e,t,a){e.exports=a.p+"static/media/BUF.34bd4af7.svg"},function(e,t,a){e.exports=a.p+"static/media/CAR.ca9445d2.svg"},function(e,t,a){e.exports=a.p+"static/media/CBJ.616a5939.svg"},function(e,t,a){e.exports=a.p+"static/media/CGY.c86950f5.svg"},function(e,t,a){e.exports=a.p+"static/media/CHI.957756b0.svg"},function(e,t,a){e.exports=a.p+"static/media/COL.494be10f.svg"},function(e,t,a){e.exports=a.p+"static/media/DAL.cfdb9c45.svg"},function(e,t,a){e.exports=a.p+"static/media/DET.efabe2d1.svg"},function(e,t,a){e.exports=a.p+"static/media/EDM.a06389fd.svg"},function(e,t,a){e.exports=a.p+"static/media/FLA.2cf605d9.svg"},function(e,t,a){e.exports=a.p+"static/media/LAK.52edb823.svg"},function(e,t,a){e.exports=a.p+"static/media/MIN.592cb8ab.svg"},function(e,t,a){e.exports=a.p+"static/media/MTL.86f58a6a.svg"},function(e,t,a){e.exports=a.p+"static/media/NJD.9a2e7716.svg"},function(e,t,a){e.exports=a.p+"static/media/NSH.3aa53cb3.svg"},function(e,t,a){e.exports=a.p+"static/media/NYI.f384bd2c.svg"},function(e,t,a){e.exports=a.p+"static/media/NYR.784721fc.svg"},function(e,t,a){e.exports=a.p+"static/media/OTT.c8eee809.svg"},function(e,t,a){e.exports=a.p+"static/media/PHI.3c22873a.svg"},function(e,t,a){e.exports=a.p+"static/media/PIT.1efe47ec.svg"},function(e,t,a){e.exports=a.p+"static/media/SJS.1265334c.svg"},function(e,t,a){e.exports=a.p+"static/media/STL.14ac936f.svg"},function(e,t,a){e.exports=a.p+"static/media/TBL.7f35b009.svg"},function(e,t,a){e.exports=a.p+"static/media/TOR.20b99b88.svg"},function(e,t,a){e.exports=a.p+"static/media/VAN.be932ad3.svg"},function(e,t,a){e.exports=a.p+"static/media/VGK.d5d2a6d1.svg"},function(e,t,a){e.exports=a.p+"static/media/WPG.eae9751f.svg"},function(e,t,a){e.exports=a.p+"static/media/WSH.95b22f49.svg"},function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(13),s=a.n(r),c=(a(35),a(2)),i=a(3),o=a(5),m=a(4),d=a(6),u=a(14),p=a(29),E=(a(15),function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.dropdownOptions;return l.a.createElement("div",{className:"teams"},l.a.createElement("div",{className:"team-selector"},l.a.createElement(p.a,{placeholder:"Select a team..",onChange:this.props.handleTeam,options:e})),l.a.createElement("div",{className:"menu-container"},l.a.createElement("span",{className:"nav-title-link"},l.a.createElement(u.b,{to:"/"},"Standings"))))}}]),t}(n.Component)),h=a(28),f=a.n(h),v=a(12),g=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.playerInfo,t=this.props.playerStats;return l.a.createElement("div",{className:"player-info",key:e.id},e.id&&l.a.createElement("div",{className:"player-inner"},l.a.createElement("div",{className:"info"},l.a.createElement("h3",null,e.fullName),l.a.createElement("ul",null,l.a.createElement("li",null,e.birthCity,", ",e.birthStateProvince,", ",e.birthCountry),l.a.createElement("li",null,"Born: ",e.birthDate),l.a.createElement("li",null,e.height),l.a.createElement("li",null,e.weight," lbs"))),"G"===e.primaryPosition.code?l.a.createElement("div",{className:"player-stats"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Games Played"),l.a.createElement("td",null,t.games)),l.a.createElement("tr",null,l.a.createElement("td",null,"Games Started"),l.a.createElement("td",null,t.gamesStarted)),l.a.createElement("tr",null,l.a.createElement("td",null,"Wins"),l.a.createElement("td",null,t.wins)),l.a.createElement("tr",null,l.a.createElement("td",null,"Losses"),l.a.createElement("td",null,t.losses)),l.a.createElement("tr",null,l.a.createElement("td",null,"Overtime Losses:"),l.a.createElement("td",null,t.ot)),l.a.createElement("tr",null,l.a.createElement("td",null,"Shots Against"),l.a.createElement("td",null,t.shotsAgainst)),l.a.createElement("tr",null,l.a.createElement("td",null,"Goals Against"),l.a.createElement("td",null,t.goalsAgainst)),l.a.createElement("tr",null,l.a.createElement("td",null,"GAA"),l.a.createElement("td",null,t.goalAgainstAverage)),l.a.createElement("tr",null,l.a.createElement("td",null,"Save %"),l.a.createElement("td",null,t.savePercentage)),l.a.createElement("tr",null,l.a.createElement("td",null,"Shutouts"),l.a.createElement("td",null,t.shutouts)),l.a.createElement("tr",null,l.a.createElement("td",null,"Minutes Played"),l.a.createElement("td",null,t.timeOnIce))))):l.a.createElement("div",{className:"player-stats"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Games Played"),l.a.createElement("td",null,t.games)),l.a.createElement("tr",null,l.a.createElement("td",null,"Goals"),l.a.createElement("td",null,t.goals)),l.a.createElement("tr",null,l.a.createElement("td",null,"Assists"),l.a.createElement("td",null,t.assists)),l.a.createElement("tr",null,l.a.createElement("td",null,"Points"),l.a.createElement("td",null,t.points)),l.a.createElement("tr",null,l.a.createElement("td",null,"+/-"),l.a.createElement("td",null,t.plusMinus)),l.a.createElement("tr",null,l.a.createElement("td",null,"PIM"),l.a.createElement("td",null,t.pim)),l.a.createElement("tr",null,l.a.createElement("td",null,"PowerPlay Goals"),l.a.createElement("td",null,t.powerPlayGoals)),l.a.createElement("tr",null,l.a.createElement("td",null,"PowerPlay Points"),l.a.createElement("td",null,t.powerPlayPoints)),l.a.createElement("tr",null,l.a.createElement("td",null,"Short-handed Goals"),l.a.createElement("td",null,t.shortHandedGoals)),l.a.createElement("tr",null,l.a.createElement("td",null,"Short-handed Points"),l.a.createElement("td",null,t.shortHandedPoints)),l.a.createElement("tr",null,l.a.createElement("td",null,"Game Winning Goals"),l.a.createElement("td",null,t.gameWinningGoals)),l.a.createElement("tr",null,l.a.createElement("td",null,"Overtime Goals"),l.a.createElement("td",null,t.overTimeGoals)),l.a.createElement("tr",null,l.a.createElement("td",null,"Shots"),l.a.createElement("td",null,t.shots)),l.a.createElement("tr",null,l.a.createElement("td",null,"Shot %"),l.a.createElement("td",null,t.shotPct)),l.a.createElement("tr",null,l.a.createElement("td",null,"Faceoff %"),l.a.createElement("td",null,t.faceOffPct)),l.a.createElement("tr",null,l.a.createElement("td",null,"Average TOI"),l.a.createElement("td",null,t.timeOnIcePerGame)),l.a.createElement("tr",null,l.a.createElement("td",null,"Even-strength TOI"),l.a.createElement("td",null,t.evenTimeOnIcePerGame)),l.a.createElement("tr",null,l.a.createElement("td",null,"Short-handed TOI"),l.a.createElement("td",null,t.shortHandedTimeOnIcePerGame)),l.a.createElement("tr",null,l.a.createElement("td",null,"PowerPlay TOI"),l.a.createElement("td",null,t.powerPlayTimeOnIcePerGame)))))))}}]),t}(n.Component),b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={error:!1},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props.team,t=this.props.team.teamStats[0].splits[0].stat;return l.a.createElement("div",{className:"player-info",key:e.name},l.a.createElement("div",{className:"player-inner"},l.a.createElement("div",{className:"info"},l.a.createElement("h3",null,e.name),l.a.createElement("ul",null,l.a.createElement("li",null,e.venue.name,", ",e.venue.city),l.a.createElement("li",null,e.conference.name," Conference"),l.a.createElement("li",null,e.division.name," Division"))),l.a.createElement("div",{className:"player-stats"},l.a.createElement("table",null,l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("td",null,"Power Play Percentage"),l.a.createElement("td",null,t.powerPlayPercentage)),l.a.createElement("tr",null,l.a.createElement("td",null,"Penalty Kill Percentage"),l.a.createElement("td",null,t.penaltyKillPercentage)),l.a.createElement("tr",null,l.a.createElement("td",null,"Faceoff Win Percentage"),l.a.createElement("td",null,t.faceOffWinPercentage)),l.a.createElement("tr",null,l.a.createElement("td",null,"Games Played"),l.a.createElement("td",null,t.gamesPlayed)),l.a.createElement("tr",null,l.a.createElement("td",null,"Wins"),l.a.createElement("td",null,t.wins)),l.a.createElement("tr",null,l.a.createElement("td",null,"Losses"),l.a.createElement("td",null,t.losses)),l.a.createElement("tr",null,l.a.createElement("td",null,"OT Losses"),l.a.createElement("td",null,t.losses)),l.a.createElement("tr",null,l.a.createElement("td",null,"Points"),l.a.createElement("td",null,t.pts)),l.a.createElement("tr",null,l.a.createElement("td",null,"Goals Against Per Game"),l.a.createElement("td",null,t.goalsAgainstPerGame)),l.a.createElement("tr",null,l.a.createElement("td",null,"Goals Per Game"),l.a.createElement("td",null,t.goalsPerGame)),l.a.createElement("tr",null,l.a.createElement("td",null,"Shots Per Game"),l.a.createElement("td",null,t.shotsPerGame)),l.a.createElement("tr",null,l.a.createElement("td",null,"Shooting Percentage"),l.a.createElement("td",null,t.shootingPctg)),l.a.createElement("tr",null,l.a.createElement("td",null,"Shots Allowed"),l.a.createElement("td",null,t.shotsAllowed)),l.a.createElement("tr",null,l.a.createElement("td",null,"Power Play Opportunities"),l.a.createElement("td",null,t.powerPlayOpportunities)),l.a.createElement("tr",null,l.a.createElement("td",null,"Save Percentage"),l.a.createElement("td",null,t.savePctg)))))))}}]),t}(n.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.roster;return l.a.createElement("div",{className:"team-roster"},l.a.createElement("div",{className:"stat-window"},l.a.createElement("div",{className:"vertical"},"Roster"),l.a.createElement("table",{className:"players-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{colSpan:"3"},"Team Roster"))),l.a.createElement("tbody",null,t.map(function(t){return l.a.createElement("tr",{key:t.person.id,className:t.person.id===e.props.selectedPlayer?"active":"player-row",onClick:function(){return e.props.handlePlayer(t.person.id)}},l.a.createElement("td",null,t.jerseyNumber),l.a.createElement("td",null,t.person.fullName),l.a.createElement("td",null,t.position.abbreviation))})))))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(l)))).state={selectedPlayer:null,change:!1},a.handlePlayer=function(e){a.setState({selectedPlayer:e}),a.props.pullPlayerInfo(e),a.props.pullPlayerStats(e),a.setState({change:!0}),a.props.history.push("/teams/"+a.props.id+"/player/"+e)},a}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props.teams[this.props.id],n=t.roster.roster;f()(n).by([{desc:function(e){return e.position.type}},{asc:function(e){return e.person.fullName.substring(e.person.fullName.indexOf(" ")+1)}}]);var r=0;n.forEach(function(e){"Goalie"===e.position.type&&r++});for(var s=0;s<r;s++)n.push(n.shift());return r=0,l.a.createElement("div",null,t?l.a.createElement("div",{className:"stats"},l.a.createElement("div",{className:"logo-container"},l.a.createElement("img",{src:a(24)("./".concat(t.abbreviation,".svg")),alt:t.name,className:"team-logo-stats"}),l.a.createElement("h1",null,t.name)),l.a.createElement(y,{roster:n,handlePlayer:this.handlePlayer,pullPlayerInfo:this.props.pullPlayerInfo,pullPlayerStats:this.props.pullPlayerStats,selectedPlayer:this.state.selectedPlayer,windowWidth:this.props.windowWidth}),l.a.createElement(v.a,{path:"/teams/:id/player/:pid",render:function(t){return l.a.createElement(g,{playerStats:e.props.playerStats,playerInfo:e.props.playerInfo})}}),l.a.createElement(v.a,{exact:!0,path:"/teams/:id",render:function(e){return l.a.createElement(b,{team:t})}})):l.a.createElement("p",null,"Loading..."))}}]),t}(n.Component),P=Object(v.e)(w),O=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("table",{className:"standings-table"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{className:"div-name"},this.props.division),l.a.createElement("th",null,"GP"),l.a.createElement("th",null,"W"),l.a.createElement("th",null,"L"),l.a.createElement("th",null,"OT"),l.a.createElement("th",null,"PTS"),l.a.createElement("th",{className:"hide"},"ROW"),l.a.createElement("th",{className:"hide"},"GF"),l.a.createElement("th",{className:"hide"},"GA"),l.a.createElement("th",{className:"hide"},"DIFF"),l.a.createElement("th",{className:"hide"},"Streak"))),l.a.createElement("tbody",null,this.props.standings.map(function(e){return l.a.createElement("tr",{key:e.team.id},l.a.createElement("td",null,e.team.name),l.a.createElement("td",null,e.gamesPlayed),l.a.createElement("td",null,e.leagueRecord.wins),l.a.createElement("td",null,e.leagueRecord.losses),l.a.createElement("td",null,e.leagueRecord.ot),l.a.createElement("td",null,e.points),l.a.createElement("td",{className:"hide"},e.row),l.a.createElement("td",{className:"hide"},e.goalsScored),l.a.createElement("td",{className:"hide"},e.goalsAgainst),l.a.createElement("td",{className:e.goalsScored-e.goalsAgainst>0?"diff-positive hide":"diff-negative hide"},e.goalsScored-e.goalsAgainst>0&&"+",e.goalsScored-e.goalsAgainst),l.a.createElement("td",{className:"hide"},e.streak.streakCode))})))}}]),t}(n.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(o.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"standings"},l.a.createElement("div",{className:"standings-inner"},l.a.createElement("h2",{className:"conf-heading"},"Eastern Conference"),l.a.createElement(O,{standings:this.props.metro,division:"Metropolitan",windowWidth:this.props.windowWidth}),l.a.createElement(O,{standings:this.props.atlantic,division:"Atlantic",windowWidth:this.props.windowWidth}),l.a.createElement(O,{standings:this.props.easternWildCard,division:"Wild Card",windowWidth:this.props.windowWidth}),l.a.createElement("h2",{className:"conf-heading"},"Western Conference"),l.a.createElement(O,{standings:this.props.central,division:"Central",windowWidth:this.props.windowWidth}),l.a.createElement(O,{standings:this.props.pacific,division:"Pacific",windowWidth:this.props.windowWidth}),l.a.createElement(O,{standings:this.props.westernWildCard,division:"Wild Card",windowWidth:this.props.windowWidth})))}}]),t}(n.Component),S=function(e){function t(){var e,n;Object(c.a)(this,t);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(n=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(s)))).state={dropdownOptions:[],playerStats:[],playerInfo:[],teams:[],metro:[],atlantic:[],central:[],pacific:[],easternWildCard:[],westernWildCard:[],error:!1,windowWidth:1e3},n.componentDidMount=function(){n.pullTeams(),n.pullStandings()},n.pullTeams=function(){fetch("https://statsapi.web.nhl.com/api/v1/teams?expand=team.roster&expand=team.schedule.next&expand=team.schedule.previous&expand=team.stats").then(function(e){return e.json()}).then(function(e){for(var t=e.teams,r=[],s=0;s<t.length;s++)t[s].id=s,r.push({value:t[s].id,label:l.a.createElement("div",null,l.a.createElement("img",{src:a(24)("./".concat(t[s].abbreviation,".svg")),className:"team-logo",alt:t[s].name})," ",t[s].name),image:{avatar:!0,src:"img/"+t[s].abbreviation+".svg"}});n.setState({teams:t}),n.setState({dropdownOptions:r})}).catch(function(e){return console.log(e)})},n.pullStandings=function(){fetch("https://statsapi.web.nhl.com/api/v1/standings?expand=standings.record").then(function(e){return e.json()}).then(function(e){var t=[],a=[],l=[],r=[],s=[],c=[];e.records.forEach(function(e){e.teamRecords.forEach(function(t){"Eastern"===e.conference.name&&t.wildCardRank>0&&s.push(t)}),e.teamRecords.forEach(function(t){"Western"===e.conference.name&&t.wildCardRank>0&&c.push(t)}),e.teamRecords.forEach(function(n){n.divisionRank<=3&&"M"===e.division.abbreviation?t.push(n):n.divisionRank<=3&&"A"===e.division.abbreviation?a.push(n):n.divisionRank<=3&&"C"===e.division.abbreviation?l.push(n):n.divisionRank<=3&&"P"===e.division.abbreviation&&r.push(n)})}),n.setState({easternWildCard:s,westernWildCard:c,metro:t,atlantic:a,central:l,pacific:r})}).catch(function(e){return console.log(e)})},n.pullPlayerInfo=function(e){n.forceUpdate(),fetch("https://statsapi.web.nhl.com/api/v1/people/"+e).then(function(e){return e.json()}).then(function(e){n.setState({playerInfo:e.people[0]})}).catch(function(e){return console.log(e)})},n.pullPlayerStats=function(e){fetch("https://statsapi.web.nhl.com/api/v1/people/"+e+"/stats?stats=statsSingleSeason").then(function(e){return e.json()}).then(function(e){e.stats[0].splits.length>=1&&n.setState({playerStats:e.stats[0].splits[0].stat})})},n.filterTeams=function(e){return n.state.teams.filter(function(t){return t.division.abbreviation===e})},n.handleTeam=function(e){n.setState({selectedTeam:e}),n.props.history.push("/teams/"+e.value)},n}return Object(d.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"App"},l.a.createElement("header",{className:"App-header"}),l.a.createElement("div",null,this.state.teams.length>0?l.a.createElement("div",{className:"nhl-container"},l.a.createElement("nav",null,l.a.createElement(E,{teams:this.state.teams,dropdownOptions:this.state.dropdownOptions,handleTeam:this.handleTeam})),l.a.createElement("main",null,l.a.createElement(v.a,{path:"/teams/:id",render:function(t){return l.a.createElement(P,{teams:e.state.teams,playerStats:e.state.playerStats,playerInfo:e.state.playerInfo,pullPlayerInfo:e.pullPlayerInfo,pullPlayerStats:e.pullPlayerStats,id:t.match.params.id})}}),l.a.createElement(v.a,{exact:!0,path:"/",render:function(){return l.a.createElement(N,{easternWildCard:e.state.easternWildCard,westernWildCard:e.state.westernWildCard,metro:e.state.metro,atlantic:e.state.atlantic,central:e.state.central,pacific:e.state.pacific})}}))):l.a.createElement("p",null,"Loading...")))}}]),t}(n.Component),j=Object(v.e)(S),W=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function C(e){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}}).catch(function(e){console.error("Error during service worker registration:",e)})}s.a.render(l.a.createElement(u.a,{basename:"/nhl-stats"},l.a.createElement(j,null)),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/nhl-stats",window.location).origin!==window.location.origin)return;window.addEventListener("load",function(){var e="".concat("/nhl-stats","/service-worker.js");W?(function(e){fetch(e).then(function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):C(e)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")})):C(e)})}}()}],[[30,1,2]]]);
//# sourceMappingURL=main.e17ec037.chunk.js.map