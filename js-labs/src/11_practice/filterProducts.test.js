import { filterProducts } from './filterProducts';

describe('filterProducts(productList)', () => {
  test('should return []', () => {
    expect(filterProducts({})).toEqual([]);
    expect(filterProducts([])).toEqual([]);
  });

  test('should return [] because there is no product having price > 100000', () => {
    const productList = [
      { id: 1, price: 10000 },
      { id: 2, price: 50000 },
      { id: 3, price: 70000 },
    ];
    expect(filterProducts(productList)).toEqual([]);
  });

  test('should return a list of products having price > 100000', () => {
    const productList = [
      { id: 1, price: 100000 },
      { id: 2, price: 150000 },
      { id: 3, price: 270000 },
    ];
    expect(filterProducts(productList)).toEqual([
      { id: 2, price: 150000 },
      { id: 3, price: 270000 },
    ]);
  });
});
