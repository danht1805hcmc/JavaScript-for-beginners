function truncate(text = '', maxLength) {
  if (text.length <= maxLength) return text;

  const shortStr = text.slice(0, maxLength - 1);
  return `${shortStr}\u2026`;
}

console.log(`${(str = 'Easy Frontend')} ==> ${truncate(str, 4)}`);
