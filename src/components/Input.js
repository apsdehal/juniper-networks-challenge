import React from 'react';

const Input = (props) => {
  let input;
  return (
    <div className="form-group">
      <label className="control-label">{props.title}</label>
      <p>{props.description}</p>
      <input
        className="form-control"
        placeholder={props.description}
        type={props.type}
        onChange={e => {
          props.dispatch({type: props.title}, input.value)
        }}
        ref={node => { input = node; }}/>
    </div>
  );
}

export default Input;
