import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import WhereClause from './WhereClause';

class Form extends Component {
  handleOnChange(action, value) {
    this.props.handleOnChange(action, value);
  }

  render() {
    return (
      <div className="form-group">
        <Input type="text" title="table_name" handleOnChange={this.handleOnChange} description="Table name used for query"/>
        <Input type="number" title="start_time" handleOnChange={this.handleOnChange} description="Start time in UNIX Epoch format"/>
        <Input type="number" title="end_time" handleOnChange={this.handleOnChange} description="End time in UNIX Epoch format"/>
        <Select title="select_fields" handleOnChange={this.handleOnChange}/>
        <WhereClause title="where_fields" handleOnChange={this.handleOnChange}/>
      </div>
    );
  }
}

export default Form;
