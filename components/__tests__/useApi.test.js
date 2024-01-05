import { act, renderHook } from '@testing-library/react-native';
import useApi from '../UseApi.ts';

it('api test', () => {
  const { result } = renderHook((initialValue) => useApi(initialValue), {
    initialProps: {
      id: 1,
      title: 'eka',
      userId: 10,
    },
  });

  expect(result.current.result.id).toBe(1);
  expect(result.current.result.title).toBe('eka');

  act(() => {
    result.current.result.id = 2; // update state
  });

  expect(result.current.result.id).toBe(2);
  expect(result.current.result.userId).toBe(10);
});
