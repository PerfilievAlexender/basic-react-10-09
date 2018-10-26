import React, { Component } from 'react'

class Article extends Component {
  render() {
    const { article, isOpen, toggleOpen } = this.props
    const text = isOpen ? 'close' : 'open'
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={toggleOpen}> {text} </button>
        <div>{isOpen && article.text}</div>
      </div>
    )
  }
}

export default Article
