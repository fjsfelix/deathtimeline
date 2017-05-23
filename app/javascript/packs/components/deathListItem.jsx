import React from 'react';

const DeathListItem = ({death, even}) => {
  return (
    <li>
      <div className={"death-container " + even} >
        <div className={"bubble " + (death.house !== null ? death.house + "-bg-solid" : "")}>{death.time}</div>
        { death.house !== null &&
          <div className={"desktop-sm house-container " + (death.house !== null ? death.house + "-bg-solid" : "")}>
            <img src={death.house + ".jpg"} className="house-img"/>
          </div>
        }
        <div className={"death-inner " + (death.house !== null ? death.house + "-bg " : "inner-full-length ") + even}>
          <div className={"death-left " + (death.house !== null ? "" : "left-full-length")} >
            <div className={"importance-" + death.importance + " importance"}>
              <img src={death.id + ".jpg"}  className="death-img"/>
              <span className={"death-number " + "importance-" + death.importance}>{death.id}</span>
            </div>
          </div>
          <div className={"death-right " + (death.house !== null ? "" : "full-length")}>
            <a className="death-link tag" href={death.link} target="_blank" >More info</a>
            <h3>{death.name}</h3>
            <h4>{death.killedBy}</h4>
          </div>
        </div>
        { death.house !== null &&
          <div className={"mobile-sm house-container " + (death.house !== null ? death.house + "-bg-solid" : "")}>
            <img src={death.house + ".jpg"} className="house-img"/>
          </div>
        }
      </div>
    </li>
  );
}

export default DeathListItem;