"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(value) {
    try {
      const node = new Node(value);
      if (this.head) {
        node.next = this.head;
        this.head = node;
        this.size++;
      }
      this.head = node;
      this.size++;
    } catch (error) {
      console.error("Error in inserting value");
    }
  }

  includes(value) {
    try {
      let valueResult = false;
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.next;
      }
      return valueResult;
    } catch (e) {
      console.error("Error in finding value");
    }
  }

  toString() {
    try {
      let currentNode = this.head;
      let string = "";

      while (currentNode) {
        string = string + `{ ${currentNode.value} } -> `;
        currentNode = currentNode.next;
      }
      string += `NULL`;
      return string;
    } catch (error) {
      console.error("Error in printing the values");
    }
  }

  getAt(value) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === value) {
        console.log(current.data);
      }
      count++;
      current = current.next;
    }
    return null;
  }
  append(value) {
    let node = new Node(value);
    let current;

    if (!this.head) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
    this.size++;
  }

  insertBefore(value, newValue) {
    let newNode = this.head;
    const node = new Node(newValue);
    if (newNode.value === value) {
      node.next = this.head;
      this.head = node;
    } else {
      while (newNode.next) {
        if (newNode.next.value === value) {
          node.next = newNode.next;
          newNode.next = node;
          break;
        } else {
          newNode = newNode.next;
        }
      }
    }
  }

  insertAfter(value, newValue) {
    let newNode = this.head;
    const node = new Node(newValue);
    while (newNode) {
      if (newNode.value === value) {
        node.next = newNode.next;
        newNode.next = node;
        break;
      }
      newNode = newNode.next;
    }
  }
}

module.exports = LinkedList;
