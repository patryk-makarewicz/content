import { useTranslation } from 'react-i18next';

import { useGetContent } from 'hooks/useGetContent';

import { Article } from 'components/Article';
import { Spinner } from 'components/Spinner';
import { SectionTitle } from 'components/Typography/SectionTitle';

import { PageLayout } from 'layout/PageLayout';

import * as Styled from './Content.styles';

export const Content = () => {
  const { t } = useTranslation();

  const { article, isLoading, isError } = useGetContent();

  return (
    <Styled.Container>
      <PageLayout>
        <SectionTitle title={t('pages.content.title')} />
        <Styled.Paragraph>{t('pages.content.description')}</Styled.Paragraph>
        <Styled.Box>
          {isLoading && <Spinner />}
          {isError && <Styled.ErrorMessage>{t('messages.fail.generic')}</Styled.ErrorMessage>}
          {!isLoading && !isError && <Article article={article} />}
        </Styled.Box>
      </PageLayout>
    </Styled.Container>
  );
};
