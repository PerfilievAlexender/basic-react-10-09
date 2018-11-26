import React, { Component } from 'react'
import { connect } from 'react-redux'
import { totalCommentsRecord } from '../selectors'
import { NavLink } from 'react-router-dom'
import { loadPageComments } from '../ac'
import {
  commentListSelector,
  commentsLoading,
  commentsPageLoaded
} from '../selectors'
import Comment from './comment'

export class CommentsOnPage extends Component {
  componentDidMount() {
    if (!this.props.commentsLoaded) this.props.loadPageComments(this.props.page)
  }

  componentDidUpdate() {
    if (!this.props.commentsLoaded) this.props.loadPageComments(this.props.page)
  }

  render() {
    const { totalComments, comments } = this.props
    console.log('loaded', this.props.commentsLoaded)

    const qualityOfPages = new Array(Math.ceil(totalComments / 5))
      .fill()
      .map((_, i) => (
        <li key={i}>
          <NavLink to={`/comments/${i + 1}`}>{i + 1}</NavLink>
        </li>
      ))

    const commentsOnPage = comments.map((comment) => (
      <li key={comment.id}>
        <Comment id={comment.id} />
      </li>
    ))

    return (
      <div>
        {qualityOfPages}
        {commentsOnPage}
      </div>
    )
  }
}

export default connect(
  (state) => ({
    totalComments: totalCommentsRecord(state),
    comments: commentListSelector(state),
    loaded: commentsLoading(state),
    commentsLoaded: commentsPageLoaded(state)
  }),
  { loadPageComments }
)(CommentsOnPage)
