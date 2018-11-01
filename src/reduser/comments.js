import { normalizedComments } from '../fixtures'

const initialState = normalizedComments.reduce(
  (acc, comment) => ({ ...acc, [comment.id]: comment }),
  {}
)

export default (state = initialState, action) => {
  return state
}
