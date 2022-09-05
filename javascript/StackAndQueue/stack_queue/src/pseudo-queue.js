/* eslint-disable quotes */
"use strict";

const Stack = require("../stack");

class PseudoQueue {
  constructor() {
    this.stack1 = new Stack();
    this.stack2 = new Stack();
  }

  enqueue(value) {
    this.stack1.push(value);
    return this.stack1.peek();
  }

  dequeue() {
    if (this.stack2.peek() !== "stack is empty") {
      return this.stack2.pop();
    }

    while (this.stack1.peek() !== "stack is empty") {
      this.stack2.push(this.stack1.pop());
    }
    return this.stack2.pop();
  }
}
module.exports = PseudoQueue;
