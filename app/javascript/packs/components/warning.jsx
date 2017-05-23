import React from 'react';

class Warning extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="waring">
        <h2>Warning</h2>
        <h3>This contains Game of Thrones spoilers <br/> Seasons: 1 - 6</h3>
        <div className="type-list">
          <div className="minor importance-1">Minor</div>
          <div className="recurring importance-2" >Recurring</div>
          <div className="major importance-3" >Major</div>
        </div>
        <a href="mailto:projectsbyfelix@gmail.com">Contact: projectsbyfelix@gmail.com</a>
      </div>
    );
  }
}

export default Warning;