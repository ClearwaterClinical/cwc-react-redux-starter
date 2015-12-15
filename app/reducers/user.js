/* Manage the logged-in user's state */
import * as Actions from '../action/types'
import status from './status'
import clearOnLogout from './clearOnLogout'

export default function user ( state: Object = status()
                             , action: Object
                             ): Object {
  switch (action.type) {
    case Actions.AUTHENTICATE:
      let newState = status(state, action)
      if (action.status === Actions.SUCCESS) {
        const { username } = action
        newState = { ...newState
                   , username
                   }
      }
      return clearOnLogout(user)(newState, action)
    default:
      return state
  }
}
