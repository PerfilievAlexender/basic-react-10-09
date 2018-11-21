import { FAIL, START, SUCCESS } from '../constants'

export default (store) => (next) => (action) => {
  const { articleApi, type, ...rest } = action

  if (!articleApi) return next(action)

  next({ type: type + START, ...rest })

  fetch(articleApi)
    .then((res) => res.json())
    .then((response) => next({ type: type + SUCCESS, response, ...rest }))
    .catch((error) => next({ type: type + FAIL, error, ...rest }))
}
