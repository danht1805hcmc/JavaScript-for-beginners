function isSymmetricNumberV2(number) {
  if (number < 0 || number >= 1000 || Number.isInteger(number) === false)
    return false;

  if (number < 10 || (number < 100 && number % 11 == 0)) return true;
  if (number >= 100) {
    const a = Math.floor(number / 100),
      b = number % 10;

    return a == b;
  }
  return false;
}

function isSymmetricNumber(number) {
  if (number < 0 || number >= 1000 || Number.isInteger(number) === false)
    return false;

  if (number < 10) return true;

  const extractTheOnes = number % 10;
  const extractTheTens = Math.trunc((number % 100) / 10);

  if (number < 100) return extractTheOnes === extractTheTens;

  const extractTheHundreds = Math.trunc(number / 100);
  return extractTheOnes === extractTheHundreds;
}

console.log(
  'Viết hàm isSymmetricNumber(n) để nhận vào số nguyên dương n có tối đa 3 chữ số và trả về true nếu n là số đối xứng, ngược lại trả về false.',
);
console.log(
  'Giả sử tham số n truyền vào luôn luôn là số có tối đa 3 chữ số. (0 --> 999)',
);

console.log(`${(n = 1)} ==> ${isSymmetricNumber(n)}`);
console.log(`${(n = 22)} ==> ${isSymmetricNumber(n)}`);
console.log(`${(n = 121)} ==> ${isSymmetricNumber(n)}`);
console.log(`${(n = 222)} ==> ${isSymmetricNumber(n)}`);
console.log(`${(n = 353)} ==> ${isSymmetricNumber(n)}`);
console.log(`${(n = 373)} ==> ${isSymmetricNumber(n)}`);

console.log(`${(n = 123)} ==> ${isSymmetricNumber(n)}`);
