import React, { PureComponent } from 'react'
import CommentList from '../commentList/index'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import { connect } from 'react-redux'
import { deleteArticle } from '../../ac'

class Article extends PureComponent {
  render() {
    const { article, isOpen } = this.props
    return (
      <div>
        <div>
          <h3 ref={this.titleRef}>{article.title}</h3>
          <button onClick={this.handleClick} className="test_openArticle">
            {isOpen ? 'close' : 'open'}
          </button>
          <button onClick={this.handleDeleteClick}>delete</button>
        </div>
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
      <div className="test_article--body">
        {article.text}
        <CommentList comments={article.comments} isOpen={isOpen} />
      </div>
    )
  }

  //titleRef = (ref) => console.log(ref)

  handleClick = () => this.props.toggleOpen(this.props.article.id)

  handleDeleteClick = () => {
    const { deleteArticle, article } = this.props
    deleteArticle(article.id)
  }
}

Article.propTypes = {
  toggleOpen: PropTypes.func,
  isOpen: PropTypes.bool,
  article: PropTypes.object.isRequired
}

export default connect(
  null,
  { deleteArticle }
)(Article)
