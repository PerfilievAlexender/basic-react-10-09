import React, { Component } from 'react'
import Article from './article'

class ArticleList extends Component {
  state = {
    openArticleId: '',
    isOpen: false
  }

  render() {
    const { articles } = this.props

    const articlesList = articles.map((article) => (
      <li key={article.id}>
        {article.title}

        <Article
          article={article}
          id={this.state.openArticleId}
          open={this.state.isOpen}
        />
      </li>
    ))

    return <div>{articlesList}</div>
  }
}

export default ArticleList
