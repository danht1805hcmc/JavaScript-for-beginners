// 01: Tính S(n) = 1 + 2 + 3 + ... + n
export function calculateS(n) {
  if (n <= 0) return 0;

  return (n * (n + 1)) / 2;
}
