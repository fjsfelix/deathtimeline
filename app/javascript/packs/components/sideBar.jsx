import React from 'react';
import SeasonLink from './seasonLink';

class SideBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      toggleInnerClass: "toggle-inner",
      toggleOuterClass: "toggle-outer",
      toggle: false
    }
  }

  toggleCompact() {
    if (this.state.toggle) {
      this.setState({
        toggleInnerClass: "toggle-inner",
        toggleOuterClass: "toggle-outer",
        toggle: false
      });
      this.props.onCompactToggle(false);
    } else {
      this.setState({
        toggleInnerClass: "toggle-inner toggle-right",
        toggleOuterClass: "toggle-outer toggle-on",
        toggle: true
      });
      this.props.onCompactToggle(true);
    }

  }

  render() {
    return (
      <div id="side-bar-fixed">
        <div id="side-bar-top">
          <div className="logo-container">
            <div className="logo">DT</div>
            <div className="title-container">
              <h2>Game of Thrones</h2>
              <h1>DEATH TIMELINE</h1>
            </div>
          </div>
        </div>
        <div id="side-bar-side" className="desktop-sm">
          <div className="logo-container">
            <div className="logo">DT</div>
            <div className="title-container">
              <h2>Game of Thrones</h2>
              <h1>DEATH TIMELINE</h1>
            </div>
          </div>
          <div className="side-bar-divider"></div>
          <ul>
            <SeasonLink season={1} onSeasonClick={this.props.onSeasonClick}/>
            <SeasonLink season={2} onSeasonClick={this.props.onSeasonClick}/>
            <SeasonLink season={3} onSeasonClick={this.props.onSeasonClick}/>
            <SeasonLink season={4} onSeasonClick={this.props.onSeasonClick}/>
            <SeasonLink season={5} onSeasonClick={this.props.onSeasonClick}/>
            <SeasonLink season={6} onSeasonClick={this.props.onSeasonClick}/>
            <div className="toggle-container" onClick={this.toggleCompact.bind(this)}>
              <span>COMPACT</span>
              <div className={this.state.toggleOuterClass}>
                <span className="toggle-text toggle-text-on">ON</span>
                <span className="toggle-text toggle-text-off">OFF</span>
                <div className={this.state.toggleInnerClass}></div>
              </div>
            </div>
          </ul>
        </div>
      </div>
    );
  }
}

export default SideBar;