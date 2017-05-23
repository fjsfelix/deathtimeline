import React from 'react';
import ReactDOM from 'react-dom';
import EpisodeList from './components/episodeList';
import SideBar from './components/sideBar';
import Spinner from './components/spinner';
import $ from 'jquery';
import _ from 'lodash';
import Warning from "./components/warning";


class Main extends React.Component {
  constructor(props) {
    super(props);
    // this.onChange = this.onChange.bind(this);
    this.state = {
      loadedSeason: 0,
      episodes: [],
      spinnerClasses: "spinner-container spinner-hidden",
      listClass: ""
    }
  }

  getSeason(season, scroll) {
    this.setState({spinnerClasses: "spinner-container"});
    var deathURL = 'api/deaths?season=' + season;
    var episodeURL = 'api/seasons/' + season + '/episodes';

    $.when($.get(deathURL), $.get(episodeURL)).done((deathResponse, episodeResponse) => {
      this.handleDeaths(deathResponse, episodeResponse, season, scroll);
    });
  }

  handleDeaths (deathResponse, episodeResponse, season, scroll) {
    var tempStructure = episodeResponse[0].map((episode) => {
      episode.deaths = _.filter(deathResponse[0], {'episode_id': episode.id});
      return episode;
    });

    var episodes = this.state.episodes;
    episodes = episodes.concat(tempStructure);


    this.setState({
      loadedSeason: season,
      episodes: episodes,
      spinnerClasses: "spinner-container spinner-hidden"
    });

    if (scroll == this.state.loadedSeason)
      this.scrollTo(scroll);
  }

  scrollTo(season) {
    var location = "#season-" + season;
    $('html, body').animate({
      scrollTop: $(location).offset().top
    }, 2000)
  }

  onCompactToggle(toggle) {
    if(toggle) {
      this.setState({listClass: "compact-view"})
    } else {
      this.setState({listClass: ""})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll.bind(this));
    this.getSeason(1);
  }


  handleScroll() {
    if (this.state.loadedSeason < 6) {
      if ($(window).scrollTop() + $(window).height() >= Math.floor($('#main-list').innerHeight())) {
        this.getSeason(this.state.loadedSeason + 1);
      }
    }
  }

  onSeasonClick(season) {
    var currentSeason = this.state.loadedSeason;
    if (season > currentSeason){
      for (var i = currentSeason + 1; i < season + 1; i ++) {
        this.getSeason(i, season);
      }
    } else {
      this.scrollTo(season);
    }
  }


  render() {
    return (
      <div className="main-container">
        <div id="side-bar">
          <SideBar
            onSeasonClick={(season) => { this.onSeasonClick(season)}}
            onCompactToggle={(toggle) => { this.onCompactToggle(toggle)}}/>
        </div>
        <div id="main-list" className={this.state.listClass}>
          <Warning/>
          <Spinner classes={this.state.spinnerClasses}/>
          <EpisodeList episodes={this.state.episodes}/>
        </div>
      </div>
    );
  }
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Main />,
    document.body.appendChild(document.createElement('div')),
  )
})