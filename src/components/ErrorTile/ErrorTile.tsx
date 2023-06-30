import { useTranslation } from 'react-i18next';

import { default as ErrorLogo } from '../../assets/error.svg';
import * as Styled from './ErrorTile.styles';

export const ErrorTile = () => {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <Styled.Icon src={ErrorLogo} alt="Error logo" />
      <Styled.ErrorMessage>{t('messages.fail.generic')}</Styled.ErrorMessage>
    </Styled.Wrapper>
  );
};
