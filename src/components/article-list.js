import React, { Component } from 'react'
import Article from './article'

class ArticleList extends Component {
  state = {
    articleId: null
  }

  toggleOpen = (articleId) => () => {
    if (articleId === this.state.articleId) {
      this.setState({ articleId: null })
    } else {
      this.setState({ articleId })
    }
  }

  render() {
    const { articles } = this.props

    const articlesList = articles.map((article) => (
      <li key={article.id}>
        <Article
          article={article}
          toggleOpen={this.toggleOpen(article.id)}
          isOpen={this.state.articleId === article.id}
        />
      </li>
    ))

    return <ul>{articlesList}</ul>
  }
}

export default ArticleList
