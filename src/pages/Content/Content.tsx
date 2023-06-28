import { useTranslation } from 'react-i18next';

import { useGetContent } from 'hooks/useGetContent';

import { SectionTitle } from 'components/Typography/SectionTitle';

import { PageLayout } from 'layout/PageLayout';

import * as Styled from './Content.styles';

export const Content = () => {
  const { t } = useTranslation();

  const { data } = useGetContent();

  console.log(data);

  return (
    <Styled.Container>
      <PageLayout>
        <SectionTitle title={t('pages.content.title')} />
        <Styled.Paragraph>{t('pages.content.description')}</Styled.Paragraph>
      </PageLayout>
    </Styled.Container>
  );
};
