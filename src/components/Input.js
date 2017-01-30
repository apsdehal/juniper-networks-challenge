import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className="form-group">
        <label className="control-label">{this.props.title}</label>
        <p>{this.props.description}</p>
        <input className="form-control" placeholder={this.props.description} type={this.props.type}/>
      </div>
    );
  }
}

export default Input;
