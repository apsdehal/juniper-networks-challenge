import React from 'react';
import SelectedWhereComponent from './SelectedWhereComponent'

function WhereClause(props) {
  return (
    <div className="form-group">
      <label className="control-label">{props.title}</label>
      {
        props.selectedWhere &&
        props.selectedWhere.map((x) =>
          <SelectedWhereComponent value={x}/>
        )
      }
      <div className="row">
        <div className="col-xs-2 col-xs-offset-10">
          <button className="col-xs-12 btn btn-success">
            <i className="glyphicon glyphicon-plus"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default WhereClause;
