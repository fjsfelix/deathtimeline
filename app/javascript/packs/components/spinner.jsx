import React from 'react';

const Spinner = ({classes}) => {

  return (
    <div className={classes}>
      <i className="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
    </div>
  );
}

export default Spinner;