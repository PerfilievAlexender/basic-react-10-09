import { arrToObj } from './utils'
import {
  ADD_COMMENT,
  LOAD_ALL_COMMENTS,
  LOAD_COMMENTS,
  START,
  SUCCESS
} from '../constants'

const ReduserComments = {
  entities: {},
  loaded: null,
  totalRecords: null
}

export default (commentsState = ReduserComments, action) => {
  const { type, payload, response } = action

  console.log('zzzzzzzzzzzzzzzz', payload)
  switch (type) {
    case LOAD_COMMENTS + START:
      return {
        ...commentsState,
        loaded: false
      }

    case LOAD_COMMENTS + SUCCESS:
      return {
        ...commentsState,
        entities: arrToObj(response),
        loaded: true
      }

    case ADD_COMMENT:
      return {
        ...commentsState,
        entities: {
          ...commentsState.entities,
          [action.randomId]: { id: action.randomId, ...payload.comment }
        }
      }

    case LOAD_ALL_COMMENTS + START:
      return {
        ...commentsState,
        commentsLoaded: {
          [payload.page]: false
        },
        loaded: false
      }

    case LOAD_ALL_COMMENTS + SUCCESS:
      return {
        ...commentsState,
        entities: arrToObj(response.records),
        commentsLoaded: {
          [payload.page]: true
        },
        totalRecords: response.total,
        loaded: true
      }

    default:
      return commentsState
  }
}
