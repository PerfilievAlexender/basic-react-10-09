import { combineReducers } from 'redux'
import counter from './counter'
import articles from './articles'
import filters from './filter'

const reduser = combineReducers({
  counter,
  articles,
  filters
})

export default reduser
