export function calcCartTotal(cartItemList) {
  if (!Array.isArray(cartItemList)) return 0;
  if (cartItemList.length === 0) return 0;

  const isCartItemListValid = cartItemList.every(
    (cartItem) => cartItem.id && cartItem.product && cartItem.quantity,
  );
  if (!isCartItemListValid) return 0;

  let cartTotal = 0;
  cartItemList.forEach((cartItem) => {
    const product = cartItem.product;

    cartTotal = cartTotal + product.price * cartItem.quantity;
  });

  return cartTotal;
}
