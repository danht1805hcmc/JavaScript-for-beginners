export function isValidBracketPairs(str) {
  const OPEN_BRACKETS = ['[', '{', '('],
    CLOSE_BRACKETS = [']', '}', ')'];
  const stack = [];

  const getOpenBracket = (closeBracket) => {
    if (closeBracket === ']') return '[';
    if (closeBracket === '}') return '{';
    if (closeBracket === ')') return '(';

    return undefined;
  };

  for (const char of str) {
    if (OPEN_BRACKETS.includes(char)) {
      stack.push(char);
      continue;
    }

    if (CLOSE_BRACKETS.includes(char)) {
      const openBracket = getOpenBracket(char);

      if (openBracket !== stack[stack.length - 1]) return false;
      stack.pop();
    }
  }

  return stack.length === 0;
}
