"use strict";
// To represent each Node we have
class Node {
  // each Node will have two things (value,next)
  constructor(head, next = null) {
    this.head = head;
    this.next = next;
  }
}

module.exports = Node;
