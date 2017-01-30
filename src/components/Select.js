import React, { Component } from 'react';
import SelectedComponent from './SelectedComponent';

class Select extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12">{this.props.title}</div>
        {
          this.props.selected &&
          this.props.selected.map((x) =>
            <SelectedComponent value={x}/>
          )
        }
      </div>
    )
  }
}

export default Select;
