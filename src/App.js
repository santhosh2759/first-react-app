import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Component, Fragment } from 'react';
import Header from './Components/header/Header';
import Users from './Components/users/Users';
import About from './Components/about/About';
import './App.css';

class App extends Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <Header />
          <div className='container'>
            <Switch>
              <Route exact path='/' component={Users} />
              <Route exact path='/about' component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    )}
}

export default App;
