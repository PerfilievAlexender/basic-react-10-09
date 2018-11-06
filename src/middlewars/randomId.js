export default (store) => (next) => (action) => {
  console.log('before action', action)

  if (!action.generateId) return next(action)
  next({
    ...action,
    randomId:
      'id' +
      '-' +
      Math.random()
        .toString(16)
        .slice(2)
  })
  console.log('after action', action)
}
