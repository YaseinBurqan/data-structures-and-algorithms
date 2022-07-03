/* eslint-disable quotes */
"use strict";

class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

module.exports = Node;
