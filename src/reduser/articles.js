import { DELETE } from '../constants'
import { normalizedArticles } from '../fixtures'

const initialState = normalizedArticles

export default (articlesState = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case DELETE:
      return articlesState.filter((article) => article.id !== payload)
    default:
      return articlesState
  }
}
