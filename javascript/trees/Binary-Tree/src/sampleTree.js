/* eslint-disable quotes */
"use strict";

const Node = require("../node");
const BinaryTree = require("./BinaryTree");
const BinaryTreeSearch = require("./BinarySearchTree");

let tree = null;

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
let BST = new BinaryTreeSearch();

BST.add(10);
BST.add(11);
BST.add(5);
BST.add(13);
BST.add(13);
BST.add(6);
BST.add(15);

console.log("------------------------");
let preOrder = tree.preOrder();
console.log("pre order: ", preOrder);
//pre order > 1 , 2 , 6 , 7 , 8 , 9 , 3 , 4 , 5
console.log("------------------------");

let inOrder = tree.inOrder();
console.log("in order: ", inOrder);
//pre order > 6 , 8 , 7 , 9 , 2 , 1 , 4 , 3 , 5
console.log("------------------------");

let postOrder = tree.postOrder();
console.log("post order: ", postOrder);
//pre order > 8 , 9 , 7 , 6 , 2 , 4 , 5 , 3 , 1
console.log("------------------------");

console.log(BST.contains(6));
console.log(BST.contains(15));
console.log(BST.contains(20));
console.log("------------------------");
