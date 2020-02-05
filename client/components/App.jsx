import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import {getWaves} from '../api/index'
//import data from waves db

import Home from './Home'

import North from './North'
// import South from './South'
// import Share from './Share'

import South from './South'


class App extends React.Component{

  render() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/North' component={North} />
        <Route path='/South' component={South} />

      </div>
    </Router>

  )}
}

export default App
