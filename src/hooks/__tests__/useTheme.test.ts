import { renderHook, act } from '@testing-library/react-hooks';

import { privateError } from '../../setupTests';
import { Wrapper } from '../../tests';
import { useTheme } from '../useTheme';

// silence console.error from React
const filteredErrorMessages: string[] = ['Warning: ReactDOM.render is no longer supported in React 18.'];
privateError(filteredErrorMessages);

describe('test useTheme', () => {
  it('should update theme when onChangeTheme is called', () => {
    const { result } = renderHook(() => useTheme(), {
      wrapper: Wrapper,
    });

    act(() => {
      result.current.onChangeTheme();
    });
    expect(result.current.theme).toBe(true);

    act(() => {
      result.current.onChangeTheme();
    });
    expect(result.current.theme).toBe(false);
  });
});
