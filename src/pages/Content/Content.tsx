import { useTranslation, Trans } from 'react-i18next';
import { colors } from 'styles';

import { useGetContent } from 'hooks/useGetContent';

import { Article } from 'components/Article';
import { ErrorTile } from 'components/ErrorTile';
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
        <Styled.Paragraph>
          <Trans
            i18nKey="pages.content.description"
            components={{ span: <span style={{ fontWeight: 600, color: `${colors.primary}` }} /> }}
          />
        </Styled.Paragraph>
        <Styled.Box>
          {isLoading && <Spinner />}
          {isError && <ErrorTile />}
          {!isLoading && !isError && <Article article={article} />}
        </Styled.Box>
      </PageLayout>
    </Styled.Container>
  );
};
