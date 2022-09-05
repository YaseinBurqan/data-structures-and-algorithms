const SinglyLinkedList = require("./SinglyLinkedList");

class SinglyLinkedListQueue {
  constructor() {
    this.list = new SinglyLinkedList();
  }

  enqueue(value) {
    this.list.append(value);
  }

  dequeue() {
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

module.exports = SinglyLinkedListQueue;
