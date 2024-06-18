export function mergeArray(a, b = []) {
  if (!Array.isArray(a) || !Array.isArray(b)) return [];

  const newArray = [...a];

  b.forEach((e) => {
    if (!newArray.some((v) => v === e)) newArray.push(e);
  });

  return newArray;
}

// console.log(mergeArray(1, true));
// console.log(mergeArray([], []));
// console.log(mergeArray([], [1, 2, 3]));
// console.log(mergeArray([1, 2, 3], [2, 3, 4]));
