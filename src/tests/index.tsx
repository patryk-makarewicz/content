import { render as rtlRender, RenderOptions } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';

type Props = {
  children: React.ReactNode;
};

const Wrapper = ({ children }: Props) => {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        retry: false,
        cacheTime: Infinity,
      },
      mutations: {
        retry: false,
      },
    },
  });

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </RecoilRoot>
  );
};

const render = (ui: React.ReactElement, options?: RenderOptions) =>
  rtlRender(ui, {
    wrapper: Wrapper,
    ...options,
  });

export { render, Wrapper };
