import { INCREMENT, DELETE, SELECT } from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE,
    payload: id
  }
}

export function selectArticles(item) {
  return {
    type: SELECT,
    payload: item
  }
}
