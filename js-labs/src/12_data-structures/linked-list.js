function createLinkedList() {
  let head = null,
    tail = null,
    size = 0;

  function getHead() {
    return head;
  }
  function getTail() {
    return tail;
  }
  function getSize() {
    return size;
  }
  function increaseSize() {
    size += 1;
    return size;
  }
  function decreaseSize() {
    size -= 1;
    return size;
  }

  // ___Export

  const printList = () => {
    if (head == null) return;

    let current = head,
      i = 0;

    while (current != null) {
      console.log(
        `[${i}]: { data: ${current.data}, prev: ${current.prev}, next: ${current.next}}`,
      );

      current = current.next;
      i++;
    }
    console.log({
      Head: head,
      Tail: tail,
      Length: size,
    });
  };
  const searchData = (data) => {
    let current = head,
      i = 0;

    while (current != null) {
      if (current.data === data) {
        return {
          ...current,
        };
      }

      current = current.next;
    }
  };

  const insertHead = (newData) => {
    const newNode = {
      data: newData,
      prev: null,
      next: null,
    };
    increaseSize();

    if (head == null) {
      head = newNode;
      tail = newNode;
      return;
    }

    head.prev = newNode;
    newNode.next = head;
    head = newNode;

    return;
  };
  const insertTail = (newData) => {
    const newNode = {
      data: newData,
      prev: null,
      next: null,
    };
    increaseSize();

    if (head == null) {
      head = newNode;
      tail = newNode;
      return;
    }

    tail.next = newNode;
    newNode.prev = tail;
    tail = newNode;

    return;
  };
  const insertBeforePosition = (newData, position) => {
    if (head == null || position <= 0) {
      insertHead(newData);
      return;
    }

    if (position >= size - 1) {
      insertTail(newData);
      return;
    }

    let current = head,
      i = 0;

    while (current != null) {
      if (i === position) {
        const prev = current.prev;
        const newNode = {
          data: newData,
          prev,
          next: current,
        };

        prev.next = newNode;
        current.prev = newNode;
        increaseSize();

        return prev;
      }

      i++;
      current = current.next;
    }
  };

  const removeHead = () => {
    if (head == null) return;

    head = head.next;
    head.prev = null;
    decreaseSize();
  };
  const removeTail = () => {
    if (head == null) return;

    const prev = tail.prev;

    prev.next = null;
    tail = prev;
    decreaseSize();
  };
  const removeAtPosition = (position) => {
    if (head == null) return;

    if (position === 0) {
      removeHead();
      return;
    }

    if (position === size - 1) {
      removeTail();
      return;
    }

    let current = head,
      i = 0;

    while (current) {
      if (i === position) {
        const prev = current.prev,
          next = current.next;

        prev.next = next;
        next.prev = prev;

        decreaseSize();
      }

      i++;
      current = current.next;
    }
  };

  const findIndexByData = (data) => {
    if (head == null) return -1;

    let current = head,
      i = 0;

    while (current != null) {
      if (current.data === data) return i;

      i++;
      current = current.next;
    }

    return -1;
  };

  return {
    getHead,
    getTail,
    getSize,

    printList,
    searchData,

    insertHead,
    insertTail,
    insertBeforePosition,

    removeHead,
    removeTail,
    removeAtPosition,

    findIndexByData,

    some: (isValidFn) => {
      if (!head) return false;

      let current = head;
      while (current != null) {
        if (isValidFn(current.data)) {
          return true;
        }

        current = current.next;
      }

      return false;
    },
    every: (isValidFn) => {
      if (!head) return false;

      let current = head;
      while (current != null) {
        if (!isValidFn(current.data)) {
          return false;
        }

        current = current.next;
      }

      return true;
    },
  };
}

const numberLinkedList = createLinkedList();

numberLinkedList.insertHead(4);
numberLinkedList.insertHead(3);

numberLinkedList.insertTail(5);

numberLinkedList.insertHead(2);
numberLinkedList.insertHead(1);

numberLinkedList.printList();

console.log('--------------------------------------------------');

numberLinkedList.printList();

console.log('--------------------------------------------------');
