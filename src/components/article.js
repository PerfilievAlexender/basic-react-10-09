import React, { PureComponent } from 'react'
import CommentList from './commentList'

class Article extends PureComponent {
  render() {
    const { article, isOpen } = this.props
    return (
      <div>
        <h3 ref={this.titleRef}>{article.title}</h3>
        <button onClick={this.handleClick}>
          {' '}
          {isOpen ? 'close' : 'open'}{' '}
        </button>
        <div>{isOpen && article.text}</div>
        <CommentList
          comments={article.comments}
          isOpen={isOpen}
          handleCommentsClick={this.handleCommentsClick}
        />
      </div>
    )
  }

  titleRef = (ref) => console.log(ref)

  handleClick = () => this.props.toggleOpen(this.props.article.id)
}

export default Article
