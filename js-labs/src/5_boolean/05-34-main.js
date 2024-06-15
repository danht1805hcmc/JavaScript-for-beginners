// v1
function classifyStudent(mark) {
  let result;

  if (mark > 8) result = 'Excellent';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 5) result = 'Not Good';
  else if (mark >= 3) result = 'Bad';
  else result = 'Very Bad';

  return result;
}

// v2
function classifyStudent(mark) {
  let result = 'Very Bad';

  if (mark > 8) result = 'Excellent';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 5) result = 'Not Good';
  else if (mark >= 3) result = 'Bad';

  return result;
}

// v3
function classifyStudent(mark) {
  if (mark < 0 || mark > 10) return '...';

  let result = 'Very Bad';

  if (mark > 8) result = 'Excellent';
  else if (mark >= 7) result = 'Good';
  else if (mark >= 5) result = 'Not Good';
  else if (mark >= 3) result = 'Bad';

  return result;
}

// v4
function classifyStudent(mark) {
  if (mark < 0 || mark > 10) return 'Invalid mark!';

  if (mark > 8) return 'Excellent';
  if (mark >= 7) return 'Good';
  if (mark >= 5) return 'Not Good';
  if (mark >= 3) return 'Bad';

  return 'Very Bad';
}

[12, 9, 7, 5, 2, -2].forEach((mark) => {
  console.log(`${mark} -> ${classifyStudent(mark)}`);
});
