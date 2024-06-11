function capitalize(str) {
  if (str === '') return '';

  const firstLetter = str[0].toUpperCase();
  const rest = str.slice(1).toLowerCase();

  return `${firstLetter}${rest}`;
}

console.log(`${(str = '')} ==> ${capitalize(str)}`);
console.log(`${(str = 'a')} ==> ${capitalize(str)}`);
console.log(`${(str = 'ABC')} ==> ${capitalize(str)}`);
console.log(`${(str = 'EasY FronTEND')} ==> ${capitalize(str)}`);
