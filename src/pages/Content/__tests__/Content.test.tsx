import { render } from '@testing-library/react';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

import { Content } from '../Content';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const renderContent = () => {
  const { asFragment, getByTestId } = render(
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <Content />
      </QueryClientProvider>
    </RecoilRoot>
  );

  return {
    asFragment,
    getByTestId,
  };
};

describe('test Content', () => {
  it('should take and matches the snapshot', () => {
    const { asFragment } = renderContent();
    const firstRender = asFragment();

    expect(firstRender).toMatchSnapshot();
  });

  it('should render title and spinner onLoad data', () => {
    const { getByTestId } = renderContent();

    const title = getByTestId('section-title');
    expect(title).toBeInTheDocument();

    const spinner = getByTestId('spinner');
    expect(spinner).toBeInTheDocument();
  });
});
