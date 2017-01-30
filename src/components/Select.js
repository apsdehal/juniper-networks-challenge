import React, { Component } from 'react';
import SelectedComponent from './SelectedComponent';

class Select extends Component {
  render() {
    return (
      <div className="form-group">
        <label className="control-label">{this.props.title}</label>
        {
          this.props.selected &&
          this.props.selected.map((x) =>
            <SelectedComponent value={x}/>
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
}

export default Select;
