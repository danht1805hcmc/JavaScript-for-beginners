function getMaxDigit(number) {
  if (number < 0 || number >= 1000) return -1;
  if (number < 10) return number;

  const extractTheOnes = number % 10;
  const extractTheTens = Math.trunc((number % 100) / 10);
  let max = extractTheOnes < extractTheTens ? extractTheTens : extractTheOnes;

  if (number < 100) return max;

  const extractTheHundreds = Math.trunc(number / 100);
  return max > extractTheHundreds ? max : extractTheHundreds;
}

console.log(
  'Viết hàm function getMaxDigit(n) {} để tìm ra chữ số lớn nhất của một số nguyên dương n (0 <= n < 1000)',
);
console.log(`getMaxDigit(${(n = -10)}) ==> ${getMaxDigit(n)}`);
console.log(`getMaxDigit(${(n = 1000)}) ==> ${getMaxDigit(n)}`);
console.log(`getMaxDigit(${(n = 0)}) ==> ${getMaxDigit(n)}`);
console.log(`getMaxDigit(${(n = 1)}) ==> ${getMaxDigit(n)}`);
console.log(`getMaxDigit(${(n = 12)}) ==> ${getMaxDigit(n)}`);
console.log(`getMaxDigit(${(n = 123)}) ==> ${getMaxDigit(n)}`);
console.log(`getMaxDigit(${(n = 921)}) ==> ${getMaxDigit(n)}`);
