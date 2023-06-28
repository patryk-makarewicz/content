import * as Styled from './SectionTitle.styles';

type SectionTitleType = {
  title: string;
};

export const SectionTitle = ({ title }: SectionTitleType) => <Styled.SectionTitle>{title}</Styled.SectionTitle>;
