//import { normalizedComments } from '../fixtures'
import { arrToObj } from './utils'
import { ADD_COMMENT, LOAD_COMMENTS, START, SUCCESS } from '../constants'

const ReduserComments = {
  entities: {},
  loaded: null
}

export default (commentsState = ReduserComments, action) => {
  const { type, payload, response } = action
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
    default:
      return commentsState
  }
}
