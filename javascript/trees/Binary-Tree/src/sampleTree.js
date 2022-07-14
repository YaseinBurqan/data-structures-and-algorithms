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

BST.add(15);
BST.add(2);
BST.add(3);
BST.add(4);
BST.add(5);

//--------------------------------------------

console.log(BST);
console.log(tree);
console.log(BST.contains(6));
console.log(BST.contains(15));
console.log(BST.contains(20));

console.log("------------------------");
console.log("Max " + BST.maxNode());
console.log("------------------------");
console.log("Min " + BST.minNode());
console.log("------------------------");
console.log("Find " + BST.find(6));
console.log("------------------------");
console.log("Breadth First " + BST.breadthFirst());
console.log("------------------------");
console.log("Fizz Buzz Tree " + BST.fizzBuzzTree());
console.log("------------------------");
