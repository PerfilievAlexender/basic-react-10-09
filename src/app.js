import React, { Component } from 'react'
import ArticlePage from './components/routes/articles'
import Filters from './components/filters/index'
import Counter from './components/counter'
import { Route, Switch } from 'react-router-dom'
import CommentPage from './components/routes/commentPage'
import Menu from './components/menu/'
import MenuItem from './components/menu/menu-item'

class App extends Component {
  render() {
    return (
      <div>
        <Menu>
          <MenuItem path="/counter">Counter</MenuItem>
          <MenuItem path="/filters">Filters</MenuItem>
          <MenuItem path="/articles">Articles</MenuItem>
          <MenuItem path="/comments/1">Comments</MenuItem>
        </Menu>
        <Switch>
          <Route path="/counter" component={Counter} />
          <Route path="/filters" component={Filters} />
          <Route path="/articles" component={ArticlePage} />
          <Route path="/comments" component={CommentPage} />
          <Route path="*" render={() => <h2>Not found page</h2>} />
        </Switch>
      </div>
    )
  }
}

export default App
