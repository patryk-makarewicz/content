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
  const { asFragment } = render(
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Contact />
      </QueryClientProvider>
    </RecoilRoot>
  );

  return {
    asFragment,
  };
};

describe('test Contact', () => {
  it('should take and matches the snapshot', () => {
    const { asFragment } = renderContact();
    const firstRender = asFragment();

    expect(firstRender).toMatchSnapshot();
  });
});
