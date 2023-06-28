import { render } from '@testing-library/react';
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import { Landing } from '../Landing';

const renderLanding = () => {
  const { asFragment } = render(
    <Router>
      <Landing />
    </Router>
  );

  return {
    asFragment,
  };
};

describe('test Landing', () => {
  it('should take and matches the snapshot', () => {
    const { asFragment } = renderLanding();
    const firstRender = asFragment();

    expect(firstRender).toMatchSnapshot();
  });
});
