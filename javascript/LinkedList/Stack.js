const SinglyLinkedList = require("./SinglyLinkedList");

class SinglyLinkedListStack {
  constructor() {
    this.list = new SinglyLinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }

  pop() {
    return this.list.removeFromFront();
  }

  peek() {
    return this.list.head.value;
  }

  isEmpty() {
    return this.list.isEmpty();
  }

  getSize() {
    return this.list.getSize();
  }

  print() {
    return this.list.print();
  }
}

module.exports = SinglyLinkedListStack;
