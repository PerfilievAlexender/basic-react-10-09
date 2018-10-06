import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSTransition from 'react-addons-css-transition-group'
import Comment from '../comment'
import toggleOpen from '../../decorators/toggleOpen'
import './style.css'
import CommentAddForm from '../commentAddForm'

class CommentList extends Component {
  static propTypes = {
    comments: PropTypes.object,
    //from toggleOpen decorator
    isOpen: PropTypes.bool,
    toggleOpen: PropTypes.func
  }

  /*
	static defaultProps = {
		comments: []
	}
*/

  render() {
    const { isOpen, toggleOpen } = this.props
    const text = isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick={toggleOpen} className="test__comment-list--btn">
          {text}
        </button>
        <CSSTransition
          transitionName="comments"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={500}
        >
          {this.getBody()}
        </CSSTransition>
      </div>
    )
  }

  getBody() {
    const { article, isOpen } = this.props
    if (!isOpen) return null

    return (
      <div className="test__comment-list--body">
        {article.comments.length ? (
          this.comments
        ) : (
          <h3 className="test__comment-list--empty">No comments yet</h3>
        )}
      </div>
    )
  }

  get comments() {
    return (
      <div>
        <ul>
          {this.props.article.comments.map((id) => (
            <li key={id} className="test__comment-list--item">
              <Comment id={id} />
            </li>
          ))}
        </ul>
        <CommentAddForm articleId={this.props.article.id} />
      </div>
    )
  }
}

export default toggleOpen(CommentList)
