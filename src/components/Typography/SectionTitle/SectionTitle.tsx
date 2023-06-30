import * as Styled from './SectionTitle.styles';

type SectionTitleType = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleType) => (
  <Styled.SectionTitle data-testid="section-title">{title}</Styled.SectionTitle>
);
