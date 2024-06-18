import { calcCartTotal } from './calcCartTotal';

describe('calcCartTotal(cartItemList)', () => {
  test('cartItemList có thể không phải là mảng', () => {
    expect(calcCartTotal()).toBe(0);
    expect(calcCartTotal('')).toBe(0);
    expect(calcCartTotal({})).toBe(0);
    expect(calcCartTotal(true)).toBe(0);
  });

  test('Mỗi cartItem sẽ có 3 keys: id, product và quantity', () => {
    expect(
      calcCartTotal([
        { id: 1, product: { id: 1, price: 100000 } },
        { id: 2, product: { id: 2, price: 50000 }, quantity: 2 },
      ]),
    ).toBe(0);
  });

  test('Trả về tổng tiền của giỏ hàng đó', () => {
    expect(calcCartTotal([])).toBe(0);
    expect(
      calcCartTotal([
        { id: 1, product: { id: 1, price: 100000 }, quantity: 4 },
        { id: 2, product: { id: 2, price: 50000 }, quantity: 2 },
      ]),
    ).toBe(500000);
  });
});
