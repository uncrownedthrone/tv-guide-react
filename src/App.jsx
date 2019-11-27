import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import ShowPage from './pages/ShowPage'
import CastPage from './pages/CastPage'
import HomePage from './pages/HomePage'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Router>
      <header>
        <h1>Welcome to my SPA</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li>
              <Link to="/:show">Page 1</Link>
            </li>
            <li>
              <Link to="/:cast-member">Page 2</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/:show" component={ShowPage}></Route>
        <Route exact path="/:cast-member" component={CastPage}></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
