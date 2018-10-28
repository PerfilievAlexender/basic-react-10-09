import React, { Component } from 'react'
import ArticleList from './components/article-list'
import articles from './fixtures'
import SelectFilter from './components/filters/select'
import DayPickerFilter from './components/filters/dayPicker'

class App extends Component {
  render() {
    return (
      <div>
        <DayPickerFilter />
        <SelectFilter />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App
