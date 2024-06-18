import { findFirstDuplicate } from './findFirstDuplicate';

describe('findFirstDuplicate(numberList)', () => {
  test('should ', () => {
    expect(findFirstDuplicate({})).toBe(-1);
    expect(findFirstDuplicate([])).toBe(-1);
  });

  test('should ', () => {
    expect(findFirstDuplicate([1, 2, 3])).toBe(-1);
    expect(findFirstDuplicate([1, 1, 3])).toBe(1);
    expect(findFirstDuplicate([1, 2, 2, 1])).toBe(2);
  });
});
