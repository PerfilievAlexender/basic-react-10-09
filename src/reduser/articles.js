import { DELETE } from '../constants'
import { normalizedArticles } from '../fixtures'
import { arrToObj } from './utils'

const initialState = arrToObj(normalizedArticles)

export default (articlesState = initialState, action) => {
  const { type, payload } = action
  switch (type) {
    case DELETE:
      const copyarticlesState = { ...articlesState }
      delete copyarticlesState[payload]
      return copyarticlesState

    default:
      return articlesState
  }
}
