export function mostFrequent(numberList) {
  if (!Array.isArray(numberList)) return undefined;
  if (numberList.length === 0) return undefined;

  const frequentObj = numberList.reduce((obj, currentNumber) => {
    const nameKey = `0${currentNumber}`;
    obj[nameKey] = (obj[nameKey] || 0) + 1;

    return obj;
  }, {});
  let maxCount = 1;
  let result = numberList[0];

  for (const key in frequentObj) {
    if (maxCount < frequentObj[key]) {
      maxCount = frequentObj[key];
      result = Number.parseInt(key);
    }
  }

  return result;
}

// console.log(mostFrequent(true));
// console.log(mostFrequent());
// console.log(mostFrequent([]));
// console.log(mostFrequent([1, 2, 3]));
// console.log(mostFrequent([2, 1, 3]));
// console.log(mostFrequent([4, 2, 2, 3, 3, 2, 3, 3]));
// console.log(mostFrequent([4, 2, 2, 3, 3, 3, 3, 3]));
// console.log(mostFrequent([4, 3, 3, 2, 2, 2, 2, 2]));
// console.log(mostFrequent([2, 1, 1, 1, 4, 4, 4]));
// console.log(mostFrequent([2, 4, 4, 1, 1, 4, 1]));
