import React, { Component } from 'react'

class Article extends Component {
  render() {
    const { article, isOpen } = this.props
    return (
      <div>
        <button> open</button>
        {isOpen && article.text}
      </div>
    )
  }
}

export default Article
