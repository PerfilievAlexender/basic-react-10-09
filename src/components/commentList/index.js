import React, { Component } from 'react'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import CommentForm from '../commentForm'
import { connect } from 'react-redux'
import { loadComments } from '../../ac'
import { commentsLoading } from '../../selectors'
import Loader from '../common/loader'

class CommentList extends Component {
  componentDidUpdate(prevProps) {
    const { loadComments, article, openItem } = this.props

    console.log('article.commentsLoading', article.commentsLoading)
    console.log('article.commentsLoaded', article.commentsLoaded)
    if (
      openItem &&
      !prevProps.openItem &&
      !article.commentsLoading &&
      !article.commentsLoaded
    ) {
      loadComments(article.id)
      console.log('article.commentsLoading2', article.commentsLoading)
      console.log('article.commentsLoaded2', article.commentsLoaded)
    }
  }

  render() {
    const { isOpen, handleClick } = this.props

    return (
      <div>
        {isOpen && (
          <button onClick={handleClick}>
            {!this.props.openItem ? 'open comments' : 'close comments'}
          </button>
        )}
        <CSSTransition
          transitionName="comment"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {this.body}
        </CSSTransition>
      </div>
    )
  }

  get body() {
    const { article, isOpen, openItem } = this.props

    if (!article.comments) return null

    console.log('watching on article', article)
    console.log('watching on props', this.props)

    const commentList = article.comments.length ? (
      article.comments.map((id) => (
        <li key={id} className="test_comment">
          <Comment comment={id} />
        </li>
      ))
    ) : (
      <p>no comments yet</p>
    )

    if (!openItem && isOpen) return null

    if (!this.props.loading) return <Loader />

    return (
      <div>
        <ul>{commentList}</ul>
        <CommentForm id={article.id} />
      </div>
    )
  }
}

CommentList.propTypes = {
  article: PropTypes.object,
  isOpen: PropTypes.bool,
  handleClick: PropTypes.func,
  openItem: PropTypes.bool
}

export default connect(
  (state) => ({
    loading: commentsLoading(state)
  }),
  { loadComments }
)(toggleOpen(CommentList))
