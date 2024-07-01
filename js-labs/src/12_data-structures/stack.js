function createStack() {
  const stack = [];

  const getTop = () => stack[getSize() - 1];

  const getSize = () => stack.length;

  const isEmpty = () => getSize() === 0;

  const push = (data) => {
    stack.push(data);
  };

  const pop = () => stack.pop();

  return {
    getTop,
    getSize,
    isEmpty,
    push,
    pop,
  };
}

const stack = createStack();

console.log('getSize: ', stack.getSize());
console.log('isEmpty: ', stack.isEmpty());
console.log('getTop: ', stack.getTop());

console.log('--------------------------------------------');

stack.push(5);
console.log('push(5)');
console.log('getSize: ', stack.getSize());
console.log('isEmpty: ', stack.isEmpty());
console.log('getTop: ', stack.getTop());

console.log('--------------------------------------------');

stack.push(10);
console.log('push(10)');
console.log('getSize: ', stack.getSize());
console.log('isEmpty: ', stack.isEmpty());
console.log('getTop: ', stack.getTop());

console.log('--------------------------------------------');

const ten = stack.pop();
console.log('pop(): ', ten);
console.log('getSize: ', stack.getSize());
console.log('isEmpty: ', stack.isEmpty());
console.log('getTop: ', stack.getTop());

console.log('--------------------------------------------');

const five = stack.pop();
console.log('pop(): ', five);
console.log('getSize: ', stack.getSize());
console.log('isEmpty: ', stack.isEmpty());
console.log('getTop: ', stack.getTop());
