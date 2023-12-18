// components/CookieConsent.jsx
import React from 'react'
import CookieConsent from 'react-cookie-consent'

const CookieConsentComponent = () => {
    return (
        <CookieConsent
            location="bottom"
            buttonText="Accept"
            cookieName="myCookieConsent"
            style={{ background: '#2B373B' }}
            buttonStyle={{ color: '#4e503b', fontSize: '13px' }}
            expires={150}
        >
            This website uses cookies to enhance the user experience.
        </CookieConsent>
    )
}

export default CookieConsentComponent
