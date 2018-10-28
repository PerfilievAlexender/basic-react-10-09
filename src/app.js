import React, { Component } from 'react'
import ArticleList from './components/article-list'
import articles from './fixtures'
import SelectFilter from './filters/select'
import DayPickerFilter from './filters/dayPicker'

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
