function extractNumbers(number) {
  if (number.toString().length !== 3) return -1;

  const extractTheOnes = number % 10;
  const extractTheTens = Math.trunc((number % 100) / 10);
  const extractTheHundreds = Math.trunc(number / 100);

  return `${extractTheHundreds} ${extractTheTens} ${extractTheOnes}`;
}

console.log(`${(n = 123)} => ${extractNumbers(n)}`);
console.log(`${(n = 523)} => ${extractNumbers(n)}`);
