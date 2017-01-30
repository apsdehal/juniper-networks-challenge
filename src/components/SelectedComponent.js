import React from 'react';

const SelectedComponent = (props) => {
  return (
    <div className="row">
      <div className="col-sm-9">
        <input className="form-control" value={props.value}
        onChange={(e) => {
          props.change(e);
        }}/>
      </div>
      <div className="col-sm-2 col-sm-offset-1">
        <button title="Remove this selected field" className="col-xs-12 btn btn-danger" onClick={props.remove}>
          <i className="glyphicon glyphicon-remove"></i>
        </button>
      </div>
    </div>
  )
}

export default SelectedComponent;
