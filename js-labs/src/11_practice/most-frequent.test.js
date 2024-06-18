import { mostFrequent } from './most-frequent';

describe('mostFrequent(numberList)', () => {
  test('should return undefined when numberList is not array', () => {
    expect(mostFrequent(true)).toBe(undefined);
    expect(mostFrequent()).toBe(undefined);
  });
  test('should return undefined when numberList is array empty', () => {
    expect(mostFrequent([])).toBe(undefined);
  });

  test.each`
    numberList               | result
    ${[1, 2, 3]}             | ${1}
    ${[2, 1, 3]}             | ${2}
    ${[2, 2, 3, 3, 2, 3, 3]} | ${3}
  `('mostFrequent($numberList)', ({ numberList, result }) => {
    expect(mostFrequent(numberList)).toBe(result);
  });
});
