import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import thunk from 'redux-thunk'
import logger from '../middlewares/logger'
import randomId from '../middlewares/randomId'
import api from '../middlewares/api'
import apiComments from '../middlewares/apiComments'

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
      })
    : compose

const enhancer = composeEnhancers(
  applyMiddleware(thunk, randomId, api, apiComments, logger)
  // other store enhancers if any
)

const store = createStore(reducer, enhancer)

//dev only!!!
window.store = store

export default store
