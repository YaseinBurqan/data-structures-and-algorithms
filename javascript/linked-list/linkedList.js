/* eslint-disable quotes */
"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null; // First element of the list.
    this.tail = null; // Last element of the list.
    this.next = null; // Next element of the list.
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);

    if (!this.head) {
      this.head = node;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    current.next = node;
  }

  values() {
    let values = [];
    let current = this.head;
    while (current) {
      values.push(current.value);
      current = current.next;
    }
    return values;
  }

  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let removedNode;
    if (index === 0) {
      removedNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removedNode = prev.next;
      prev.next = removedNode.next;
    }
    this.size--;
    return removedNode.value;
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
    }
    return -1;
  }

  reverse() {
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

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
    } else {
      let curr = this.head;
      let list = "";
      while (curr) {
        list += `${curr.value}->`;
        curr = curr.next;
      }
      console.log(list);
    }
  }

  //(Insert)-------------------------------------------------------------------------------------------------------------------------------

  insert(value) {
    let node = new Node(value);
    let current;
    if (this.head === null) {
      this.head = node;
    } else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  insertFirst(value) {
    try {
      this.head = new Node(value, this.head);
      this.size++;
    } catch (error) {
      console.error("Error in inserting value");
    }
  }

  insertLast(value) {
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

  insertAt(value, index) {
    if (index > 0 && index > this.size) {
      return;
    }
    if (index === 0) {
      this.head = new Node(value, this.head);
      return;
    }
    const node = new Node(value);
    let current, previous;
    current = this.head;
    let count = 0;
    while (count < index) {
      previous = current;
      count++;
      current = current.next;
    }
    node.next = current;
    previous.next = node;
    this.size++;
  }
  //(Get)-------------------------------------------------------------------------------------------------------------------------------

  // getAt(getAt) {
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
    return null;
  }

  getFirst() {
    return this.head.value;
  }

  getSize() {
    return console.log(this.size);
  }

  getProps() {
    return `Length: ${this.size} || Head: ${this.head.value} || Tail: ${this.tail.value}`;
  }

  toString() {
    let current = this.head;
    let result = "";
    while (current !== null) {
      result += `{ ${current.value} } -> `;
      current = current.next;
    }
    return console.log(result);
  }

  includesNode(value) {
    let isInclude = false;
    let current = this.head;
    while (current) {
      if (current.value === value) {
        isInclude = true;
      }
      current = current.next;
    }
    return isInclude;
  }

  printListValue() {
    let current = this.head;
    while (current !== null) {
      console.log(current.value);
      current = current.next;
    }
  }

  removeFirstNode() {
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = this.head.next;
    }
    this.size--;
    return this.head;
  }

  removeAtIndex(index) {
    if (index > 0 && index > this.size) {
      return console.log(null);
    }
    let current = this.head;
    let previous;
    let count = 0;
    if (index === 0) {
      return this.removeFirst();
    } else {
      while (count <= index) {
        count++;
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
  }

  removeLastNode() {
    if (this.size === 0) {
      return null;
    }
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let current = this.head;
      while (current.next.next !== null) {
        current = current.next;
      }
      current.next = null;
      this.tail = current;
    }
    this.size--;
    return this.tail;
  }

  clearList() {
    this.head = null;
    this.size = 0;
  }
  //(isPalindrome)-------------------------------------------------------------------------------------------------------------------------------
  isPalindrome(list) {
    let current1 = list.head;
    let current2 = list.head;

    let result = true;

    let arr = [];
    if (list !== null && list.next !== null) {
      while (current1) {
        arr.push(current1.value);
        current1 = current1.next;
      }
      while (current2) {
        let newVal = arr.pop();
        if (newVal !== current2.value) {
          result = false;
          break;
        }
        current2 = current2.next;
      }
      return result;
    } else {
      return false;
    }
  } //-------------------------------------------------------------------------------------------------------------------------------

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
        } else {
          current = current.next;
        }
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
  //-------------------------------------------------------------------------------------------------------------------------------

  kthFormEnd(k) {
    let current = this.head;
    let count = 0;

    while (current.next) {
      count++;
      current = current.next;
    }

    if (k > count || k < 0) {
      return "Exception";
    } else {
      count = count - k;
      current = this.head;
      while (count > 0) {
        current = current.next;
        count--;
      }
      return current.value;
    }
  }
  //-------------------------------------------------------------------------------------------------------------------------------

  zipLists(list1, list2) {
    let current1 = list1.head;
    let current2 = list2.head;
    while (current1) {
      if (current2) {
        list1.insertAfter(current1.value, current2.value);
        current2 = current2.next;
      }
      if (current1.next) {
        current1 = current1.next.next;
      } else {
        current1 = current1.next;
      }
    }
    while (current2) {
      list1.append(current2.value);
      current2 = current2.next;
    }
    return list1;
  }
}

module.exports = LinkedList;
