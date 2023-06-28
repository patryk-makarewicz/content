import { useState } from 'react';
import CookieConsent from 'react-cookie-consent';
import { useTranslation } from 'react-i18next';
import { colors } from 'styles';

import * as Styled from './Cookie.styles';

type CookieType = {
  onHandleShowTerms: () => void;
};

const Cookie = ({ onHandleShowTerms }: CookieType) => {
  const { t } = useTranslation();
  const [showCookieBar, setShowCookieBar] = useState(true);

  return (
    <>
      {showCookieBar && (
        <CookieConsent
          data-testid="cookie"
          location="bottom"
          buttonText={t('cookie.button')}
          cookieName="Cookie"
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'var(--text-color)',
            background: 'var(--background-color)',
            textAlign: 'center',
            paddingRight: '40px',
            paddingLeft: '20px',
            fontSize: '16px',
            borderTop: `1px solid ${colors.primary}`,
          }}
          buttonStyle={{
            background: `${colors.primary}`,
            color: 'white',
            fontSize: '16px',
            borderRadius: '2px',
            fontFamily: 'Archivo',
            fontWeight: 600,
            padding: '8px 16px',
          }}>
          {t('cookie.text')}
          <Styled.ButtonTerm type="button" onClick={() => onHandleShowTerms()} data-testid="button-terms">
            {t('cookie.textButton')}
          </Styled.ButtonTerm>
          <Styled.ButtonClose type="button" onClick={() => setShowCookieBar(!showCookieBar)} data-testid="button-close">
            x
          </Styled.ButtonClose>
        </CookieConsent>
      )}
    </>
  );
};

export default Cookie;
