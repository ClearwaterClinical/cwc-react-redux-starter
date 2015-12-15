/*@flow*/
import * as Actions from './types'
import * as API from '../util/api'
import * as constants from '../constants'
import { pushState } from 'redux-router'

export function authenticate (username: string, password: string): Function {
  return dispatch => {
    dispatch({ type: Actions.AUTHENTICATE
             , status: Actions.FETCHING
             })
    API.authenticate(username, password)
      .then(() => {
        dispatch({ type: Actions.AUTHENTICATE
                 , status: Actions.SUCCESS
                 , username
                 })
      })
      .catch(error => {
        dispatch({ type: Actions.AUTHENTICATE
                 , status: Actions.ERROR
                 , error
                 })
      })
  }
}

export function logout (): Function {
  return dispatch => {
    API.logout()
    dispatch ({ type: Actions.AUTHENTICATE
              , status: Actions.CLEAR
              })
    dispatch(pushState(null, `${constants.urlPrefix}/login}`))
  }
}
