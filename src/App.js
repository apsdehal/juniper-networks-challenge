import React, { Component } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      query: '',
      form: {
        table_name: '',
        start_time: '',
        end_time: '',
        select_fields: [],
        where_clause: []
      }
    }
  }

  handleOnChange(action, value) {
    if (action.type === 'table_name') {
      this.setState({form: {table_name: value}});
    } else if (action.type === 'start_time') {
      this.setState({form: {start_time: value}});
    } else if (action.type === 'end_time') {
      this.setState({form: {end_time: value}});
    }
  }

  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <Form form={this.state.forms} onChange={this.handleOnChange}></Form>
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
