import { INCREMENT, DELETE, SELECT, SELECT_DATE } from '../constants'

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

export function selectArticles(selected) {
  return {
    type: SELECT,
    payload: { selected }
  }
}

export function selectDateRange(dateRange) {
  return {
    type: SELECT_DATE,
    payload: { dateRange }
  }
}
