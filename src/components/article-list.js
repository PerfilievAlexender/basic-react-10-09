import React, { Component } from 'react'
import Article from './article/index'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'

class ArticleList extends Component {
  render() {
    const { articles, openItemId, toggleOpenItem } = this.props

    const articlesList = articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem}
        />
      </li>
    ))

    return <ul>{articlesList}</ul>
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}

const ArticleListWithAccordion = accordion(ArticleList)
export default ArticleListWithAccordion
