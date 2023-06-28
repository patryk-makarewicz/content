import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import { ErrorBoundaryFallback } from '../ErrorBoundaryFallback';

const renderErrorBoundaryFallback = () => {
  const resetErrorBoundary = jest.fn();
  const { getByText } = render(<ErrorBoundaryFallback resetErrorBoundary={resetErrorBoundary} />);

  return {
    getByText,
    resetErrorBoundary,
  };
};

describe('test ErrorBoundaryFallback', () => {
  it('should render message and call after click button reset', () => {
    const { getByText, resetErrorBoundary } = renderErrorBoundaryFallback();

    const message = getByText('errorBoundary.message');
    expect(message).toBeInTheDocument();

    const buttonReset = getByText('errorBoundary.button');
    expect(buttonReset).toBeInTheDocument();
    fireEvent.click(buttonReset);
    expect(resetErrorBoundary).toHaveBeenCalledTimes(1);
  });
});
