import { createStore, applyMiddleware } from 'redux'
import reduser from '../reduser'
import randomId from '../middlewars/randomId'
import api from '../middlewars/api'

const store = createStore(reduser, applyMiddleware(randomId, api))

window.store = store

export default store
