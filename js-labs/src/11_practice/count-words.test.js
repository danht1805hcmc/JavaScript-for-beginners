import { countWords } from './count-words';

describe('countWords(str)', () => {
  test('should return 0 when str = ""', () => {
    expect(countWords('')).toBe(0);
  });

  test('should return count when str != empty', () => {
    expect(countWords('easy')).toBe(1);
    expect(countWords('easy frontend')).toBe(2);
    expect(countWords('   easy     frontend     ')).toBe(2);
  });
});
