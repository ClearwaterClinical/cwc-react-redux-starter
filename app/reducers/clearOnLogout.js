/* Used on reducers that should be reset after a logout */
import * as Actions from '../action/types'
export default reducer => (state, { type, status }) => {
  if (type === Actions.AUTHENTICATE &&
      status === Actions.CLEAR) {
    return reducer(undefined, { type: '@INIT' })
  }
  return state
}
