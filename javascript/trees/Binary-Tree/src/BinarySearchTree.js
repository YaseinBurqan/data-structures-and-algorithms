/* eslint-disable quotes */
"use strict";

const Node = require("../node");
// const BinaryTree = require("./BinaryTree");

class BinarySearchTree {
  constructor() {
    // root of a binary search tree
    this.root = null;
  }

  // subsidiary method that will help to create a new node and add data to it
  add(data) {
    // Creating a new node with the data to be stored being initialized in it
    var newNode = new Node(data);
    // In case if the root value is null then a new node is inserted and made as the root of tree
    if (this.root === null) this.root = newNode;
    // Find the appropriate location inside the tree and add a ew node in that place
    else this.insertNewNode(this.root, newNode);
  }

  // ----------------------------------------------------------

  // This method will add the new data at the appropriate position in the tree
  insertNewNode(node, newNode) {
    // In case if the newly added data is having smaller value it is moved to the left side of the tree
    if (newNode.data < node.data) {
      // In case if the left node is empty that is null then the new data node is added there
      if (node.left === null) node.left = newNode;
      // If no left node having null value found call the same method recursively until null node is found at left side
      else this.insertNewNode(node.left, newNode);
    }
    // In case if the newly added data is having larger value than node it is moved to the right side of the tree
    else {
      // In case if the right node is empty that is null then the new data node is added there
      if (node.right === null) node.right = newNode;
      // If no right node having null value found call the same method recursively until null node is found at right side
      else this.insertNewNode(node.right, newNode);
    }
  }

  // ----------------------------------------------------------
  contains(value) {
    let current = this.root;
    while (current) {
      if (value < current.value) {
        current = current.left;
      } else if (value > current.value) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }
}

module.exports = BinarySearchTree;
