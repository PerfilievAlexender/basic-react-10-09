import React, { PureComponent } from 'react'
import CommentList from '../commentList/index'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'

class Article extends PureComponent {
  render() {
    const { article, isOpen } = this.props
    return (
      <div>
        <h3 ref={this.titleRef}>{article.title}</h3>
        <button onClick={this.handleClick}>{isOpen ? 'close' : 'open'}</button>
        <CSSTransition
          transitionName="article"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.body}
        </CSSTransition>
      </div>
    )
  }

  get body() {
    const { article, isOpen } = this.props
    if (!isOpen) {
      return null
    }
    return (
      <div>
        {article.text}
        <CommentList comments={article.comments} isOpen={isOpen} />
      </div>
    )
  }

  titleRef = (ref) => console.log(ref)

  handleClick = () => this.props.toggleOpen(this.props.article.id)
}

Article.propTypes = {
  toggleOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  article: PropTypes.object.isRequired
}

export default Article
