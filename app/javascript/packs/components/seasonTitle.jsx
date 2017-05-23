import React from 'react';

class SeasonTitle extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <h2 id={"season-" + this.props.season}>{this.props.season}</h2>
    );
  }
}

export default SeasonTitle;