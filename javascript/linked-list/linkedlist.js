"use strict";
const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
    this.tail = null;
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
      let current = this.head;
      while (current) {
        if (current.value === value) {
          return true;
        }
        current = current.next;
      }
      return valueResult;
    } catch (e) {
      console.error("Error in finding value");
    }
  }

  toString() {
    try {
      let current = this.head;
      let string = "";

      while (current) {
        string = string + `{ ${current.value} } -> `;
        current = current.next;
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

  isPalindrome(list) {
    let current1 = list.head;
    let current2 = list.head;

    // Initialize result
    let result = true;

    // Initialize array
    let arr = [];
    // a stack in JS is an array.
    if (list !== null && list.next !== null) {
      //
      // push all elements of l into the stack.
      while (current1) {
        arr.push(current1.value);
        current1 = current1.next;
      }
      // Traverse the list again & check by popping from the stack:
      while (current2) {
        // get the top most element on the stack:
        let newVal = arr.pop();
        // check if the node data isn't the same as the element popped:
        if (newVal !== current2.value) {
          result = false;
          break;
        }
        // move ahead:
        current2 = current2.next;
      }
      return result;
    } else {
      return false;
    }

    // let current1 = list,
    //   current2 = list,
    //   prev;

    // while (current2 && current2.next) {
    //   (current1 = current1.next), (current2 = current2.next.next);
    //   (prev = current1), (current1 = current1.next), (prev.next = null);
    // }

    // while (current1) {
    //   (prev = current1), (current2 = list), (current1 = prev);

    //   if (current2.val !== current1.val) {
    //     return false;
    //   } else {
    //     (current2 = current2.next), (current1 = current1.next);
    //     return true;
    //   }
    // }
    // return false;
  }
}

module.exports = LinkedList;
