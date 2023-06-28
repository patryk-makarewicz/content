import { useTranslation } from 'react-i18next';

import * as Styled from './Landing.styles';

export const Landing = () => {
  const { t } = useTranslation();

  return (
    <Styled.Container>
      <Styled.Box>
        <h1>{t('appName')}</h1>
        <Styled.Link to="/content">{t('pages.landing.button')}</Styled.Link>
      </Styled.Box>
    </Styled.Container>
  );
};
