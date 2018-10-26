import React, { PureComponent } from 'react'

class Article extends PureComponent {
  render() {
    const { article, isOpen } = this.props
    const text = isOpen ? 'close' : 'open'
    return (
      <div>
        <h3>{article.title}</h3>
        <button onClick={this.handleClick}> {text} </button>
        <div>{isOpen && article.text}</div>
      </div>
    )
  }

  handleClick = () => this.props.toggleOpen(this.props.article.id)
}

export default Article
