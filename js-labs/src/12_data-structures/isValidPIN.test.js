import { isValidPIN } from './isValidPIN';

describe('isValidPIN(pin)', () => {
  test('should return false when pin length other 6', () => {
    expect(isValidPIN('123')).toBe(false);
    expect(isValidPIN('8547691')).toBe(false);
  });

  test('should return false when digit other than numbers', () => {
    expect(isValidPIN('123a45')).toBe(false);
    expect(isValidPIN('a12345')).toBe(false);
    expect(isValidPIN('495y74')).toBe(false);
  });

  test('should return false when pin is the increasing or decreasing sequence', () => {
    expect(isValidPIN('123456')).toBe(false);
    expect(isValidPIN('543210')).toBe(false);
    expect(isValidPIN('456789')).toBe(false);
  });

  test('should return false when digit appears more than 2 times', () => {
    expect(isValidPIN('111234')).toBe(false);
    expect(isValidPIN('123114')).toBe(false);
    expect(isValidPIN('123411')).toBe(false);

    expect(isValidPIN('222333')).toBe(false);
    expect(isValidPIN('444444')).toBe(false);
    expect(isValidPIN('555566')).toBe(false);
    expect(isValidPIN('777778')).toBe(false);
    expect(isValidPIN('999999')).toBe(false);
  });

  test('should return true when pin is valid', () => {
    expect(isValidPIN('123432')).toBe(true);
    expect(isValidPIN('010256')).toBe(true);
    expect(isValidPIN('235498')).toBe(true);
    expect(isValidPIN('226699')).toBe(true);
    expect(isValidPIN('160927')).toBe(true);
    expect(isValidPIN('157249')).toBe(true);
    expect(isValidPIN('123123')).toBe(true);
  });
});
