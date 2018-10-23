import { START, SUCCESS, FAIL } from '../constants'

export default (store) => (next) => (action) => {
  const { type, callApiComments, ...rest } = action
  if (!callApiComments) return next(action)

  store.dispatch({
    type: type + START,
    ...rest
  })

  store.dispatch({
    type: type + START,
    ...rest
  })

  fetch(callApiComments)
    .then((res) => res.json())
    .then((response) => {
      console.log('response')
      store.dispatch({ type: type + SUCCESS, response, ...rest })
    })
    .catch((error) => store.dispatch({ type: type + FAIL, error, ...rest }))
}
