import {BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { Fragment } from 'react';
import GithubState from './context/github/GithubState';
import Header from './Components/header/Header';
import Search from './Components/users/Search';
import Users from './Components/users/Users';
import About from './Components/about/About';
import './App.css';

const App = () => {

    return (
      <GithubState>
      <Router>
        <div className='App'>
          <Header />
          <Switch>
            <Route exact path='/' render={() => ( <Fragment> <Search /><Users /></Fragment>) } />
            <Route exact path='/about' component={About} />
          </Switch>
        </div>
      </Router>
      </GithubState>
    )
}

export default App;
