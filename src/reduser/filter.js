import { SELECT, SELECT_DATE } from '../constants'

const defaultArticles = {
  selected: [],
  dateRange: {
    from: null,
    to: null
  }
}

export default (filters = defaultArticles, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT:
      return { ...filters, selected: payload.selected }
    case SELECT_DATE:
      return { ...filters, dateRange: payload.dateRange }
    default:
      return filters
  }
}
