import { createStore as reduxCreateStore, combineReducers } from "redux"
import guitar from './guitar'

const initialState = {}

const rootReducer = combineReducers({
  guitar,
})

const safeDevtoolsMiddleware =
  typeof window !== 'undefined'
      && window.__REDUX_DEVTOOLS_EXTENSION__
      && window.__REDUX_DEVTOOLS_EXTENSION__()

const createStore = () => reduxCreateStore(
  rootReducer,
  initialState,
  safeDevtoolsMiddleware,
)
export default createStore
