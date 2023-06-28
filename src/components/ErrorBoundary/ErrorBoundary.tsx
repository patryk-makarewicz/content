import { ReactNode } from 'react';
import { ErrorBoundary as ReactErrorBoundary } from 'react-error-boundary';

import { ErrorBoundaryFallback } from './ErrorBoundaryFallback';

type Props = {
  children: ReactNode;
};

export const ErrorBoundary = ({ children }: Props) => (
  <ReactErrorBoundary
    fallbackRender={({ resetErrorBoundary }) => <ErrorBoundaryFallback resetErrorBoundary={resetErrorBoundary} />}>
    {children}
  </ReactErrorBoundary>
);
