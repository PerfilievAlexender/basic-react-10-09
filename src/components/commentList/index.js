import React, { Component } from 'react'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import CommentForm from '../commentForm'
import { connect } from 'react-redux'
import { loadComments } from '../../ac'
import {
  commentListSelector,
  commentsLoading,
  commentsLoaded
} from '../../selectors'

class CommentList extends Component {
  componentDidUpdate(prevProps) {
    console.log('qqqqqqqq', prevProps.isOpen)
    console.log('qqqqqqqq', this.props.isOpen)
    const {
      loadComments,
      article,
      isOpen,
      commentsLoading,
      commentsLoaded
    } = this.props
    if (isOpen && !commentsLoading && !commentsLoaded) loadComments(article.id)
  }

  render() {
    const { isOpen, handleClick } = this.props

    return (
      <div>
        {isOpen && (
          <button onClick={handleClick}>
            {!this.props.openItem ? 'open comments' : 'close comments'}
          </button>
        )}
        <CSSTransition
          transitionName="comment"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.body}
        </CSSTransition>
      </div>
    )
  }

  get body() {
    const { article, isOpen, openItem, comments } = this.props
    const commentList = comments.length ? (
      comments.map((comment) => (
        <li key={comment.id} className="test_comment">
          <Comment comment={comment} />
        </li>
      ))
    ) : (
      <p>no comments yet</p>
    )

    if (!openItem && isOpen) return null

    return (
      <div>
        <ul>{commentList}</ul>
        <CommentForm id={article.id} />
      </div>
    )
  }
}

CommentList.propTypes = {
  comments: PropTypes.array,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  openItem: PropTypes.bool
}

export default connect(
  (state) => ({
    comments: commentListSelector(state),
    commentsLoading: commentsLoading(state),
    commentsLoaded: commentsLoaded(state)
  }),
  { loadComments }
)(toggleOpen(CommentList))
