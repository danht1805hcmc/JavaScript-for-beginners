function getTicketPrice(age) {
  if (age <= 0 || age > 125) return -1;

  if (age < 6 || age >= 70) return 0;
  if (age <= 12) return 20000;
  return 50000;
}

// ########################################

function logger(arrList, fnc) {
  const testCase = [];

  arrList.forEach((arr) => {
    testCase.push({
      age: arr,
      price: fnc(arr),
    });
  });

  console.table(testCase);
}

logger([-1, 126], getTicketPrice);
logger([1, 70, 80, 100, 5], getTicketPrice);
logger([6, 12, 10], getTicketPrice);
logger([13, 40, 69], getTicketPrice);
