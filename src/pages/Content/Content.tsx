import { useTranslation } from 'react-i18next';

import { SectionTitle } from 'components/Typography/SectionTitle';

import { PageLayout } from 'layout/PageLayout';

import * as Styled from './Content.styles';

export const Content = () => {
  const { t } = useTranslation();
  return (
    <Styled.Container>
      <PageLayout>
        <SectionTitle title={t('pages.content.title')} />
        <Styled.Paragraph>{t('pages.content.description')}</Styled.Paragraph>
      </PageLayout>
    </Styled.Container>
  );
};
