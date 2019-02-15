import { combineReducers } from 'redux'
import * as page from './counter'

const rootReducer = combineReducers({
  ...page
})

export default rootReducer