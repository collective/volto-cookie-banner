import { cookieConsentReducer } from 'volto-cookie-banner/reducers'

export CookieBanner from 'volto-cookie-banner/CookieBannerContainer'
export { GET_COOKIE_CONSENT_INFOS, getCookieConsentInfos } from 'volto-cookie-banner/actions'

export default config => {
  config.addonReducers = {
    ...config.addonReducers,
    cookieConsentInfos: cookieConsentReducer,
  }

  return config
}
