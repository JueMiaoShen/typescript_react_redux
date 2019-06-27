import { combineReducers } from 'redux'
import counter from './counter'
import location from './location'

export default combineReducers({
  counter,
  location
})
