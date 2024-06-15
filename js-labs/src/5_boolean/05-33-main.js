// Viết hàm kiểm tra số dương chẵn
// Nếu đúng => true. Ngược lại => false

// v1
function isPositiveEvenNumber(number) {
  let isValid; // undefined

  // Checking ...
  if (number > 0 && number % 2 === 0) {
    isValid = true;
  } else {
    isValid = false;
  }

  return isValid;
}

// v2
function isPositiveEvenNumber(number) {
  let isValid = false;

  if (number > 0 && number % 2 === 0) {
    isValid = true;
  }

  return isValid;
}

// v3
function isPositiveEvenNumber(number) {
  if (number > 0 && number % 2 === 0) {
    return true;
  }

  return false;
}

// v4
function isPositiveEvenNumber(number) {
  return number > 0 && number % 2 === 0;
}

console.log(`4 : ${isPositiveEvenNumber(4)}`);
console.log(`5 : ${isPositiveEvenNumber(5)}`);
