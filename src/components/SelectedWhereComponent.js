import React from 'react';

function SelectedWhereComponent(props) {
  return (
    <div className="row">
      <div className="col-sm-8">props.value</div>
      <div className="col-sm-3 col-sm-offset-1">
        <button className="btn btn-danger">
          <i className="glyphicon glyphicon-remove"></i>
        </button>
      </div>
    </div>
  )
}

export default SelectedWhereComponent;
