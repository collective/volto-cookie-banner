import React from 'react'
import PropTypes from 'prop-types'
import CookieConsent from 'react-cookie-consent'

const CookieBanner = ({ text, buttonText }) => <CookieConsent buttonText={buttonText ?? 'OK'}>{text}</CookieConsent>

CookieBanner.propTypes = {
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
}

export default CookieBanner
