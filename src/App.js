import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Home from './home/Home'
import Upload from './form/Upload'

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/upload">
          <Upload></Upload>
        </Route>
      </Switch>
    </Router>
  )
}
