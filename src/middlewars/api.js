export default (store) => (next) => (action) => {
  const { articleApi } = action

  if (!articleApi) return next(action)

  fetch(articleApi)
    .then((res) => res.json())
    .then((response) => next({ response, ...action }))
}
