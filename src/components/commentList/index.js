import React, { Component } from 'react'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import CommentForm from '../commentForm'
import { connect } from 'react-redux'
import { loadComments } from '../../ac'

class CommentList extends Component {
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
    const { article, isOpen, openItem } = this.props
    const commentList = article.comments ? (
      article.comments.map((id) => (
        <li key={id} className="test_comment">
          <Comment id={id} />
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

  componentDidUpdate(oldProps) {
    const { loadComments, article, isOpen } = this.props
    if (isOpen) loadComments(article.id)
  }
}

CommentList.propTypes = {
  comments: PropTypes.array,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  openItem: PropTypes.bool
}

export default connect(
  null,
  { loadComments }
)(toggleOpen(CommentList))
