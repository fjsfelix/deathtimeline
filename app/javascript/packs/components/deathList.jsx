import React from 'react';
import DeathListItem from './deathListItem';

const DeathList = (props) => {
  var deathListItems = props.deaths.map((death, index) => {
    var even = "";
    if (index%2 !== 0) {
      even = "reverse"
    }
    return (
      <DeathListItem
        death={death}
        key={death.id}
        even={even}/>
    );
  });

  return (
    <ul className="episode-deaths">
      {deathListItems}
    </ul>
  );
}

export default DeathList;