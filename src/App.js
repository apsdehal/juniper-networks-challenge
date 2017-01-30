import React, { Component } from 'react';
import Form from './components/Form';
import Display from './components/Display';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-6">
              <Form></Form>
            </div>
            <div className="col-sm-6">
              <Display></Display>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
