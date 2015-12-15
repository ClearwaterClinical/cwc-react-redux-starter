/* Used on reducers to attach a status to them, good for async */
import { CLEAR, FETCHING, ERROR, SUCCESS } from '../action/types'

export default function status ( state = { isLoading: false
                                         , isSuccess: false
                                         , error: ''
                                         }
                               , { status = ''
                                 , error = ''
                                 } = {}
                               ) {
  switch (status) {
    case FETCHING:
      return { ...state
             , isLoading: true
             , isSuccess: false
             , error
             }
    case SUCCESS:
      return { ...state
             , isLoading: false
             , isSuccess: true
             , error
             }
    case ERROR:
      return { ...state
             , isLoading: false
             , isSuccess: false
             , error
             }
    case CLEAR:
      return { ...state
             , isLoading: false
             , isSuccess: false
             , error: ''
             }
    default:
      return state
  }
}
