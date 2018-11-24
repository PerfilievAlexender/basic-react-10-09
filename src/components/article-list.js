import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { filteredArticles, articlesLoading } from '../selectors'
import { loadAllArticles } from '../ac'
import Loader from './common/loader'
import { NavLink } from 'react-router-dom'

export class ArticleList extends Component {
  render() {
    const { articles } = this.props

    const articlesList = articles.map((article) => (
      <li key={article.id} className="test_article-list--item">
        <NavLink to={`/articles/${article.id}`}>{article.title}</NavLink>
      </li>
    ))

    if (this.props.loading) return <Loader />
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

export default connect(
  (state) => {
    console.log('--- connect')
    return {
      articles: filteredArticles(state),
      loading: articlesLoading(state)
    }
  },
  { fetchData: loadAllArticles }
)(ArticleList)
