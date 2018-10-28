import React, { Component } from 'react'
import Comment from './comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
  render() {
    const { comments, isOpen } = this.props
    const commentList =
      comments &&
      isOpen &&
      comments.map((comment) => (
        <li key={comment.id}>
          <Comment comment={comment} />
        </li>
      ))
    return (
      <div>
        {isOpen && (
          <button onClick={this.props.handleClick}>
            {!this.props.openItem ? 'open comments' : 'close comments'}
          </button>
        )}
        <ul>{this.props.openItem && commentList}</ul>
      </div>
    )
  }
}

export default toggleOpen(CommentList)
