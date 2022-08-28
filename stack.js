class Stack {
  constructor(maxItems = 10) {
    if (!Number.isFinite(maxItems) || maxItems <= 0) {
      throw new Error;
    };

    this.maxItems = maxItems;
    this.stack = [];
  };

  push(elem) {
    if (this.stack.length === this.maxItems) {
      throw new Error();
    };

    this.stack[this.stack.length] = elem;
  };

  pop() {
    if (this.stack.length === 0) {
      throw new Error();
    };

    const elem = this.stack[this.stack.length - 1];

    delete this.stack[this.stack.length - 1];
    this.stack.length = this.stack.length - 1;

    return elem
  };

  peek() {
    if (this.stack.length === 0) {
      return null
    };

    return this.stack[this.stack.length - 1]
  };

  isEmpty() {
    if (this.stack.length === 0) {
      return true
    };

    return false
  };

  toArray() {
    const stackCopy = [...this.stack];

    return stackCopy
  };

  static fromIterable(iterable) {
    if (!(Symbol.iterator in Object(iterable))) {
      throw new Error()
    };

    const newStack = new Stack();

    for (const index in iterable) {
      newStack.stack[newStack.stack.length] = iterable[index];
    };
    newStack.maxItems = newStack.stack.length;

    return newStack
  };
};

class LinkedList {
  constructor() {
    this.list = [];
  };

  append(elem) {
    this.list[this.list.length] = elem;
  };

  prepend(elem) {
    for (let i = this.list.length; i < 0; i--) {
      this.list[i + 1] = this.list[i];
    };
    this.list[0] = elem;
  };

  find(elem) {
    if (this.list.includes(elem)) {
      return elem
    };

    return null
  };

  toArray() {
    const newList = [...this.list];

    return newList
  };

  static fromIterable(iterable) {
    if (!(Symbol.iterator in Object(iterable))) {
      throw new Error()
    };

    const newList = new LinkedList();

    for (const index in iterable) {
      newList.list[newList.list.length] = iterable[index];
    };

    return newList
  };
};

module.exports = { Stack };