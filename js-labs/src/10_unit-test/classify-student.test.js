import { classifyStudent } from './classify-student';

describe('classifyStudent', () => {
  test('should return Invalid mark! when n < 0', () => {
    const value = classifyStudent(-1);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Invalid mark! when n > 10', () => {
    const value = classifyStudent(11);
    expect(value).toBe('Invalid mark!');
  });

  test('should return Excellent when n in [9 - 10]', () => {
    [9, 10].forEach((mark) => {
      expect(classifyStudent(mark)).toBe('Excellent');
    });
  });

  test('should return Good when n in [7 - 8]', () => {
    [7, 8].forEach((mark) => {
      expect(classifyStudent(mark)).toBe('Good');
    });
  });

  test('should return Not Good when n in [4 - 6]', () => {
    [4, 5, 6].forEach((mark) => {
      expect(classifyStudent(mark)).toBe('Not Good');
    });
  });

  test('should return Bad when n in [0 - 3]', () => {
    [0, 1, 2, 3].forEach((mark) => {
      expect(classifyStudent(mark)).toBe('Bad');
    });
  });
});
