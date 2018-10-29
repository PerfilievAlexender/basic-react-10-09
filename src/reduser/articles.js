import { DELETE } from '../constants'
import articles from '../fixtures'

const initialState = articles

export default (articlesState = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case DELETE:
      return articlesState.filter((article) => article.id !== payload)
    default:
      return articlesState
  }
}
