export function classifyStudent(mark) {
  if (mark < 0 || mark > 10) return 'Invalid mark!';

  if (mark > 8) return 'Excellent';
  if (mark >= 7) return 'Good';
  if (mark >= 4) return 'Not Good';

  return 'Bad';
}
