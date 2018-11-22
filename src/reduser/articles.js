import {
  DELETE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  SUCCESS,
  START,
  LOAD_ARTICLE,
  LOAD_COMMENTS
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

    case LOAD_COMMENTS + START:
      return {
        ...articlesState,
        entities: {
          ...articlesState.entities,
          [payload.id]: {
            ...articlesState.entities[payload.id],
            commentsLoading: true,
            commentsLoaded: false
          }
        }
      }

    case LOAD_COMMENTS + SUCCESS:
      return {
        ...articlesState,
        entities: {
          ...articlesState.entities,
          [payload.id]: {
            ...articlesState.entities[payload.id],
            commentsLoading: false,
            commentsLoaded: true
          }
        }
      }

    default:
      return articlesState
  }
}
