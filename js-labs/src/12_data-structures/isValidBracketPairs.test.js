import { isValidBracketPairs } from './isValidBracketPairs';

describe('isValidBracketPairs(str)', () => {
  test('should return false when ...', () => {
    expect(isValidBracketPairs('(a + b) * c[1')).toBe(false);
  });

  test('should return true when ...', () => {
    ['', '[](){}', '(a + b) * (a - b) + c[1]', '(a + b) * (c + d)'].forEach(
      (str) => {
        expect(isValidBracketPairs(str)).toBe(true);
      },
    );
  });
});
