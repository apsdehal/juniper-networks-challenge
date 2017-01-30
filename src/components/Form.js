import React from 'react';
import Input from './Input';
import Select from './Select';
import WhereClause from './WhereClause';

const Form = (props) =>  {
    return (
      <div className="form-group">
        <Input type="text" title="table_name" dispatch={props.dispatch} description="Table name used for query"/>
        <Input type="number" title="start_time" dispatch={props.dispatch} description="Start time in UNIX Epoch format"/>
        <Input type="number" title="end_time" dispatch={props.dispatch} description="End time in UNIX Epoch format"/>
        <Select title="select_fields" selected={props.vars.form.select_fields} dispatch={props.dispatch}/>
        <WhereClause title="where_clause" selectedWhere={props.vars.form.where_clause} dispatch={props.dispatch}/>
      </div>
    );
}

export default Form;
