import {
  DELETE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  SUCCESS,
  START
} from '../constants'
import { arrToObj } from './utils'

const ReduserArticles = {
  entities: {},
  loading: false,
  loaded: false,
  error: false
}

export default (articlesState = ReduserArticles, action) => {
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

    case LOAD_ALL_ARTICLES + START:
      return {
        ...articlesState,
        loading: true
      }

    case LOAD_ALL_ARTICLES + SUCCESS:
      return {
        ...articlesState,
        entities: arrToObj(response),
        loading: false,
        loaded: true
      }

    default:
      return articlesState
  }
}
