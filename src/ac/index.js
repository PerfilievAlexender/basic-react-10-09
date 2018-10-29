import { INCREMENT, DELETE } from '../constants'

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
