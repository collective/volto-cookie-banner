import React from 'react';
import PropTypes from 'prop-types';
import CookieConsent from 'react-cookie-consent';
import { flattenHTMLToAppURL } from '@plone/volto/helpers';
import './volto-cookie-banner.css';

const CookieBanner = ({ text, buttonText, acceptOnScroll = false }) => (
  <CookieConsent
    buttonText={buttonText ?? 'OK'}
    acceptOnScroll={acceptOnScroll}
  >
    <div dangerouslySetInnerHTML={{ __html: flattenHTMLToAppURL(text) }} />
  </CookieConsent>
);

CookieBanner.propTypes = {
  text: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  acceptOnScroll: PropTypes.bool,
};

export default CookieBanner;
