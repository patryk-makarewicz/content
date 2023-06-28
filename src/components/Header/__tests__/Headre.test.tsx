import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RecoilRoot } from 'recoil';

import { Header } from '../Header';

const renderHeader = () => {
  const { baseElement, getAllByText } = render(
    <Router>
      <RecoilRoot>
        <Header />
      </RecoilRoot>
    </Router>
  );

  return {
    baseElement,
    getAllByText,
  };
};

describe('test Header', () => {
  it('should take the snapshot', () => {
    const { baseElement } = renderHeader();

    expect(baseElement).toMatchSnapshot();
  });

  it('should render navigation', () => {
    const { getAllByText } = renderHeader();

    // take from desktop navigation
    const navHome = getAllByText('navigation.home')[0];
    expect(navHome).toBeInTheDocument();
  });
});
