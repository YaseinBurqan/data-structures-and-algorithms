/* eslint-disable quotes */
"use strict";

// Construct Single Node
class Node {
  constructor(value, next = null) {
    this.value = value; // First element of the list.
    this.next = next; // Next element of the list.
    this.tail = null; // Last element of the list.
    this.size = 0;
  }
}

// Create/Get/Remove Nodes From Linked List
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  // First in first out
  push(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.size++;
    return this;
  }

  // remove the last node
  pop() {
    if (!this.head) return undefined;
    var current = this.head;
    var newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.size--;
    if (this.size === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  // set
  updateValueAtIndex(index, value) {
    if (index < 0 || index >= this.size) return undefined;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    current.value = value;
  }

  updateValueAtValue(oldValue, newValue) {
    if (!this.head) return undefined;
    var current = this.head;
    while (current.value !== oldValue) {
      current = current.next;
    }
    current.value = newValue;
  }

  // Insert first Node also called (prepend)(unShift)
  insertFirst(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.size++;
    return this;
  }

  // Insert last Node also called Append
  insertLast(head) {
    let node = new Node(head);
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

  // Get at index
  getAt(index) {
    if (index < 0 || index >= this.size) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return console.log(current.value);
  }

  // Insert at index
  insertAt(index, value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.size++;
      return this.head;
    }
    let iter = 1;
    let currNode = this.head;
    while (currNode.next !== null && iter < index) {
      currNode = currNode.next;
      iter++;
    }
    node.next = currNode.next;
    currNode.next = node;
    this.size++;
    return node;
  }

  // Remove at index
  removeAt(index) {
    if (!this.head) return null;

    var current = this.head;
    // If head needs to be removed
    if (index === 0) {
      // Change head
      this.head = current.next;
    }
    // Find previous node of the node to be deleted
    for (let i = 0; current !== null && i < index - 1; i++)
      current = current.next;

    // If index is more than number of nodes
    if (current === null || current.next === null) return;

    var next = current.next.next;

    current.next = next;
  }

  // Clear list
  clearList() {
    this.head = null;
    this.size = 0;
  }

  // Print list head
  printList() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  reverseList() {
    let curr = this.head;
    let previous = null;
    let next = null;
    while (curr) {
      next = curr.next;
      curr.next = previous;
      previous = curr;
      curr = next;
    }
    this.head = previous;
    return this.head;
  }

  getFirst() {
    console.log(this.head.value);
  }

  getLast() {
    let curr = this.head;
    let previous = null;
    let next = null;
    while (curr) {
      next = curr.next;
      curr.next = previous;
      previous = curr;
      curr = next;
    }
    this.head = previous;
    console.log(this.head.value);
    return this.head;
  }

  getSize() {
    let counter = 0;
    let node = this.head;
    while (node) {
      counter++;
      node = node.next;
    }
    console.log(counter);
  }

  // (shift)
  removeFirstNode() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.size--;
    if (this.size === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  removeLastNode() {
    if (!this.head) return undefined;
    if (!this.head.next) this.head = null;

    let previous = this.head;
    let node = this.head.next;

    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  toString() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    return console.log(`{ ${result} } -> Null`);
  }

  contain(value) {
    let isInclude = false;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        isInclude = true;
      }
      current = current.next;
    }
    return console.log(isInclude);
  }

  insertBefore(value, newValue) {
    let current = this.head;
    const node = new Node(newValue);

    if (current.value === value) {
      node.next = this.head;
      this.head = node;
    } else {
      while (current.next) {
        if (current.next.value === value) {
          node.next = current.next;
          current.next = node;
          break;
        }
        current = current.next;
      }
    }
  }

  insertAfter(value, newValue) {
    let current = this.head;
    const node = new Node(newValue);
    while (current) {
      if (current.value === value) {
        node.next = current.next;
        current.next = node;
        break;
      }
      current = current.next;
    }
  }

  // kthFormEnd
  getDataFromEnd(value) {
    let current = this.head;
    let length = 0;
    while (current.next) {
      length++;
      current = current.next;
    }
    if (value > length || value < 0) {
      console.log("Not Exist");
    } else {
      length = length - value;
      current = this.head;
      while (length > 0) {
        current = current.next;
        length--;
      }
      console.log(current.value);
    }
  }

  zipLists(linkedListOne, linkedListTwo) {
    var zipTwoArray = linkedListOne.map(function (element, index) {
      return [element, linkedListTwo[index]];
    });
    console.log(zipTwoArray);
  }

  // This method is meant to find where a given element is placed in our list.
  findIndexOf(value) {
    let nodeIndex = 0;
    let current = this.head;
    while (current) {
      if (value === current.value) {
        return nodeIndex;
      }
      nodeIndex++;
      current = current.next;
    }
    console.log(nodeIndex);
  }

  middleValue() {
    if (!this.head) {
      console.log("List is empty");
    } else {
      let arr = [];
      let current = this.head;

      while (current) {
        arr.push(current.value);
        current = current.next;
      }

      const middleHead = arr[Math.ceil((arr.length - 1) / 2)];
      return console.log(middleHead);
    }
  }

  deleteMiddle() {
    if (!this.head) {
      console.log("List is empty");
    } else if (this.head.next === null) {
      console.log("contain One node");
    } else {
      let current = this.head;
      // Initialize prev and current pointers
      // to reach middle of linked list
      var prevNode = current;
      var currentNode = current;
      var prev = null;
      // Find the middle and previous of middle.
      while (currentNode !== null && currentNode.next !== null) {
        currentNode = currentNode.next.next;
        prev = prevNode;
        prevNode = prevNode.next;
      }
      // Delete the middle node
      console.log("deleted value  ", prev.next.value);
      prev.next = prevNode.next;
      return current;
    }
  }

  removeDuplicatesFromAllTheList() {
    let current = this.head;
    let nextCurrent = null;
    const arr = [];
    while (current) {
      if (!arr[current.value]) {
        arr[current.value] = current.value;
        nextCurrent = current;
      } else {
        nextCurrent.next = current.next;
      }
      current = current.next;
    }
    return this.head;
  }

  removeDuplicatesOfTheNextValue() {
    // sets current node to be head of list
    let current = this.head;
    // runs until we are at the end of the list
    while (current !== null && current.next !== null) {
      // checks to see if the current value and the next value are the same
      if (current.value === current.next.value) {
        // skips over the duplicate and the next value becomes 2x next
        current.next = current.next.next;
        // current value and the next value are not the same
      } else {
        // moves to the next node on the list to run through the while again
        current = current.next;
      }
    }
    // returns the linked list with no duplicates
    return this.head;
  }

  reverse(head) {
    let prev = null;
    let next;
    while (head) {
      next = head.next;
      head.next = prev;
      prev = head;
      head = next;
    }
    return prev;
  }

  // Linked List Is Palindrome
  // isPalindrome(head) {}
}

module.exports = SinglyLinkedList;
