import React from 'react'
import PropTypes from 'prop-types'
import CookieConsent from 'react-cookie-consent'

const CookieBanner = ({ text, buttonText, acceptOnScroll = false }) => (
  <CookieConsent buttonText={buttonText ?? 'OK'} acceptOnScroll={acceptOnScroll}>
    {text}
  </CookieConsent>
)

CookieBanner.propTypes = {
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  acceptOnScroll: PropTypes.bool,
}

export default CookieBanner
