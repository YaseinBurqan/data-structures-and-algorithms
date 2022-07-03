/* eslint-disable quotes */
"use strict";
const Node = require("../node");
const BinaryTree = require("../src/BinaryTree");
const BinarySearchTree = require("../src/BinarySearchTree");

let tree = null;

describe("Binary Tree", () => {
  beforeAll(() => {
    let one = new Node(1);
    let two = new Node(2);
    let three = new Node(3);
    let four = new Node(4);
    let five = new Node(5);
    let six = new Node(6);
    let seven = new Node(7);
    let eight = new Node(8);
    let nine = new Node(9);

    one.left = two;
    one.right = three;
    two.left = six;
    six.right = seven;
    seven.left = eight;
    seven.right = nine;
    three.left = four;
    three.right = five;

    tree = new BinaryTree(one);
  });

  test("constructor", () => {
    const tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  test("preOrder", () => {
    let expectedOutput = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    let preOrder = tree.preOrder();
    expect(preOrder).toEqual(expectedOutput);
  });

  test("inOrder", () => {
    let expectedOutput = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    let inOrder = tree.inOrder();
    expect(inOrder).toEqual(expectedOutput);
  });

  test("postOrder", () => {
    let expectedOutput = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    let postOrder = tree.postOrder();
    expect(postOrder).toEqual(expectedOutput);
  });

  test("Can successfully instantiate an empty tree", () => {
    const tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  test("Can successfully instantiate a tree with a single root node", () => {
    let node = new Node(1);
    const tree = new BinaryTree(node);
    expect(tree.root.data).toEqual(1);
  });

  test("For a Binary Search Tree, can successfully add a left child and right child properly to a node", () => {
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    let tree = new BinaryTree(n1);
    n1.left = n2;
    n1.right = n3;
    expect(tree.root.data).toBe(1);
    expect(tree.root.left.data).toBe(2);
    expect(tree.root.right.data).toBe(3);
  });

  test("Can successfully return a collection from a preOrder traversal", () => {
    let arr = [1, 2, 6, 7, 8, 9, 3, 4, 5];
    expect(tree.preOrder()).toEqual(arr);
  });

  test("Can successfully return a collection from an inOrder traversal", () => {
    let arr = [6, 8, 7, 9, 2, 1, 4, 3, 5];
    expect(tree.inOrder()).toEqual(arr);
  });

  test("Can successfully return a collection from a postOrder traversal", () => {
    let arr = [8, 9, 7, 6, 2, 4, 5, 3, 1];
    expect(tree.postOrder()).toEqual(arr);
  });

  test("false or true for the contains method, given an existing or non-existing node value", () => {
    const n1 = new Node(1);
    const n2 = new Node(2);
    const n3 = new Node(3);
    const n4 = new Node(4);
    const n5 = new Node(5);
    const n6 = new Node(7);

    let tree = new BinarySearchTree(n1);

    n1.left = n2;
    n1.right = n3;
    n2.left = n4;
    n2.right = n5;
    n3.left = n6;

    expect(tree.contains(6)).toBe(false);
  });
});
