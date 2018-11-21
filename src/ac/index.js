import {
  INCREMENT,
  DELETE,
  SELECT,
  SELECT_DATE,
  ADD_COMMENT,
  LOAD_ALL_ARTICLES,
  LOAD_ARTICLE
} from '../constants'

export function increment() {
  return {
    type: INCREMENT
  }
}

export function deleteArticle(id) {
  return {
    type: DELETE,
    payload: { id }
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

export function addComment(comment, articleId) {
  console.log('action is')
  return {
    type: ADD_COMMENT,
    payload: { comment, articleId },
    generateId: true
  }
}

export function loadAllArticles() {
  return {
    type: LOAD_ALL_ARTICLES,
    articleApi: '/api/article'
  }
}

export function loadArticle(id) {
  return {
    type: LOAD_ARTICLE,
    payload: { id },
    articleApi: `/api/article/${id}`
  }
}
