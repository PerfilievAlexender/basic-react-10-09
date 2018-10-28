import React, { Component } from 'react'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'

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
    const { comments, isOpen, openItem } = this.props
    const commentList = comments ? (
      comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))
    ) : (
      <p>no comments yet</p>
    )

    if (!openItem && isOpen) return null

    return <ul>{commentList}</ul>
  }
}

CommentList.propTypes = {
  comments: PropTypes.array,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  openItem: PropTypes.bool
}

export default toggleOpen(CommentList)
