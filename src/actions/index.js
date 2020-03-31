/**
 * Cookie banner text actions.
 * @module actions/getCookieBannerText
 */
export const GET_COOKIE_CONSENT_INFOS = 'GET_COOKIE_CONSENT_INFOS'

/**
 * Get cookie consent infos.
 * @function getCookieConsentInfos
 * @returns {Object} Get cookie consent infos action.
 */
export function getCookieConsentInfos() {
  return {
    type: GET_COOKIE_CONSENT_INFOS,
    request: {
      op: 'get',
      path: `/@cookieconsent-infos`,
    },
  }
}
