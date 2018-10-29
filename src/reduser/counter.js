import { INCREMENT } from '../constants'

const initialState = 0

export default (counter = initialState, action) => {
  const { type } = action
  switch (type) {
    case INCREMENT:
      return counter + 1
    default:
      return counter
  }
}
