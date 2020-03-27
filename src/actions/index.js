/**
 * Cookie banner text actions.
 * @module actions/getCookieBannerText
 */
export const GET_COOKIE_BANNER_TEXT = 'GET_COOKIE_BANNER_TEXT'

/**
 * Get social infos.
 * @function getSocialInfos
 * @returns {Object} Get social infos action.
 */
export function getCookieBannerText() {
  return {
    type: GET_COOKIE_BANNER_TEXT,
    request: {
      op: 'get',
      path: `/@cookie-banner`,
    },
  }
}
