import React from 'react';
import SelectedWhereComponent from './SelectedWhereComponent';

const WhereClause = (props) => {
  let inputName, inputOperator, inputValue, inputAndOr;

  const handleAddClick = (e) => {
    e.preventDefault();

    let selectedWhere = props.selectedWhere.slice();

    if (inputAndOr.value === 'AND' && selectedWhere.length !== 0) {
      selectedWhere[selectedWhere.length - 1].push({
        'name': inputName.value,
        'value': inputValue.value,
        'operator': inputOperator.value
      });
    } else {
      selectedWhere.push([{
        'name': inputName.value,
        'value': inputValue.value,
        'operator': inputOperator.value
      }]);
    }

    props.dispatch(
       {type: props.title},
       selectedWhere
    );
    inputName.value = "";
    inputValue.value = "";
  }

  const handleRemoveClick = (e, i, j) => {
    e.preventDefault();
    let selectedWhere = props.selectedWhere.slice();
    selectedWhere[i].splice(j, 1);

    if (selectedWhere[i].length === 0) {
      selectedWhere.splice(i, 1);
      if (!selectedWhere) {
        selectedWhere = [];
      }
    }

    props.dispatch(
      {type: props.title},
      selectedWhere
    );
  }

  const handleChange = (e, i, j, val) => {
    e.preventDefault();
    let selectedWhere = props.selectedWhere.slice();
    selectedWhere[i][j] = val;

    props.dispatch(
      {type: props.title},
      selectedWhere
    );
  }

  return (
    <div className="form-group">
      <label className="control-label">{props.title}</label>
      {
        props.selectedWhere &&
        props.selectedWhere.map((x, i) =>
          <SelectedWhereComponent key={i} value={x}
          remove={(e, j) => {
            handleRemoveClick(e, i, j);
          }}

          change={(e, j, val) => {
            handleChange(e, i, j, val);
          }}/>
        )
      }
      <div className="row">
        <div className="col-xs-2">
          <select className="form-control"
            ref={(node) => {inputAndOr = node}}>
            <option>AND</option>
            <option>OR</option>
          </select>
        </div>

        <div className="col-xs-4">
          <input
            className="form-control"
            placeholder="Type your field here"
            ref={(node) => {inputName = node}}/>
        </div>
        <div className="col-xs-2">
          <select className="form-control"
            ref={(node) => {inputOperator = node}}>
            <option>=</option>
            <option>!=</option>
          </select>
        </div>
        <div className="col-xs-4">
          <input
            className="form-control"
            placeholder="Type your value here"
            ref={(node) => {inputValue = node}}/>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-2 col-xs-offset-10">
          <button className="col-xs-12 btn btn-success" onClick={handleAddClick}>
            <i className="glyphicon glyphicon-plus"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default WhereClause;
