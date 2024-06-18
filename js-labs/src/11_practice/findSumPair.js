export function findSumPair(numberList, targetSum) {
  if (!Array.isArray(numberList)) return [];
  if (numberList.length === 0) return [];

  const result = [];

  for (let i = 0; i < numberList.length - 1; i++) {
    for (let k = i + 1; k < numberList.length; k++) {
      if (numberList[i] + numberList[k] === targetSum) {
        result.push(numberList[i], numberList[k]);
      }
    }
  }

  return result.sort((a, b) => a - b);
}
