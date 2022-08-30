class Stack {
  #order;
  #stack;

  constructor(maxItems = 10) {
    if (!Number.isFinite(maxItems) || maxItems <= 0) {
      throw new Error;
    };

    this.maxItems = maxItems;
    this.#order = 0;
    this.#stack = {};
  };

  push(elem) {
    if (this.#order === this.maxItems) {
      throw new Error();
    };

    this.#stack[++this.#order] = elem;
  };

  pop() {
    if (this.#order === 0) {
      throw new Error();
    };

    const elem = this.#stack[this.#order];

    delete this.#stack[this.#order];
    this.#order--;
    
    return elem
  };

  peek() {
    if (this.#order === 0) {
      return null
    };

    return this.#stack[this.#order]
  };

  isEmpty() {
    if (this.#order === 0) {
      return true
    };

    return false
  };

  toArray() {
    const stackCopy = [];

    for (let i = 0; i < this.#order; i++) {
      stackCopy[i] = this.#stack[i + 1];
    }

    return stackCopy
  };

  static fromIterable(iterable) {
    if (!(Symbol.iterator in Object(iterable))) {
      throw new Error()
    };

    const newStack = new Stack();

    for (const index in iterable) {
      newStack.#stack[++newStack.#order] = iterable[index];
    };
    newStack.maxItems = newStack.#order;

    return newStack
  };
};

class LinkedList {
  #list;

  constructor() {
    this.#list = [];
  };

  append(elem) {
    this.#list[this.#list.length] = elem;
  };

  prepend(elem) {
    for (let i = this.#list.length; i < 0; i--) {
      this.#list[i + 1] = this.#list[i];
    };
    this.#list[0] = elem;
  };

  find(elem) {
    if (this.#list.includes(elem)) {
      return elem
    };

    return null
  };

  toArray() {
    const newList = [...this.#list];

    return newList
  };

  static fromIterable(iterable) {
    if (!(Symbol.iterator in Object(iterable))) {
      throw new Error()
    };

    const newList = new LinkedList();

    for (const index in iterable) {
      newList.#list[newList.#list.length] = iterable[index];
    };

    return newList
  };
};

module.exports = { Stack };