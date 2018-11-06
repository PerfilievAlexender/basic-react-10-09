import { DELETE, ADD_COMMENT } from '../constants'
import { normalizedArticles } from '../fixtures'
import { arrToObj } from './utils'

const initialState = arrToObj(normalizedArticles)

export default (articlesState = initialState, action) => {
  const { type, payload, randomId } = action
  console.log('action in reduser articles', action)
  console.log('payload in reduser articles', payload)

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

    default:
      return articlesState
  }
}
