/* eslint-disable quotes */
"use strict";

const Node = require("../node");
const BinaryTree = require("./BinaryTree");
const BinaryTreeSearch = require("./BinarySearchTree");

let tree = null;
//--------------------------------------------
// let one = new Node(1);
// let two = new Node(2);
// let three = new Node(3);
// let four = new Node(4);
// let five = new Node(5);
// let six = new Node(6);
// let seven = new Node(7);
// let eight = new Node(8);
// let nine = new Node(9);

// one.left = two;
// one.right = three;
// two.left = six;
// six.right = seven;
// seven.left = eight;
// seven.right = nine;
// three.left = four;
// three.right = five;
//--------------------------------------------
let one = new Node(2);
let two = new Node(7);
let three = new Node(5);
let four = new Node(2);
let five = new Node(6);
let seven = new Node(4);
let eight = new Node(9);
let nine = new Node(11);

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.left = null;
three.right = eight;
five.left = three;
five.right = nine;
eight.left = seven;
//--------------------------------------------

tree = new BinaryTree(one);
let BST = new BinaryTreeSearch();

//--------------------------------------------

console.log(BST);
console.log(tree);
console.log(BST.contains(6));
console.log(BST.contains(15));
console.log(BST.contains(20));
console.log("------------------------");

console.log("max " + BST.maxNode());
console.log("------------------------");
console.log("min " + BST.minNode());
console.log("------------------------");
console.log("find " + BST.find(6));
console.log("------------------------");

// let breadthFirstTree = BST.breadthFirst();
// console.log("breadthFirstTree : ", breadthFirstTree);
//  breadthFirst => [2, 7, 5, 2, 6, 9, 5, 11, 4];
console.log("------------------------");
