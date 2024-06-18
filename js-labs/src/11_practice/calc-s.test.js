import { calculateS } from './calc-s';

describe('S(n) = 1 + 2 + 3 + ... + n', () => {
  test('should return 0 when n <= 0', () => {
    expect(calculateS(-1)).toBe(0);
    expect(calculateS(0)).toBe(0);
  });

  test('should return sum when n > 0', () => {
    expect(calculateS(1)).toBe(1);
    expect(calculateS(2)).toBe(3);
    expect(calculateS(3)).toBe(6);
    expect(calculateS(10)).toBe(55);
  });
});
