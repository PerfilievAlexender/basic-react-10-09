import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { selectedComments } from '../selectors'

class Comment extends Component {
  render() {
    const { comment } = this.props
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

export default connect((state, ownProps) => ({
  comment: selectedComments(state, ownProps)
}))(Comment)
