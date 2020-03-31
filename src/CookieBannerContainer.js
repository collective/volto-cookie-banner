import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CookieBanner from './CookieBanner'
import { useIntl, defineMessages } from 'react-intl'
import { getCookieConsentInfos } from './actions'

const messages = defineMessages({
  cookieBannerButton: {
    id: 'cookie_banner_button',
    defaultMessage: 'Close',
  },
})

const CookieBannerContainer = () => {
  const intl = useIntl()
  const cookieConsentInfos = useSelector(state => state.cookieConsentInfos.result)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCookieConsentInfos())
  }, [dispatch])

  return cookieConsentInfos?.cookie_consent_configuration?.[intl.locale]?.length > 0 ? (
    <CookieBanner
      text={cookieConsentInfos.cookie_consent_configuration[intl.locale]}
      buttonText={intl.formatMessage(messages.cookieBannerButton)}
    />
  ) : null
}

export default CookieBannerContainer
