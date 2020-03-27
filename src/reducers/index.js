/**
 * Cookie banner text reducer.
 * @module reducers/cookieBannerReducer
 */

import { GET_COOKIE_BANNER_TEXT } from '../actions'

const initialState = {
  error: null,
  hasErrror: false,
  result: '',
  loadingResults: false,
}

export const cookieBannerReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_COOKIE_BANNER_TEXT}_PENDING`:
      return {
        ...state,
        loadingResults: true,
      }
    case `${GET_COOKIE_BANNER_TEXT}_SUCCESS`:
      return {
        ...state,
        result: action.result,
        loadingResults: false,
      }
    case `${GET_COOKIE_BANNER_TEXT}_FAIL`:
      return {
        ...state,
        error: action.error,
        hasError: true,
        loadingResults: false,
      }
    default:
      return state
  }
}
