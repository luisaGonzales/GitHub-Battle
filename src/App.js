import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Breadcrumb,
  Item
} from 'react-bootstrap';
import ReactBootstrap from 'react-bootstrap'
 
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Breadcrumb>
    <Breadcrumb.Item href="#">
      Home
    </Breadcrumb.Item>
    <Breadcrumb.Item href="http://getbootstrap.com/components/#breadcrumbs">
      Library
    </Breadcrumb.Item>
    <Breadcrumb.Item active>
      Data
    </Breadcrumb.Item>
  </Breadcrumb>
      </div>
    );
  }
}
// const breadcrumbInstance = (

// );

// ReactDOM.render(breadcrumbInstance, mountNode);
export default App;
