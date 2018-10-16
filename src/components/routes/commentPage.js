import React, { Component } from 'react'
import CommentList from '../comment-list'
import { Route } from 'react-router-dom'
import Article from '../article'

class CommentPage extends Component {
  static propTypes = {}

  render() {
    console.log('---', 'articles list match:', this.props.match)
    return (
      <div>
        <CommentList />
        <Route path="/articles/:id" children={this.getArticle} exact />
      </div>
    )
  }

  getArticle = ({ match }) => {
    console.log('---', 'article match: ', match)
    if (!match) return <h1>Select an Article</h1>

    return <Article id={match.params.id} isOpen key={match.params.id} />
  }
}

export default CommentPage
