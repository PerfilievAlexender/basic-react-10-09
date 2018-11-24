import React, { Component } from 'react'
import ArticleList from '../article-list'
import { Route } from 'react-router-dom'
import Article from '../article'

export class ArticlePage extends Component {
  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" children={this.getArticle} />
      </div>
    )
  }

  getArticle = ({ match }) => {
    if (!match) return <h1>Select article</h1>
    return <Article id={match.params.id} isOpen key={match.params.id} />
  }
}

export default ArticlePage
