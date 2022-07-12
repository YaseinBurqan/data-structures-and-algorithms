/* eslint-disable quotes */
"use strict";

class Node {
  constructor(value, left = null, right = null) {
    this.data = value;
    this.left = left;
    this.right = right;
    this.children = [];
  }
}

module.exports = Node;
