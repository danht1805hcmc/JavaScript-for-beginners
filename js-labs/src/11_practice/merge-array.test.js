import { mergeArray } from './merge-array';

describe('mergeArray(a, b)', () => {
  test('should ', () => {
    expect(mergeArray(1, true)).toEqual([]);

    expect(mergeArray([], [])).toEqual([]);

    expect(mergeArray([], [1, 2, 3])).toEqual([1, 2, 3]);

    expect(mergeArray([1, 2, 3], [2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
});
