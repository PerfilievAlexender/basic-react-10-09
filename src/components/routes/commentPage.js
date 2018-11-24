import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadAllComments } from '../../ac'
import { commentListSelector } from '../../selectors'

export class CommentPage extends Component {
  render() {
    const { comments } = this.props
    const commentsList = comments.map((comment) => (
      <li key={comment.id}>
        {comment.text} by {comment.user}
      </li>
    ))
    return <div>{commentsList}</div>
  }

  componentDidMount() {
    this.props.loadAllComments()
  }
}

export default connect(
  (state) => ({ comments: commentListSelector(state) }),
  { loadAllComments }
)(CommentPage)
