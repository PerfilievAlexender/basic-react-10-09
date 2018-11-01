import { SELECT, DATA_SELECT, DELETE } from '../constants'

const defaultFilters = {
  selected: [],
  dataRange: {
    from: null,
    to: null
  }
}

export default (filters = defaultFilters, action) => {
  const { type, payload } = action

  switch (type) {
    case SELECT:
      return { ...filters, selected: payload.selected }
    case DATA_SELECT:
      return { ...filters, dataRange: payload.dataRange }
    case DELETE:
      return {
        ...filters,
        selected: filters.selected.filter(
          (selected) => selected.value !== payload.id
        )
      }
    default:
      return filters
  }
}
