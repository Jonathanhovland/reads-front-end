import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import NavBar from './Components/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <NavBar />
        </header>
      </div>
      </Router>
    );
  }
}

export default App;
