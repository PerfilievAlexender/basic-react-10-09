import React, { Component } from 'react'
import ArticleList from './components/article-list'
import articles from './fixtures'
import Select from 'react-select'

class App extends Component {
  state = {
    selectedOption: null
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption })
  }

  render() {
    const { selectedOption } = this.state

    const options = articles.map((article) => ({
      label: article.title,
      value: article.id
    }))
    return (
      <div>
        <Select
          options={options}
          value={this.state.selectedOption}
          onChange={this.handleChange}
        />
        <ArticleList articles={articles} />
      </div>
    )
  }
}

export default App
