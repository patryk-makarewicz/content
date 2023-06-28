import { render } from '@testing-library/react';
import React from 'react';

import { ErrorBoundary } from '../ErrorBoundary';

const renderErrorBoundary = () => {
  const { getByText } = render(
    <ErrorBoundary>
      <div>Child component</div>
    </ErrorBoundary>
  );

  return {
    getByText,
  };
};

describe('test ErrorBoundary', () => {
  it('should render children', () => {
    const { getByText } = renderErrorBoundary();

    const childrenText = getByText('Child component');
    expect(childrenText).toBeInTheDocument();
  });
});
