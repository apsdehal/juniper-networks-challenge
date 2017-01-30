import React from 'react';
import SelectedWhereComponent from './SelectedWhereComponent'

function WhereClause(props) {
  return (
    <div className="row">
      <div className="col-sm-12">{props.title}</div>
      {
        props.selectedWhere &&
        props.selectedWhere.map((x) =>
          <SelectedWhereComponent value={x}/>
        )
      }
    </div>
  )
}

export default WhereClause;
