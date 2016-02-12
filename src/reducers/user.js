import {
  LOGIN_SUCCES
} from '../constants/User'

const initialState = {
  name: ''
}

export default function user(state = initialState, action) {

  switch(action.type) {
    case LOGIN_SUCCES:
      return { ...state, name: action.payload }

    default:
      return state
  }

}
