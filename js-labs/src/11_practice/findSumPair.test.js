import { findSumPair } from './findSumPair';

describe('findSumPair(numberList, targetSum)', () => {
  test('should ', () => {
    expect(findSumPair({})).toEqual([]);
    expect(findSumPair([], 10)).toEqual([]);
  });

  test('should ', () => {
    expect(findSumPair([1, 2], 2)).toEqual([]);
    expect(findSumPair([3, 2, 1], 5)).toEqual([2, 3]);
    expect(findSumPair([3, 3, 1, 2], 6)).toEqual([3, 3]);
  });
});
