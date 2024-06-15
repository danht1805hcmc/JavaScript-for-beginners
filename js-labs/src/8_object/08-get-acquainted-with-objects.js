{
  // Tạo một object student với name và age
  {
    const student = {};
    student.name = 'Easy Frontend';
    student.age = 18;

    console.log(student);
  }

  {
    const student = {
      name: 'Easy Frontend',
      age: 18,
    };

    console.log(student);
  }
}

{
  // Kiểm tra một object có rỗng hay không?
  function isEmpty(obj = {}) {
    return Object.keys(obj).length === 0;
  }
}
