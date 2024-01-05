import { act, renderHook } from '@testing-library/react-native';
import useCount from '../useCount.ts';

it('should increment count', () => {
  const { result, rerender } = renderHook(
    (initialCount) => useCount(initialCount),
    { initialProps: 1 },
  );

  expect(result.current.count).toBe(1);

  act(() => {
    result.current.increment();
  });

  expect(result.current.count).toBe(2);
  rerender(9);
  expect(result.current.count).toBe(9);
});
