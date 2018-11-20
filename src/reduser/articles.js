import { DELETE, ADD_COMMENT, LOAD_ALL_ARTICLES } from '../constants'
import { arrToObj } from './utils'

export default (articlesState = [], action) => {
  const { type, payload, randomId, response } = action
  console.log('action in reduser articles', action)
  console.log('payload in reduser articles', payload)
  console.log('response', response)

  switch (type) {
    case DELETE:
      const copyArticlesState = { ...articlesState }
      delete copyArticlesState[payload]
      return copyArticlesState

    case ADD_COMMENT:
      const article = articlesState[payload.articleId]
      return {
        ...articlesState,
        [payload.articleId]: {
          ...article,
          comments: (article.comments || []).concat(randomId)
        }
      }

    case LOAD_ALL_ARTICLES:
      return arrToObj(response)

    default:
      return articlesState
  }
}
