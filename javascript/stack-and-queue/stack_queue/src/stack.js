/* eslint-disable quotes */
"use strict";
const Node = require("../../node");

// Stacks are used by the compilers to check if the parenthesis in our code is valid or not, to evaluate mathematical expressions.

class Stack {
  constructor() {
    // define the head stack
    this.head = null;
  }

  // is the stack list empty?
  // returns true when stack is empty otherwise returns false.
  isEmpty() {
    // return null if it is empty
    return this.head === null;
  }

  // add new Node.
  // Push - put Nodes or items into the stack .
  push(data) {
    // create new node that received data from the push function
    const newNode = new Node(data);
    // the next position will contain the head element that pointed by this.head
    // the next position for the new Node will be the head one
    newNode.next = this.head;
    // make the head one is the new Node data
    this.head = newNode;
  }

  // drop the head Node
  // Pop - remove Nodes from the stack.
  pop() {
    // if the stack list is empty
    if (this.isEmpty()) return "stack is empty";

    // shift the head to the head next position
    this.head = this.head.next;
    // this.head.pop();
  }

  // to see the head Node data
  // Peek - view the value of the top Node in the stack.
  peek() {
    // if the stack list is empty
    if (this.isEmpty()) return "stack is empty";
    // return the data of the head Node
    console.log(`the head element of the stack is ${this.head.data} .`);
    return this.head.data;
  }

  // display the Nodes
  display() {
    // if the stack list is empty
    if (this.isEmpty()) return;

    let result = "";
    // the current variable will point to the head Node
    let current = this.head;

    // print the head statement to indicate the head element
    process.stdout.write("(HEAD) ");

    // use the while loop to revers all the stack
    // while the current.next data exist and not null the loop will stop on the last node
    while (current.next !== null) {
      // make the result equal the data portion<- جزء
      result += `{ ${current.data} } -> `;
      //
      // shift the current element to the next position,To have the next data.
      current = current.next;
    }
    // print the result from the top head to the first head
    return console.log(result + "FRONT");
  }
}

module.exports = Stack;
