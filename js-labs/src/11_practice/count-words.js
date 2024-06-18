export function countWords(str = '') {
  if (str === '') return 0;

  str = str.trim().split(/\s+/g);
  return str.length;
}
