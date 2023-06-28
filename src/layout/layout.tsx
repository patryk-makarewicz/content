import { Outlet } from 'react-router-dom';

import { Footer } from 'components/Footer';

import { Header } from '../components/Header/Header';
import * as Styled from './layout.styles';

export const Layout = () => {
  return (
    <>
      <Styled.Main>
        <Header />
        <Outlet />
        <Footer />
      </Styled.Main>
    </>
  );
};
