import { createStore, applyMiddleware } from 'redux'
import reduser from '../reduser'
import randomId from '../middlewars/randomId'

const store = createStore(reduser, applyMiddleware(randomId))

window.store = store

export default store
