import { render } from '@testing-library/react';
import React from 'react';

import { ErrorTile } from '../ErrorTile';

const renderErrorTile = () => {
  const { getByText, getByTestId } = render(<ErrorTile />);

  return {
    getByText,
    getByTestId,
  };
};

describe('test ErrorTile', () => {
  it('should render error message with icon', () => {
    const { getByText, getByTestId } = renderErrorTile();

    const ErrorMessage = getByText('messages.fail.generic');
    expect(ErrorMessage).toBeInTheDocument();

    const ErrorIcon = getByTestId('error-icon');
    expect(ErrorIcon).toBeInTheDocument();
  });
});
