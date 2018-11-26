import React, { Component } from 'react'
import CommentsOnPage from '../commentsOnPage'
import { Route } from 'react-router-dom'

export class CommentPage extends Component {
  render() {
    return (
      <div>
        <Route path="/comments/:page" render={this.getCommentsOnPage} />
      </div>
    )
  }

  getCommentsOnPage = ({ match }) => {
    return (
      <div>
        menu
        <CommentsOnPage page={match.params.page} />
      </div>
    )
  }
}

export default CommentPage
