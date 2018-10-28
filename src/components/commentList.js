import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'
import PropTypes from 'prop-types'

class CommentList extends Component {
  render() {
    const { comments, isOpen, handleClick, openItem } = this.props
    console.log(this.props)
    const commentList = comments ? (
      comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))
    ) : (
      <p>no comments yet</p>
    )
    return (
      <div>
        {isOpen && (
          <button onClick={handleClick}>
            {!this.props.openItem ? 'open comments' : 'close comments'}
          </button>
        )}
        <ul>{this.props.openItem && isOpen && commentList}</ul>
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

export default toggleOpen(CommentList)
