import { createStore as reduxCreateStore, combineReducers } from 'redux'
import guitar from './guitar'

const initialState = {}

const rootReducer = combineReducers({
  guitar,
})

/* eslint-disable no-undef, no-underscore-dangle */
const safeDevtoolsMiddleware = typeof window !== 'undefined'
      && window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__()
/* eslint-enable no-undef, no-underscore-dangle */

const createStore = () => reduxCreateStore(
  rootReducer,
  initialState,
  safeDevtoolsMiddleware,
)
export default createStore
