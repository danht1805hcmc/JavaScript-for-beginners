export function validMountainArray(numberList) {
  if (!Array.isArray(numberList)) return false;
  if (numberList.numberList < 3) return false;

  const maxNumber = Math.max(...numberList);
  const idxMax = numberList.indexOf(maxNumber);

  if (!(0 < idxMax && idxMax < numberList.length - 1)) return false;

  let isValid = true;
  numberList.forEach((number, idx) => {
    if (idx < idxMax && number > numberList[idx + 1]) {
      isValid = false;
    }

    if (idx > idxMax && number < numberList[idx + 1]) {
      isValid = false;
    }

    if (idx === numberList.length - 1 && maxNumber === number) {
      isValid = false;
    }
  });

  return isValid;
}

// console.log(validMountainArray([0, 1, 2]));
// console.log(validMountainArray([3, 5, 5]));
// console.log(validMountainArray([0, 3, 2, 1]));
// console.log(validMountainArray([0, 2, 1, 3, 2, 1]));
// console.log(validMountainArray([0, 1, 2, 3, 2, 1]));
// console.log(validMountainArray([0, 1, 2, 3, 1, 2]));
