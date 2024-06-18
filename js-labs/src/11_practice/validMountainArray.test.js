import { validMountainArray } from './validMountainArray';

describe('validMountainArray(numberList)', () => {
  test('should ', () => {
    expect(validMountainArray([1])).toBeFalsy();
    expect(validMountainArray(1)).toBeFalsy();

    expect(validMountainArray([3, 5, 5])).toBeFalsy();
    expect(validMountainArray([[0, 1, 2]])).toBeFalsy();

    expect(validMountainArray([0, 3, 2, 1])).toBeTruthy();
  });
});
