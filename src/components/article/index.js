import React, { PureComponent } from 'react'
import CommentList from '../commentList'
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
          transitionEnterTimeout={5000}
          transitionLeaveTimeout={3000}
        >
          <div>
            {isOpen && article.text}
            <CommentList comments={article.comments} isOpen={isOpen} />
          </div>
        </CSSTransition>
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
