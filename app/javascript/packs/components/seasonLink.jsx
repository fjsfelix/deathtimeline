import React from 'react';

const SeasonLink = ({season, onSeasonClick}) => {
  return (
    <li className="season-link"
      onClick={() => onSeasonClick(season)}>
      <span className="desktop">SEASON {season}</span>
      <span className="mobile">S{season}</span>
    </li>
  );
}

export default SeasonLink;