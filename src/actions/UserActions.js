import {
  LOGIN_REQUEST,
  LOGIN_SUCCES,
  LOGIN_FAIL
} from '../constants/User'

export function handleLogin() {

  return function(dispatch) {

    dispatch({
      type: LOGIN_REQUEST
    })

    VK.Auth.login((r) => { // eslint-disable-line no-undef
      if (r.session) {
        let username = r.session.user.first_name;

        dispatch({
          type: LOGIN_SUCCES,
          payload: username
        })

      } else {
        console.error(LOGIN_FAIL);
      }
    },4); //bitmask for access friends,photos
  }

}
