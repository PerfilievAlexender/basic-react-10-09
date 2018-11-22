import React, { Component } from 'react'
import ArticleList from './components/article-list'
import SelectFilter from './components/filters/select'
import DayPickerFilter from './components/filters/dayPicker'
import Counter from './components/counter'
import { Route, NavLink } from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <div>
            <NavLink to="/counter">Counter</NavLink>
          </div>
          <div>
            <NavLink to="/daySelect">Day select filter</NavLink>
          </div>
          <div>
            <NavLink to="/select">Select filter</NavLink>
          </div>
          <div>
            <NavLink to="/articles">Articles</NavLink>
          </div>
        </div>

        <Route path="/counter" component={Counter} />
        <Route path="/daySelect" component={DayPickerFilter} />
        <Route path="/select" component={SelectFilter} />
        <Route path="/articles" component={ArticleList} />
      </div>
    )
  }
}

export default App
