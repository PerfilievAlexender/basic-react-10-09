import React, { Component } from 'react'
import Article from './article/index'
import accordion from '../decorators/accordion'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

export class ArticleList extends Component {
  render() {
    const { articles, openItemId, toggleOpenItem } = this.props

    const articlesList = articles.map((article) => (
      <li key={article.id} className="test_article-list--item">
        <Article
          article={article}
          isOpen={openItemId === article.id}
          toggleOpen={toggleOpenItem}
        />
      </li>
    ))

    return <ul>{articlesList}</ul>
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData && fetchData()
  }
}

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
}

const ArticleListWithAccordion = accordion(ArticleList)
export default connect((store) => {
  const articles1 = store.articles
  const selected1 = store.selected.payload ? store.selected.payload : []
  const selectedArticles = articles1.filter((article) =>
    selected1.find((sel) => sel.value === article.id)
  )

  return {
    articles: selectedArticles.length > 0 ? selectedArticles : store.articles
  }
})(ArticleListWithAccordion)
