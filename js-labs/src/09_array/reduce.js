{
  const numberList = [2, 4, 6];
  let sum = 0;

  for (let i = 0; i < numberList.length; i++) {
    sum += numberList[i];
  }
  console.log(sum);

  console.log(numberList.reduce((sum, number) => sum + number));
}

// Cài đặt reduce
{
  /**
   * Rules:
   * - arr should be array and callbackFn should be a function
   * - arr.length = 0 and initialValue === undefined --> throw error
   * - arr.length = 0 and initialValue !== undefined --> return initialValue
   */

  function reduce(arr, callbackFn, initialValue) {
    if (!Array.isArray(arr)) throw new Error('arr should be array');
    if (typeof callbackFn !== 'function')
      throw new Error('callbackFn should be a function');

    if (arr.length === 0) {
      if (initialValue === undefined)
        throw new Error('Should have initialValue when array is empty');

      return initialValue;
    }

    const hasInitialValue = initialValue !== undefined;
    const startIndex = hasInitialValue ? 0 : 1;
    let accumulator = hasInitialValue ? initialValue : arr[0];

    for (let i = 0; i < arr.length; i++) {
      accumulator = callbackFn(accumulator, arr[i], i);
    }

    return accumulator;
  }

  console.log(reduce([], () => {}, 6));
  console.log(reduce([1, 2, 3], (sum, number) => sum + number, 6));
}
