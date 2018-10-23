import React, { Component } from 'react'
import CommentListAll from '../comment-list-all'
import { Route } from 'react-router-dom'

class CommentPage extends Component {
  static propTypes = {}

  render() {
    return (
      <div>
        <CommentListAll />
      </div>
    )
  }
}

export default CommentPage
