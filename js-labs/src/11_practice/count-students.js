function countStudents(studentList) {
  if (!Array.isArray(studentList)) return 0;
  if (studentList.length === 0) return 0;
  if (studentList.every((studentObj) => studentList.id && studentList.gender))
    return 0;

  let countMale = 0;
  studentList.forEach((studentObj) => {
    if (studentObj.gender === 'male') countMale++;
  });

  return countMale;
}

// ___ Test Case ___
function Result(params, result) {
  this.run = countStudents(params);
  this.result = result;
}

// _________________
const resultFalse = {};
console.group('Nếu truyền vào không phải là mảng hoặc mảng rỗng thì trả về 0');
resultFalse['true'] = new Result(true, 0);
resultFalse['2'] = new Result(2, 0);
resultFalse['{}'] = new Result({}, 0);
resultFalse['[]'] = new Result([], 0);
resultFalse[
  `[
    { gender: 'female' },
    { id: 2, gender: 'male' },
]`
] = new Result([{ gender: 'female' }, { id: 2, gender: 'female' }], 0);
resultFalse[
  `[
    { id: 1 },
    { id: 2, gender: 'male' },
]`
] = new Result([{ id: 1 }, { id: 2, gender: 'male' }], 0);

console.table(resultFalse);
console.groupEnd();

const resultTrue = {};
console.group(
  'Nhận vào là một mảng student và trả về số lượng student có gender là male.',
);
resultTrue[
  `[
    { id: 1, gender: 'female' },
    { id: 2, gender: 'female' },
]`
] = new Result(
  [
    { id: 1, gender: 'female' },
    { id: 2, gender: 'female' },
  ],
  0,
);
resultTrue[
  `[
    { id: 1, gender: 'male' },
    { id: 2, gender: 'female' },
]`
] = new Result(
  [
    { id: 1, gender: 'male' },
    { id: 2, gender: 'female' },
  ],
  1,
);

console.table(resultTrue);
console.groupEnd();
