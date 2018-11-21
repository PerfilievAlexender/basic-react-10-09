import {
  DELETE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  SUCCESS,
  START,
  LOAD_ARTICLE
} from '../constants'
import { arrToObj } from './utils'

const ReduserArticles = {
  entities: {},
  loading: false,
  loaded: false,
  error: false,
  textLoad: false
}

export default (articlesState = ReduserArticles, action) => {
  const { type, payload, randomId, response } = action
  console.log('action in reduser articles', action)
  console.log('payload in reduser articles', payload)

  switch (type) {
    case DELETE:
      const copyArticlesState = { ...articlesState }
      delete copyArticlesState.entities[payload.id]
      return copyArticlesState

    case ADD_COMMENT:
      const article = articlesState.entities[payload.articleId]
      return {
        ...articlesState,
        entities: {
          [payload.articleId]: {
            ...article,
            comments: (article.comments || []).concat(randomId)
          }
        }
      }

    case LOAD_ARTICLE + START:
      return {
        ...articlesState,
        textLoad: true
      }

    case LOAD_ARTICLE + SUCCESS:
      const articleById = articlesState.entities[payload.id]
      console.log('test article text', articleById)
      console.log('test response', response)
      return {
        ...articlesState,
        entities: {
          ...articlesState.entities,
          [payload.id]: {
            ...response
          }
        },
        textLoad: false
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
