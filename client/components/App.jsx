import React from 'react'
import { HashRouter as Router, Route } from 'react-router-dom'

import Nav from './Nav'
import Home from './Home'
import North from './North'
import South from './South'
import Share from './Share'
import MagicSeaweed from './MagicSeaweed'


class App extends React.Component{

  render() {
  return (
    <Router>
      <div>
        <Nav />
        <Route exact path='/' component={Home} />
        <Route path='/north' component={North} />
        <Route path='/south' component={South} />
        <Route path='/share' component={Share} />
        <Route path='/magic' component={MagicSeaweed} />
        </div>
    </Router>

  )}
}

export default App
