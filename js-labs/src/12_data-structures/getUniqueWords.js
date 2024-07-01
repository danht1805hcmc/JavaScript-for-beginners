function getUniqueWords(sentence) {
  if (sentence === '') return [];

  const uniqueWordsSet = new Set(sentence.trim().split(' '));

  return [...uniqueWordsSet];
}

{
  const sentence = '';

  console.group(sentence);
  console.log(getUniqueWords(sentence));
  console.groupEnd();
}

{
  const sentence = 'frontend is easy but easy to die';

  console.group(sentence);
  console.log(getUniqueWords(sentence));
  console.groupEnd();
}

{
  const sentence = ' frontend';

  console.group(sentence);
  console.log(getUniqueWords(sentence));
  console.groupEnd();
}
