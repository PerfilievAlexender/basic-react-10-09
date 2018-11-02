import { normalizedComments } from '../fixtures'
import { arrToObj } from './utils'

export default (state = arrToObj(normalizedComments), action) => {
  return state
}
