import React, { Component } from 'react'
import ArticlePage from './components/routes/articles'
import Filters from './components/filters/index'
import Counter from './components/counter'
import { Route, NavLink, Switch } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <NavLink to="/counter">Counter</NavLink>
          </div>
          <div>
            <NavLink to="/filters">Filters</NavLink>
          </div>
          <div>
            <NavLink to="/articles">Articles</NavLink>
          </div>
        </div>
        <Switch>
          <Route path="/counter" component={Counter} />
          <Route path="/filters" component={Filters} />
          <Route path="/articles" component={ArticlePage} />
          <Route path="*" render={() => <h2>Not found page</h2>} />
        </Switch>
      </div>
    )
  }
}

export default App
