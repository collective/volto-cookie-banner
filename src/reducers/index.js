/**
 * Cookie banner text reducer.
 * @module reducers/cookieBannerReducer
 */

import { GET_COOKIE_CONSENT_INFOS } from '../actions'

const initialState = {
  error: null,
  hasErrror: false,
  result: '',
  loadingResults: false,
}

export const cookieConsentReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case `${GET_COOKIE_CONSENT_INFOS}_PENDING`:
      return {
        ...state,
        loadingResults: true,
      }
    case `${GET_COOKIE_CONSENT_INFOS}_SUCCESS`:
      return {
        ...state,
        result: action.result,
        loadingResults: false,
      }
    case `${GET_COOKIE_CONSENT_INFOS}_FAIL`:
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
