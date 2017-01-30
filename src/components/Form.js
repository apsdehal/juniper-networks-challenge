import React, { Component } from 'react';
import Input from './Input';
import Select from './Select';
import WhereClause from './WhereClause';

class Form extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Input type="text" title="table_name" description="Table name used for query"/>
        <Input type="number" title="end_time" description="End time in UNIX Epoch format"/>
        <Input type="number" title="end_time" description="End time in UNIX Epoch format"/>
        <Select title="select_fields"/>
        <WhereClause title="where_fields"/>
      </div>
    );
  }
}

export default Form;
