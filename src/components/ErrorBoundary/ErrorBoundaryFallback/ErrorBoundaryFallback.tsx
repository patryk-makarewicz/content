import { useTranslation } from 'react-i18next';

import { Button } from 'components/Button';

import * as Styled from './ErrorBoundaryFallback.styles';

type ErrorFallbackProps = {
  resetErrorBoundary: () => void;
};

export const ErrorBoundaryFallback = ({ resetErrorBoundary }: ErrorFallbackProps) => {
  const { t } = useTranslation();

  return (
    <Styled.Wrapper>
      <p>{t('errorBoundary.message')}</p>
      <Button secondary onClick={resetErrorBoundary}>
        {t('errorBoundary.button')}
      </Button>
    </Styled.Wrapper>
  );
};
