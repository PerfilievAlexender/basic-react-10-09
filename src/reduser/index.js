import { combineReducers } from 'redux'
import counter from './counter'
import articles from './articles'
import filters from './filter'
import comments from './comments'

const reduser = combineReducers({
  counter,
  articles,
  filters,
  comments
})

export default reduser
