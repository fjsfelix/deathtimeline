import React from 'react';
import EpisodeListItem from './episodeListItem';

const EpisodeList = (props) => {
  var episodeListItem = props.episodes.map((episode) => {
    return (
      <EpisodeListItem
        episode={episode}
        key={episode.id}/>
    );
  });

  return (
    <ul>
      {episodeListItem}
    </ul>
  );
}

export default EpisodeList;