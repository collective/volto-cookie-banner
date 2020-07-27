import { cookieConsentReducer } from './reducers'

export { default as CookieBanner } from './CookieBannerContainer'
export { GET_COOKIE_CONSENT_INFOS, getCookieConsentInfos } from './actions'

export default config => {
  config.addonReducers = {
    ...config.addonReducers,
    cookieConsentInfos: cookieConsentReducer,
  }

  return config
}
