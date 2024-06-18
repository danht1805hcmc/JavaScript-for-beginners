export function chunkArray(array, size) {
  if (!Array.isArray(array)) return [];
  if (size <= 0 || typeof size !== 'number') return [];

  if (array.length === 0) return [];
  if (array.length / size > 20) throw new Error('Too many chunks');

  const tempArr = [];

  for (let i = 0; i < array.length; i += size) {
    tempArr.push(array.slice(i, i + size));
  }

  return tempArr;
}
