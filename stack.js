class Stack {
  constructor(maxItems = 10) {
    if (!Number.isFinite(maxItems) || maxItems <= 0) {
      throw new Error;
    };

    this.maxItems = maxItems;
    this.size = 0;
    this.stack = null;
  };

  push(elem) {
    if (this.size === this.maxItems) {
      throw new Error();
    };

    const node = {value: elem, previous: this.stack};

    this.stack = node;
    this.size++;
  };

  pop() {
    if (this.size === 0) {
      throw new Error();
    };

    const elem = this.stack.value;
    this.stack = this.stack.previous;
    this.size--;

    return elem
  };

  peek() {
    if (this.size === 0) {
      return null
    };

    return this.stack
  };

  isEmpty() {
    if (this.stack) {
      return false
    };

    return true
  };

  toArray() {
    const arr = [];

    while (this.stack) {
      arr.unshift(this.stack.value);
      this.stack = this.stack.previous;
    };

    return arr
  };

  static fromIterable(iterable) {
    const newStack = new Stack();
    
    for (const index in iterable) {
      const node = {value: iterable[index], previous: newStack.stack};

      newStack.stack = node;
      newStack.size++;
    };

    newStack.maxItems = newStack.size;
    
    return newStack
  };
};

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  };

  append(elem) {
    const node = {value: elem, next: null};

    if (this.tail) {
      this.tail.next = node;
    };

    if (!this.head) {
      this.head = node;
    };

    this.tail = node;
  };

  prepend(elem) {
     const node = {value: elem, next: this.head};

     if (!this.tail) {
      this.tail = node;
     };

     this.head = node;
  };

  find(elem) {
    let currentData = this.head;

    while (currentData) {
      if (currentData.value === elem) {
        return elem
      };

      currentData = currentData.next;
    };

    return null
  };

  toArray() {
    const arr = [];
    let currentData = this.head;

    while (currentData) {
      const elem = currentData.value;

      arr.push(elem);
      currentData = currentData.next;
    };

    return arr
  };

  static fromIterable(iterable) {
    const newLinkedList = new LinkedList();

    for (const index in iterable) {
      const node = {value: iterable[index], next: null};

      if (newLinkedList.tail) {
        newLinkedList.tail.next = node;
      };
  
      if (!newLinkedList.head) {
        newLinkedList.head = node;
      };
  
      newLinkedList.tail = node;
    };

    return newLinkedList
  };
};

module.exports = { Stack };