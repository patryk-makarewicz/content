import { render } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { Contact } from '../Contact';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderContact = () => {
  const { asFragment, getByLabelText, getByText, getAllByText } = render(
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Contact />
      </QueryClientProvider>
    </RecoilRoot>
  );

  return {
    asFragment,
    getByLabelText,
    getByText,
    getAllByText,
  };
};

describe('test Contact', () => {
  it('should take and matches the snapshot', () => {
    const { asFragment } = renderContact();
    const firstRender = asFragment();

    expect(firstRender).toMatchSnapshot();
  });

  it('should render the contact form', () => {
    const { getByLabelText, getByText } = renderContact();

    expect(getByLabelText('contact.firstName')).toBeInTheDocument();
    expect(getByLabelText('contact.lastName')).toBeInTheDocument();
    expect(getByLabelText('contact.email')).toBeInTheDocument();
    expect(getByLabelText('contact.phone')).toBeInTheDocument();
    expect(getByLabelText('contact.message')).toBeInTheDocument();
    expect(getByText('contact.submit')).toBeInTheDocument();
  });
});
