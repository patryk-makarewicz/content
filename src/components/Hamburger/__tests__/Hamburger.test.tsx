import { render } from '@testing-library/react';
import React from 'react';

import { Hamburger, HamburgerProps } from '../Hamburger';

const renderHamburger = ({ showMenu = false }: Partial<HamburgerProps> = {}) => {
  const onOpenCloseMenu = jest.fn();
  const { baseElement } = render(<Hamburger onOpenCloseMenu={onOpenCloseMenu} showMenu={showMenu} />);

  return {
    baseElement,
  };
};

describe('test Hamburger', () => {
  it('should take the snapshot when close', () => {
    const { baseElement } = renderHamburger();

    expect(baseElement).toMatchSnapshot();
  });

  it('should take the snapshot when open', () => {
    const { baseElement } = renderHamburger({ showMenu: true });

    expect(baseElement).toMatchSnapshot();
  });
});
