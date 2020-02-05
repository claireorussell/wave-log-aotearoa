import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import {getWaves} from '../api/index'
//import data from waves db

import Home from './Home'

import North from './North'
// import South from './South'
// import Share from './Share'


class App extends React.Component{
constructor(props) {
  super(props)
}


  render() {
  return (
    <Router>
      <div>
        <Route exact path='/' component={Home} />
        <Route path='/North' render={(props) => <North {...props} northData={props} />} />
      </div>
    </Router>

  )}
}

export default App
