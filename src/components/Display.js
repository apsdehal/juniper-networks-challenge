import React from 'react';

function Display(props) {
  return (
    <div className="container-fluid">
      <div className="form-group">
        <label className="control-label">Generated Query</label>
        <textarea className="form-control" value={props.query}></textarea>
      </div>
    </div>
  )
}

export default Display;
