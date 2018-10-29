import React, { Component } from 'react'
import ArticleList from './components/article-list'
import articles from './fixtures'
import SelectFilter from './components/filters/select'
import DayPickerFilter from './components/filters/dayPicker'
import Counter from './components/counter'

class App extends Component {
  render() {
    return (
      <div>
        <Counter />
        <DayPickerFilter />
        <SelectFilter />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App
