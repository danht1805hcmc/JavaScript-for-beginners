function randomNumber(a, b = undefined) {
  if (b === undefined) {
    const number = a;
    if (number < 0) return -1;

    const random = Math.random() * number;
    const result = Math.round(random);

    return result;
  }

  const numberA = a < b ? a : b;
  const numberB = a < b ? b : a;

  const random = Math.random() * (numberB - numberA);
  return Math.round(random) + numberA;
}

// console.log(`( ${(a = 4)} : ${randomNumber(a)} )`);
// console.log(`( ${(a = 0)} : ${randomNumber(a)} )`);
// console.log(`( ${(a = -1)} : ${randomNumber(a)} )`);
// console.log(`( ${(a = 50)} : ${randomNumber(a)} )`);
// console.log(`( ${(a = 100)} : ${randomNumber(a)} )`);

console.log(`( ${(a = 3)}, ${(b = 5)} => ${randomNumber(a, b)} )`);
console.log(`( ${(a = 5)}, ${(b = 3)} => ${randomNumber(a, b)} )`);
console.log(`( ${(a = 10)}, ${(b = 99)} => ${randomNumber(a, b)} )`);
console.log(`( ${(a = 100)}, ${(b = 999)} => ${randomNumber(a, b)} )`);
console.log(`( ${(a = 10)}, ${(b = 8)} => ${randomNumber(a, b)} )`);
