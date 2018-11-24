import React, { PureComponent } from 'react'
import CommentList from '../commentList/index'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import './style.css'
import { connect } from 'react-redux'
import { deleteArticle, loadArticle } from '../../ac'
import { selectedArticles, articleTextLoading } from '../../selectors'
import Loader from '../common/loader'
import toggleOpen from '../../decorators/toggleOpen'

class Article extends PureComponent {
  render() {
    const { article, openItem, handleClick } = this.props

    if (!article) return null

    return (
      <div>
        <div>
          <h3 ref={this.titleRef}>{article.title}</h3>
          <button onClick={handleClick} className="test_openArticle">
            {openItem ? 'open' : 'close'}
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
    const { article, isOpen, openItem } = this.props
    const articleText = !openItem && isOpen ? article.text : null

    if (this.props.loading) return <Loader />

    return (
      <div className="test_article--body">
        {articleText}
        <CommentList article={article} isOpen={isOpen} />
      </div>
    )
  }

  startLoadingArticleText = () => {
    const { loadArticle, article, id } = this.props
    if (!article || !article.text) return loadArticle(id)
  }

  handleDeleteClick = () => {
    const { deleteArticle, article } = this.props
    deleteArticle(article.id)
  }

  componentDidMount() {
    this.startLoadingArticleText()
  }

  componentWillMount() {
    this.startLoadingArticleText()
  }
}

Article.propTypes = {
  isOpen: PropTypes.bool,
  article: PropTypes.object
}

export default connect(
  (state, ownProps) => ({
    article: selectedArticles(state, ownProps),
    loading: articleTextLoading(state)
  }),
  { deleteArticle, loadArticle }
)(toggleOpen(Article))
