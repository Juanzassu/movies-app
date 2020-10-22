import React from 'react'
import Home from './pages/Home'
import MovieDetail from './pages/MovieDetail'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

const App = () => {
  return (
    <div className="App">
      Menu de navegacion
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/moviedetail">
            <MovieDetail></MovieDetail>
          </Route>
        </Switch>
      </Router>
    </div>
  )
}

export default App
