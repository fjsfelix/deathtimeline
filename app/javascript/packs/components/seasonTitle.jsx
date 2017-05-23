import React from 'react';

class SeasonTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h2 className="season-title" id={"season-" + this.props.season}>Season {this.props.season}</h2>
    );
  }
}

export default SeasonTitle;