import React, { Component } from 'react'
import Select from 'react-select'
import { connect } from 'react-redux'
import { selectArticles } from '../../ac'
import { articlesListSelector, selectedSelector } from '../../selectors'

class SelectFilter extends Component {
  handleChange = (selected) => {
    const { selectArticles } = this.props
    selectArticles(selected)
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
          value={this.props.selected}
          onChange={this.handleChange}
          isMulti
        />
      </div>
    )
  }
}

export default connect(
  (store) => ({
    articles: articlesListSelector(store),
    selected: selectedSelector(store)
  }),
  { selectArticles }
)(SelectFilter)
