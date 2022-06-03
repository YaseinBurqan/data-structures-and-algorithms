"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    const node = new Node(value);

    if (this.head) {
      node.next = this.head;
      this.head = node;
      this.size++;
    }
    this.head = node;
    this.size++;
  }

  includes(value) {
    let valueResult = false;
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return valueResult;
  }

  toString() {
    let currentNode = this.head;
    let string = "";

    while (currentNode) {
      string = string + `{ ${currentNode.value} } -> `;
      currentNode = currentNode.next;
    }
    string += `NULL`;
    return string;
  }

  getAt(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
}

const ll = new LinkedList();
ll.getAt(1);
ll.insert(100);
ll.toString(2);
console.log(ll.toString(2));

module.exports = LinkedList;
