import { createStore, applyMiddleware } from 'redux'
import reduser from '../reduser'
import thunk from 'redux-thunk'
import randomId from '../middlewars/randomId'
import api from '../middlewars/api'

const store = createStore(reduser, applyMiddleware(thunk, randomId, api))

window.store = store

export default store
