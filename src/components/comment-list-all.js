import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadComments } from '../ac'

class CommentListAll extends Component {
  render() {
    return <div>comments</div>
  }

  componentDidMount = () => {
    console.log('тест обновления')
    this.props.loadComments()
  }
}

export default connect(
  (state) => ({
    comments: '123'
  }),
  { loadComments }
)(CommentListAll)
