import React, { Component } from 'react'
import { connect } from 'react-redux'

class CommentForm extends Component {
  render() {
    return (
      <div>
        <div>
          <label>
            text
            <input type="text" />
          </label>
          <label>
            user
            <input />
          </label>
        </div>
        <button>add comment</button>
      </div>
    )
  }
}

export default CommentForm
