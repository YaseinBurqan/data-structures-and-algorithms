/* eslint-disable quotes */
"use strict";

// Construct Single Node
class Node {
  constructor(head, next = null) {
    this.head = head; // First element of the list.
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
  push(val) {
    var newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
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
    this.length--;
    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  updateValueAtIndex(index, value) {
    if (index < 0 || index >= this.length) return undefined;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    current.head = value;
  }

  updateValueOfHeadValue(oldValue, newValue) {
    if (!this.head) return undefined;
    var current = this.head;
    while (current.head !== oldValue) {
      current = current.next;
    }
    current.head = newValue;
  }

  // Insert first node (prepend)
  insertFirst(value) {
    var newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    }
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  // Insert last node (append)
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
    if (index < 0 || index >= this.length) return null;
    var counter = 0;
    var current = this.head;
    while (counter !== index) {
      current = current.next;
      counter++;
    }
    return console.log(current.head);
  }

  // Insert at index
  insertAt(index, value) {
    let node = new Node(value);
    if (this.head === null) {
      this.head = node;
      this.length++;
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
    this.length++;
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
      console.log(current.head);
      current = current.next;
    }
  }

  reverseList() {
    let prev = null;
    let curr = this.head;
    while (curr) {
      let next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
    }
    this.head = prev;
  }

  getFirst() {
    console.log(this.head.head);
  }

  getLast() {
    this.reverseList();
    console.log(this.head.head);
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

  removeFirstNode() {
    if (!this.head) return undefined;
    var currentHead = this.head;
    this.head = currentHead.next;
    this.length--;
    if (this.length === 0) {
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
      result += `{ ${current.head} } -> `;
      current = current.next;
    }
    return console.log(`{ ${result} } -> Null`);
  }

  contain(value) {
    let isInclude = false;
    let current = this.head;
    while (current) {
      if (current.head === value) {
        isInclude = true;
      }
      current = current.next;
    }
    return console.log(isInclude);
  }

  insertBefore(value, newValue) {
    let current = this.head;
    const node = new Node(newValue);

    if (current.head === value) {
      node.next = this.head;
      this.head = node;
    } else {
      while (current.next) {
        if (current.next.head === value) {
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
      if (current.head === value) {
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
      console.log(current.head);
    }
  }

  zipLists(linkedListOne, linkedListTwo) {
    var zipTwoArray = linkedListOne.map(function (element, index) {
      return [element, linkedListTwo[index]];
    });
    console.log(zipTwoArray);
  }

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
        arr.push(current.head);
        current = current.next;
      }

      const middleHead = arr[Math.ceil((arr.length - 1) / 2)];
      return console.log(middleHead);
    }
  }

  deleteMiddle() {
    if (!this.head) console.log("List is empty");
    else {
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
      prev.next = prevNode.next;

      return current;
    }
  }

  isPalindrome(list) {
    let current1 = list.head;
    let current2 = list.head;

    let result;

    let arr = [];
    if (list !== null && list.next !== null) {
      while (current1) {
        arr.push(current1.head);
        current1 = current1.next;
      }
      while (current2) {
        let newVal = arr.pop();
        if (newVal !== current2.head) {
          result = false;
          break;
        }
        current2 = current2.next;
      }
      result = true;
    } else {
      result = false;
    }

    return console.log(result);
  }

  removeDuplicates() {
    let current = this.head;
    if (current || !current.next) return current;

    while (current && current.next) {
      if (current.head === current.next.head) {
        current.next = current.next.next;
      } else {
        current = current.next;
      }
    }

    return current;
  }
}

module.exports = SinglyLinkedList;
