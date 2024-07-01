const PIN_LENGTH = 6;

export function isValidPIN(pin) {
  // The length must be 6
  if (pin.length !== PIN_LENGTH) return false;

  // Pin code contains only numbers
  for (const char of pin) {
    if (isNaN(char)) return false;
  }

  // The pin code cannot be a consecutive increase or decrease sequence
  const increaseNumber = '0123456789',
    decreaseNumber = '9876543210';
  if (increaseNumber.includes(pin) || decreaseNumber.includes(pin))
    return false;

  // Each digit cannot appear more than 2 times
  const digitSet = new Set(pin);
  const hasDigitMoreThanTwice = [...digitSet].some(
    (x) => Array.from(pin).filter((y) => y === x).length > 2,
  );
  if (hasDigitMoreThanTwice) return false;

  return true;
}
