import { useTranslation } from 'react-i18next';

import * as Styled from './Navigation.styles';

type NavigationProps = {
  onClick?: () => void;
  mobile?: boolean;
};

export const Navigation = ({ onClick, mobile = false }: NavigationProps) => {
  const { t } = useTranslation();

  const paths = [
    {
      to: '/',
      title: t('navigation.home'),
    },
    {
      to: '/content',
      title: t('navigation.content'),
    },
    {
      to: '/contact',
      title: t('navigation.contact'),
    },
  ];

  return (
    <nav>
      <Styled.List mobile={mobile}>
        {paths.map((path) => (
          <Styled.Item mobile={mobile} key={path.title} data-testid={`nav-${path.title}`}>
            <Styled.Link to={path.to} onClick={onClick}>
              {path.title}
            </Styled.Link>
          </Styled.Item>
        ))}
      </Styled.List>
    </nav>
  );
};
