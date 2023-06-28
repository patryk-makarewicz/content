import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { RecoilRoot } from 'recoil';

import { Footer } from '../Footer';

const renderFooter = () => {
  const { getByText } = render(
    <RecoilRoot>
      <Footer />
    </RecoilRoot>
  );

  return {
    getByText,
  };
};

describe('test Footer', () => {
  it('should render correctly', async () => {
    const { getByText } = renderFooter();

    const copyright = getByText('footer.copyright');
    expect(copyright).toBeInTheDocument();

    const buttonTerms = getByText('footer.terms');
    expect(buttonTerms).toBeInTheDocument();
    fireEvent.click(buttonTerms);

    const buttonPrivacy = getByText('footer.privacy');
    expect(buttonPrivacy).toBeInTheDocument();
    fireEvent.click(buttonPrivacy);
  });
});
