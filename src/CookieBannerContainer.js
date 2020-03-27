import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import CookieBanner from './CookieBanner'
import { defineMessages } from 'react-intl'
import { getCookieBannerText } from './actions'

const messages = defineMessages({
  cookieBannerButton: {
    id: 'cookie_banner_button',
    defaultMessage: 'Close',
  },
})

const CookieBannerContainer = ({ intl }) => {
  const cookieBannerText = useSelector((state) => state.cookieBannerText.result)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getCookieBannerText())
  }, [dispatch])

  return cookieBannerText?.length > 0 ? (
    <CookieBanner text={cookieBannerText} buttonText={intl.formatMessage(messages.cookieBannerButton)} />
  ) : null
}

export default CookieBannerContainer
