export function findFirstDuplicate(numberList) {
  if (!Array.isArray(numberList)) return -1;
  if (numberList.length === 0) return -1;

  const tempObj = {};
  for (const number of numberList) {
    if (tempObj[number]) return number;
    tempObj[number] = number;
  }

  return -1;
}
