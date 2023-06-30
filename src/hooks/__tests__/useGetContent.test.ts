import { waitFor } from '@testing-library/react';
import { renderHook } from '@testing-library/react-hooks';

import { ContentAPI } from '../../api/';
import { privateError } from '../../setupTests';
import { Wrapper } from '../../tests';
import { useGetContent } from '../useGetContent';

jest.mock('../../api/ContentAPI');

// silence console.error from React
const filteredErrorMessages: string[] = ['Warning: ReactDOM.render is no longer supported in React 18.'];
privateError(filteredErrorMessages);

describe('test useGetContent hook', () => {
  test('should have isLoading and return initial values', () => {
    const { result } = renderHook(() => useGetContent(), {
      wrapper: Wrapper,
    });

    expect(result.current).toEqual(
      expect.objectContaining({
        isLoading: true,
        isError: false,
      })
    );
  });

  test('should have values', async () => {
    const { result } = renderHook(() => useGetContent(), {
      wrapper: Wrapper,
    });

    await waitFor(() => {
      expect(result.current).toEqual(
        expect.objectContaining({
          isLoading: false,
          isError: false,
        })
      );
    });
  });

  test('should have isError', async () => {
    jest.spyOn(ContentAPI, 'getContent').mockImplementation(() => Promise.reject({}));
    jest.spyOn(console, 'error').mockImplementation(() => {});

    const { result } = renderHook(() => useGetContent(), {
      wrapper: Wrapper,
    });

    await waitFor(() => {
      expect(result.current).toEqual(
        expect.objectContaining({
          isLoading: false,
          isError: true,
        })
      );
    });
  });
});
