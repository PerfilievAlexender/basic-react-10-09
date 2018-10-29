import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectArticles } from '../../ac'

class SelectFilter extends Component {
  state = {
    selectedOption: null
  }

  handleChange = (selectedOption) => {
    this.setState({ selectedOption })
  }

  render() {
    const { articles } = this.props
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
          isMulti
        />
      </div>
    )
  }

  componentDidUpdate() {
    const { selectArticles } = this.props
    selectArticles(this.state.selectedOption)
  }
}

export default connect(
  (store) => ({
    articles: store.articles
  }),
  { selectArticles }
)(SelectFilter)
