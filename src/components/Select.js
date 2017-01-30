import React from 'react';
import SelectedComponent from './SelectedComponent';

const Select = (props) => {
  let input;

  const handleAddClick = (e) => {
    e.preventDefault();
    let selected = props.selected.slice();
    selected.push(input.value);

    props.dispatch(
       {type: props.title},
       selected
    );
    input.value = "";
  }

  const handleRemoveClick = (e, i) => {
    e.preventDefault();
    let selected = props.selected.slice();
    selected.splice(i, 1);

    props.dispatch(
      {type: props.title},
      selected
    );
  }

  const handleChange = (e, i) => {
    e.preventDefault();
    let selected = props.selected.slice();
    selected[i] = e.target.value;

    props.dispatch(
      {type: props.title},
      selected
    );
  }

  return (
    <div className="form-group">
      <label className="control-label">{props.title}</label>
      {
        props.selected &&
        props.selected.map((x, i) =>
          <SelectedComponent key={i} value={x}
          remove={(e) => {
            handleRemoveClick(e, i);
          }}

          change={(e) => {
            handleChange(e, i);
          }}/>
        )
      }
      <div className="row">
        <div className="col-xs-12">
          <input
            className="form-control"
            placeholder="Type your select field here"
            ref={(node) => {input = node}}/>
        </div>
        <div className="col-xs-2 col-xs-offset-10">
          <button className="col-xs-12 btn btn-success" onClick={handleAddClick}>
            <i className="glyphicon glyphicon-plus"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Select;
