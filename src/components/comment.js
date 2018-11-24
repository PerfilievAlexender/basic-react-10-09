import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  render() {
    const { comment } = this.props
    return (
      <div>
        {comment.text}
        <b> by {comment.user}</b>
      </div>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.object
}

export default Comment
