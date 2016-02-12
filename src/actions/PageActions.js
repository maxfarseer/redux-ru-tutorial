import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS
} from '../constants/Page'

import {
  makeYearPhotos
} from '../utils'

export function getPhotos(year) {

  return (dispatch) => {
    dispatch({
      type: GET_PHOTOS_REQUEST,
      payload: year
    })

    VK.Api.call('photos.getAll',{extended:1, count: 200}, (r) => { // eslint-disable-line no-undef

      let photos = makeYearPhotos(r.response, year)

      dispatch({
        type: GET_PHOTOS_SUCCESS,
        payload: photos
      })

    });

  }
}
