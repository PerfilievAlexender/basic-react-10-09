import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Comment extends Component {
  render() {
    const { comment } = this.props
    console.log(this.props)
    return (
      <div>
        <b>{comment.user}</b>
        <p>{comment.text}</p>
      </div>
    )
  }
}

Comment.propTypes = {
  comment: PropTypes.object
}

export default Comment
