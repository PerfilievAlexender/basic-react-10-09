import { normalizedComments } from '../fixtures'
import { arrToObj } from './utils'
import { ADD_COMMENT } from '../constants'

export default (state = arrToObj(normalizedComments), action) => {
  const { type, payload } = action
  switch (type) {
    case ADD_COMMENT:
      return {
        ...state,
        [action.randomId]: { id: action.randomId, ...payload.comment }
      }
    default:
      return state
  }
}
