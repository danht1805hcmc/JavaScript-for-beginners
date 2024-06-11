function parameterize(str = '') {
  const lowerCaseStr = str.toLowerCase();
  return lowerCaseStr.replaceAll(' ', '-');
}

console.log(`${(str = 'Code JS Is Fun')} ==> ${parameterize(str)}`);
