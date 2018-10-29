import { SELECT } from '../constants'

const selectedArticles = []

export default (filteredArticles = selectedArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT:
      return { ...filteredArticles, payload }
    default:
      return filteredArticles
  }
}
