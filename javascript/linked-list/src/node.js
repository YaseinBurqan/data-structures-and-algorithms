"use strict";
// To represent each Node we have
class Node {
  // each Node will have two things (value,next)
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

module.exports = Node;
