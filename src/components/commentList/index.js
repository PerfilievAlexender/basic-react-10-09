import React, { Component } from 'react'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import CommentForm from '../commentForm'

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
        <CommentForm />
      </div>
    )
  }

  get body() {
    const { comments, isOpen, openItem } = this.props
    const commentList = comments ? (
      comments.map((id) => (
        <li key={id} className="test_comment">
          <Comment id={id} />
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
