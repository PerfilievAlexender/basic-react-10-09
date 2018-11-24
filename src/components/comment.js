import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectedComments } from '../selectors'

class Comment extends Component {
  render() {
    const { comment } = this.props
    console.log(this.props.id)

    if (!comment) return null

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

export default connect((state, ownProps) => ({
  comment: selectedComments(state, ownProps)
}))(Comment)
