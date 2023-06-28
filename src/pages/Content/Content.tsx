import { useTranslation } from 'react-i18next';

import { useGetContent } from 'hooks/useGetContent';

import { Spinner } from 'components/Spinner';
import { SectionTitle } from 'components/Typography/SectionTitle';

import { PageLayout } from 'layout/PageLayout';

import * as Styled from './Content.styles';

export const Content = () => {
  const { t } = useTranslation();

  const { data, isLoading, isError } = useGetContent();

  console.log(data);

  return (
    <Styled.Container>
      <PageLayout>
        <SectionTitle title={t('pages.content.title')} />
        <Styled.Paragraph>{t('pages.content.description')}</Styled.Paragraph>
        <Styled.Box>
          {isLoading && <Spinner />}
          {isError && <Styled.ErrorMessage>{t('messages.fail.generic')}</Styled.ErrorMessage>}
          {!isLoading && !isError && <Styled.Paragraph>{data.elements.heading.value}</Styled.Paragraph>}
        </Styled.Box>
      </PageLayout>
    </Styled.Container>
  );
};
