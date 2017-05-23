import React from 'react';
import DeathList from './deathList';
import SeasonTitle from './seasonTitle';

const EpisodeListItem = (props) => {
  if (props.episode.episodeNumber == 1) {
    var seasonTitle = (
      <SeasonTitle
        season={props.episode.season_id} />
    );
  }

  return (
    <li>
      {seasonTitle}
      <div className="episode-container">
        <div className="line"></div>
        <h3 className="episode-title">
          <span className='episode-title-num desktop-sm'>Season {props.episode.season_id}</span>
          <div className="name-container">
            <h3 className='episode-title-name'>{props.episode.name}</h3>
          </div>
          <span className='episode-title-num'>Episode {props.episode.episodeNumber}</span>
        </h3>
        <div className="line"></div>
        <DeathList deaths={props.episode.deaths}/>
        {/*<div className="line"></div>*/}
        {/*<div className="line"></div>*/}
      </div>
    </li>
  );
}

export default EpisodeListItem;