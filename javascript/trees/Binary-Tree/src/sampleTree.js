/* eslint-disable quotes */
"use strict";

const Node = require("../node");
const BinaryTree = require("./BinaryTree");
const BinaryTreeSearch = require("./BinarySearchTree");

let tree = null;

//--------------------------------------------

let one = new Node(8);
let two = new Node(3);
let three = new Node(10);
let four = new Node(1);
let five = new Node(6);
let seven = new Node(14);
let eight = new Node(4);
let nine = new Node(7);
let tine = new Node(13);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = null;
three.right = seven;
five.left = eight;
five.right = nine;
seven.left = tine;
seven.right = null;

//--------------------------------------------

tree = new BinaryTree(one);
let BST = new BinaryTreeSearch(one);

//--------------------------------------------

BST.add(3);
BST.add(8);
BST.add(10);
BST.add(1);
BST.add(6);
BST.add(14);
BST.add(4);
BST.add(13);
BST.add(7);

//--------------------------------------------

console.log("------------------------");
console.log("Max " + BST.maxNode());
console.log("------------------------");
console.log("Min " + BST.minNode(tree));
console.log("------------------------");
