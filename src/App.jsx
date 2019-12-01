import React from 'react'
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ShowPage from './pages/ShowPage'
import NotFound from './pages/NotFound'
import CastMemberShowsPage from './pages/CastMemberShowsPage'

const App = () => {
  return (
    <Router>
      <header>
        {/* commented out since nav isn't needed but keeping just in case */}
        {/* <nav>
          <ul>
            <li>
              <Link to="/">Go Home</Link>
            </li>
            <li>
              <Link to="/showpage">Show Page</Link>
            </li>
            <li>
              <Link to="/castpage">Cast Member Page</Link>
            </li>
          </ul>
        </nav> */}
      </header>
      <Switch>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/ShowPage/:show" component={ShowPage}></Route>
        <Route
          exact
          path="/CastPage/:member"
          component={CastMemberShowsPage}
        ></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  )
}

export default App
