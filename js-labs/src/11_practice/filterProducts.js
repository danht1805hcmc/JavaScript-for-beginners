export function filterProducts(productList) {
  if (!Array.isArray(productList)) return [];
  if (productList.length === 0) return [];

  const VALID_PRICE = 100000;

  return productList.filter((product) => product.price > VALID_PRICE);
}
