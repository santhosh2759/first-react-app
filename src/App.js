import React, { Component } from 'react';
import Header from './Components/header/Header';
import Users from './Components/users/Users';
import './App.css';

class App extends Component {

  render() {
    return (
      <nav className="App">
        <Header />
        <div className="container">
          <Users />
        </div>
      </nav>
    )}
}

export default App;
