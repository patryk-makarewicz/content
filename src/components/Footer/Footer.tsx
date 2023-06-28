import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from 'components/Button';
import Cookie from 'components/Cookie/Cookie';
import { ReactPortal } from 'components/ReactPortal/ReactPortal';
import { Regulations } from 'components/Regulations';

import { Logo } from 'utils/logo';

import * as Styled from './Footer.styles';

export const Footer = () => {
  const { t } = useTranslation();
  const date = new Date();
  const year = date.getFullYear();

  const [showTerms, setShowTerms] = useState(false);
  const [showPrivacy, setShowPrivacy] = useState(false);
  const onHandleShowTerms = () => {
    setShowTerms(!showTerms);
  };
  const onHandleShowPrivacy = () => {
    setShowPrivacy(!showPrivacy);
  };
  const onHandleCloseBoxRegulation = () => {
    setShowTerms(false);
    setShowPrivacy(false);
  };

  return (
    <Styled.Footer>
      <Cookie onHandleShowTerms={onHandleShowTerms} />
      <ReactPortal className="regulations" id="regulations" tag="section" create={true}>
        {(showTerms || showPrivacy) && (
          <Regulations
            showPrivacy={showPrivacy}
            showTerms={showTerms}
            onHandleCloseBoxRegulation={onHandleCloseBoxRegulation}
          />
        )}
      </ReactPortal>
      <Styled.Wrapper>
        <Styled.LogoWrapper>{Logo()}</Styled.LogoWrapper>
        <Styled.Divider />
        <Styled.Text>{t('footer.copyright', { year: year })}</Styled.Text>
        <Styled.Divider />
        <Button secondary onClick={onHandleShowTerms}>
          {t('footer.terms')}
        </Button>
        <Styled.Divider />
        <Button secondary onClick={onHandleShowPrivacy}>
          {t('footer.privacy')}
        </Button>
      </Styled.Wrapper>
    </Styled.Footer>
  );
};
