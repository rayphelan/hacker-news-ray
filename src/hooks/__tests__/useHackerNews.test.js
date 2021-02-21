import { renderHook } from '@testing-library/react-hooks';
import { useHackerNews } from '../useHackerNews';

describe('Testing custom hooks', () => {

  test('Testing useHackerNews hook', () => {
    
    const result = renderHook(() =>
      useHackerNews()
    );

    console.log('RESULT', result);
  });

});
