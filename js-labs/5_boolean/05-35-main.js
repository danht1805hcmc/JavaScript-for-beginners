// v1
function classifyStudent(mark) {
  let result;

  switch (mark) {
    case 1:
    case 2:
    case 3: {
      result = 'Bad';
      break;
    }

    case 4:
    case 5:
    case 6: {
      result = 'Not Good';
      break;
    }

    case 7:
    case 8: {
      result = 'Good';
      break;
    }

    case 9:
    case 10: {
      result = 'Excellent';
      break;
    }

    default:
      result = 'Invalid mark!';
  }

  return result;
}

// v2
function classifyStudentV2(mark) {
  switch (mark) {
    case 1:
    case 2:
    case 3: {
      return 'Bad';
    }

    case 4:
    case 5:
    case 6: {
      return 'Not Good';
    }

    case 7:
    case 8: {
      return 'Good';
    }

    case 9:
    case 10: {
      return 'Excellent';
    }

    default:
      return 'Invalid mark!';
  }
}

[12, 9, 7, 5, 2, -2].forEach((mark) => {
  console.log(`${mark} -> ${classifyStudentV2(mark)}`);
});
