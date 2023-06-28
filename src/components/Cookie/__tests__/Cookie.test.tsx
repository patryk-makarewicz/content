import { fireEvent, render } from '@testing-library/react';
import React from 'react';

import Cookie from '../Cookie';

const renderCookie = () => {
  const onHandleShowTerms = jest.fn();

  const { getByText, getByTestId } = render(<Cookie onHandleShowTerms={onHandleShowTerms} />);

  return {
    getByText,
    getByTestId,
    onHandleShowTerms,
  };
};

describe('test Cookie', () => {
  it('should render cookie and close it after click button x', () => {
    const { getByTestId } = renderCookie();

    const buttonClose = getByTestId('button-close');
    expect(buttonClose).toBeInTheDocument();

    fireEvent.click(buttonClose);
  });

  it('should render terms after click button', () => {
    const { getByTestId, onHandleShowTerms } = renderCookie();

    const buttonTerms = getByTestId('button-terms');
    expect(buttonTerms).toBeInTheDocument();

    fireEvent.click(buttonTerms);

    expect(onHandleShowTerms).toHaveBeenCalledTimes(1);
  });
});
