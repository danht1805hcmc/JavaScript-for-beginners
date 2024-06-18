import { chunkArray } from './chunkArray';

describe('chunkArray(array, size)', () => {
  test('should return [] when param is not valid', () => {
    expect(chunkArray({})).toEqual([]);
    expect(chunkArray([])).toEqual([]);
    expect(chunkArray([1, 2, 3], -1)).toEqual([]);
    expect(chunkArray([1, 2, 3], 0)).toEqual([]);
    expect(chunkArray([1, 2, 3], {})).toEqual([]);
  });

  test('should ', () => {
    expect(chunkArray([1, 2, 3], 2)).toEqual([[1, 2], [3]]);
    expect(chunkArray([1, 2, 3], 1)).toEqual([[1], [2], [3]]);
    expect(chunkArray([1, 2, 3], 3)).toEqual([[1, 2, 3]]);
  });

  test('should return error', () => {
    expect(() => {
      chunkArray(
        [
          1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
          21,
        ],
        1,
      );
    }).toThrow('Too many chunks');
  });
});
