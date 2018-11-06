import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../ac'

class CommentForm extends Component {
  state = {
    user: '',
    text: ''
  }

  render() {
    console.log(this.state)
    return (
      <form>
        <div>
          <label>
            text
            <input
              onChange={this.textChange}
              type="text"
              name="comment"
              value={this.state.text}
            />
          </label>
          <label>
            user
            <input
              onChange={this.userChange}
              type="text"
              name="user"
              value={this.state.user}
            />
          </label>
        </div>
        <button type="onSubmit" onClick={this.submitForm}>
          add comment
        </button>
      </form>
    )
  }

  textChange = (evt) => {
    this.setState({
      text: evt.target.value
    })
  }

  userChange = (evt) => {
    this.setState({
      user: evt.target.value
    })
  }

  submitForm = (evt) => {
    evt.preventDefault()
    this.props.addComment(this.state, this.props.id)
    this.setState({
      user: '',
      text: ''
    })
  }
}

export default connect(
  null,
  { addComment }
)(CommentForm)
