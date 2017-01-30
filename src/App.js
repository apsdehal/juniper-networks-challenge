import React, { Component } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
    }

    this.vars = {
      form: {
        table_name: '',
        start_time: '',
        end_time: '',
        select_fields: [],
        where_clause: []
      }
    }
  }

  dispatch(action, value) {
    this.vars.form[action.type] = value;
    this.setState({query: JSON.stringify(this.vars.form)});
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Juniper Network Challenge</h2>
        </div>
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <Form form={this.state.forms} vars={this.vars} dispatch={this.dispatch.bind(this)}></Form>
            </div>
            <div className="col-sm-6">
              <Display query={this.state.query}></Display>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
