/* eslint-disable quotes */
"use strict";
const Node = require("../node");
const BinaryTree = require("../src/binaryTree");
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
    expect(tree.root.value).toEqual(1);
  });

  test("preOrder", () => {
    tree = new BinaryTree();
    const preOrder = tree.PreOrder();
    expect(preOrder).toEqual([1, 2, 6, 7, 8, 9, 3, 4, 5]);
  });

  test("inOrder", () => {
    const inOrder = tree.InOrder();
    expect(inOrder).toEqual([6, 8, 7, 9, 2, 1, 4, 3, 5]);
  });

  test("postOrder", () => {
    const postOrder = tree.PostOrder();
    expect(postOrder).toEqual([8, 9, 7, 6, 2, 4, 5, 3, 1]);
  });

  test("Binary Search", () => {
    const BST = new BinaryTreeSearch();
    BST.add(10);
    BST.add(11);
    BST.add(5);
    BST.add(13);
    BST.add(13);
    BST.add(6);
    BST.add(15);
    expect(BST.contains(6)).toBeTruthy();
    expect(BST.contains(15)).toBeTruthy();
    expect(BST.contains(20)).toBeFalsy();
  });

  test("Can successfully instantiate an empty tree", () => {
    const tree = new BinaryTree();
    expect(tree.root).toBeNull();
  });

  test("Can successfully instantiate a tree with a single root node", () => {
    let node = new Node(1);
    const tree = new BinaryTree(node);
    expect(tree.root.value).toEqual(1);
  });

  test("Can successfully add a left child and right child to a tree", () => {
    const BST = new BinarySearchTree();
    BST.add(10);
    BST.add(11);
    BST.add(5);

    expect(BST.root.value).toEqual(10);
    expect(BST.root.left.value).toEqual(5);
    expect(BST.root.right.value).toEqual(11);
  });
});
