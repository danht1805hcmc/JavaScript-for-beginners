import { printLog } from '../printConsole.js';

/**
 * Performs a binary search on a sorted array to find the target value.
 *
 * @param {number[]} sortedArray - The sorted array to search in.
 * @param {number} target - The value to search for.
 * @returns {number} The index of the target value in the array, -1 if not found.
 */
function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (sortedArray[mid] === target) {
      return mid;
    }

    if (target < sortedArray[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return -1;
}

let arr = [],
  target = 0;

printLog(
  true,
  (arr = [1, 2, 3, 4, 5]),
  `Search(${target}): ${binarySearch(arr, target)}`,
);
printLog(
  true,
  (arr = [1, 2, 3, 4, 5]),
  `Search(${(target = 1)}): ${binarySearch(arr, target)}`,
);
