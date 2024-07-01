function createQueue() {
  const queue = [];

  function getFront() {
    return queue[0];
  }

  function getBack() {
    return queue[getSize() - 1];
  }

  function getSize() {
    return queue.length;
  }

  function enqueue(data) {
    queue.push(data);
  }

  function dequeue() {
    return queue.shift();
  }

  return {
    getFront,
    getBack,
    getSize,
    enqueue,
    dequeue,
  };
}

const queue = createQueue();

console.log('----------------------------------------------------------');

console.log('getSize: ', queue.getSize());
console.log('getFront: ', queue.getFront());
console.log('getBack: ', queue.getBack());

console.log('----------------------------------------------------------');

queue.enqueue(1);
console.log('enqueue(1)');
console.log('getSize: ', queue.getSize());
console.log('getFront: ', queue.getFront());
console.log('getBack: ', queue.getBack());

console.log('----------------------------------------------------------');

queue.enqueue(2);
console.log('enqueue(2)');
console.log('getSize: ', queue.getSize());
console.log('getFront: ', queue.getFront());
console.log('getBack: ', queue.getBack());

console.log('----------------------------------------------------------');

const one = queue.dequeue();
console.log('dequeue: ', one);
console.log('getSize: ', queue.getSize());
console.log('getFront: ', queue.getFront());
console.log('getBack: ', queue.getBack());

console.log('----------------------------------------------------------');

const two = queue.dequeue();
console.log('dequeue: ', two);
console.log('getSize: ', queue.getSize());
console.log('getFront: ', queue.getFront());
console.log('getBack: ', queue.getBack());
