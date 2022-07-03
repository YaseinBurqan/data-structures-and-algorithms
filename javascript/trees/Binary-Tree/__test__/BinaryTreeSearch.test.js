/* eslint-disable quotes */
"use strict";

const binarySearchTree = require("../src/BinarySearchTree");
const binaryTree = require("../src/binaryTree");

describe("testing Binary search tree", () => {
  beforeAll(() => {
    let Bst = new binarySearchTree();
    Bst.add(100);
    Bst.add(60);
    Bst.add(150);
    Bst.add(50);
    Bst.add(80);
    Bst.add(140);
    Bst.add(160);
  });
  test("should add new node to the tree", () => {
    const tree = new binaryTree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(2);
    tree.insert(4);    insert.equal(3, tree.root.left.data);
  });

  test("should add new node to the tree", () => {
    const tree = new binarySearchTree();
    tree.insert(5);
    tree.insert(3);
    tree.insert(2);
    tree.insert(4);
    assert.equal(2, tree.find(2));
    assert.equal(false, tree.find(22));
  });
});
