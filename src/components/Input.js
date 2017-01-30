import React, { Component } from 'react';

class Input extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">{this.props.title} {this.props.description}</div>
        <input placeholder={this.props.description} type={this.props.type}/>
      </div>
    );
  }
}

export default Input;
