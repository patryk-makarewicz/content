import * as Styled from './PageLayoutFull.styles';

interface PageLayoutProps {
  children: React.ReactNode;
}

export const PageLayoutFull = ({ children }: PageLayoutProps) => {
  return <Styled.PageLayoutFull>{children}</Styled.PageLayoutFull>;
};
