import user from './user'
import { routerStateReducer as router } from 'redux-router'
import { combineReducers } from 'redux'

const rootReducer =
  combineReducers(
    { router
    , user
    }
  )
export default rootReducer
