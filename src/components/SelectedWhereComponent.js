import React from 'react';

const SelectedWhereComponent = (props) => {
  let inputName, inputOperator, inputValue;

  const handleChange = (e, j) => {
    let val = {
      name: inputName.value,
      operator: inputOperator.operator,
      value: inputValue.value
    }

    props.change(e, j, val);
  }

  return (
    <div>
      {
        props.value && props.value.map((x, i) =>

          <div className="row margin-item" key={i}>
            <div className="col-xs-8 col-md-4">
              <input
                className="form-control"
                placeholder="Type your field here"
                ref={(node) => {inputName = node}}
                value={x.name}
                onChange={ (e) => handleChange(e, i)}/>
            </div>
            <div className="col-xs-4 col-md-2">
              <select className="form-control"
                value={x.operator}
                ref={(node) => {inputOperator = node}}
                onChange={ (e) => handleChange(e, i)}>
                <option>=</option>
                <option>!=</option>
              </select>
            </div>
            <div className="col-xs-8 col-md-4">
              <input
                value={x.value}
                className="form-control"
                placeholder="Type your value here"
                ref={(node) => {inputValue = node}}
                onChange={ (e) => handleChange(e, i)}/>
            </div>
            <div className="col-xs-4 col-md-2">
              <button title="Remove this where clause" className="col-xs-12 btn btn-danger"
              onClick={(e) => {props.remove(e, props.key, i)}}>
                <i className="glyphicon glyphicon-remove"></i>
              </button>
            </div>
          </div>
        )
    }
    </div>
  )
}

export default SelectedWhereComponent;
