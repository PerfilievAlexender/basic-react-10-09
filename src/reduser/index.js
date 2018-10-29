import { combineReducers } from 'redux'
import counter from './counter'
import articles from './articles'
import selected from './filter'

const reduser = combineReducers({
  counter,
  articles,
  selected
})

export default reduser
