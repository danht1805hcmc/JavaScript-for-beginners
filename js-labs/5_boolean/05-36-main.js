/**
 * A list of error codes from server
 * E01: Invalid username or password
 * E02: Too many attempts
 * E03: Missing data
 * Other code: Something went wrong
 */

function getErrorMessage(errorCode) {
  let message = '';

  switch (errorCode) {
    case 'E01': {
      message = 'Invalid username or password';
      break;
    }

    case 'E02': {
      message = 'Too many attempts';
      break;
    }

    case 'E03': {
      message = 'Missing data';
      break;
    }

    default:
      message = 'Something went wrong';
  }

  return message;
}

function getErrorMessageV2(errorCode) {
  const errorMap = {
    E01: 'Invalid username or password',
    E02: 'Too many attempts',
    E03: 'Missing data',
  };

  return errorMap[errorCode] || 'Something went wrong';
}

['E01', 'E02', 'E03', 'abc'].forEach((errorCode) =>
  console.log(errorCode, getErrorMessageV2(errorCode)),
);
