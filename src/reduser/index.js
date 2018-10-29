import { combineReducers } from 'redux'
import counter from './counter'
import articles from './articles'

const reduser = combineReducers({
  counter,
  articles
})

export default reduser
