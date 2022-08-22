/* eslint-disable quotes */
"use strict";

const Node = require("./node");

// We can add anything in the linked list (number,string,...etc).

// It is the first code that will execute in the compiler.
class LinkedList {
  // Constract the list.
  // Each Node will have two things (value,next).
  constructor() {
    // Null = default value, that is mean if the list is empty and the is no head.

    this.head = null; // First element of the list.
    this.tail = null; // Last element of the list.
    this.next = null; // Next element of the list.

    // To track the size of the list, 0 is the initial index.
    this.size = 0;
  }
  //(Insert)-------------------------------------------------------------------------------------------------------------------------------

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

  // Append adding Node in the end of the tail Linked List.
  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let curr = this.head;
      while (curr.next) {
        curr = curr.next;
      }
      curr.next = node;
    }
    this.size++;
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
  // Insert Node
  // The add method takes argument value which is the value that you want to add to the list.
  // It will add this to the end of the list.
  insert(value) {
    let node = new Node(value);
    let current;
    // checks that is the list is empty.
    if (this.head === null) {
      //  If the list is empty it will add the node to the head of the list.
      this.head = node;
    }
    // Else it will traverse to the end of the list and then add the element.
    else {
      current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
    }
  }

  // Insert first Node
  // Insert first Node also called prepending.
  // Insert the Node in the beginning of the Linked list and make it the first Node.
  insertFirst(value) {
    try {
      // If there is any value in the head this will be pushed to the next head.
      // If the linked list empty, then the head will be pushed to be the first head.
      this.head = new Node(value, this.head);
      // make the list size increase after adding a new Node.
      this.size++;
    } catch (error) {
      // To catch the error in the inserting.
      console.error("Error in inserting value");
    }
  }

  // Insert last Node
  // Insert last Node also called Append
  insertLast(value) {
    // construct new Node that pase in value.
    let node = new Node(value);
    // initialize variable.
    let current;
    // If the list is empty, make the new value to be the head.
    if (!this.head) {
      // Make the head equal the node.
      this.head = node;
    }
    // If there is ready Node.
    else {
      current = this.head;
      // If there is ready Node then we need to loop thru Nodes.
      while (current.next) {
        // If there is Node in the list then it will be the next Node.
        current = current.next;
      }
      // Do the Node to be the end head.
      current.next = node;
    }
    // make the list size increase after adding a new Node.
    this.size++;
  }

  // Insert at index
  // To insert any Node between the current Nodes (insert at a certain position).
  insertAt(value, index) {
    // If the index is out of range.
    if (index > 0 && index > this.size) {
      // Return the Node value.
      return;
    }
    // If the Node is the first index.
    if (index === 0) {
      // Like reuse the this.insertFirst(value).
      this.head = new Node(value, this.head);
      // Return the Node value.
      return;
    }
    const node = new Node(value);
    let current, previous;
    // Set current to be the first.
    current = this.head;
    // To do the loop.
    let count = 0;
    while (count < index) {
      // The previous Node before index.
      previous = current;
      // To increase the count that will equal the index by 1.
      count++;
      // The new Node after the index.
      current = current.next;
    }
    // Initialize the above Node and site the next value to be the current.
    node.next = current;
    // Site the previous Node to be the next one.
    previous.next = node;

    // make the list size increase after adding a new Node.
    this.size++;
  }
  //(Get)-------------------------------------------------------------------------------------------------------------------------------
  // Get at index
  // To git the value of the index.
  // finds the index of element
  getAt(index) {
    // Site the current variable to the beginning
    let current = this.head;
    // To do the loop.
    let count = 0;
    while (current) {
      if (count === index) {
        // If the count equal the index return the Node value.
        return console.log(current.value);
      }
      // To increase the count that will equal the index by 1.
      count++;
      // To move along of the linked list.
      current = current.next;
    }
    // Return null if he list is empty
    return console.log(null);
  }

  // IndexOf
  // This method is meant to find where a given element is placed in our list.
  indexOf(value) {
    let nodeIndex = 0;
    let current = this.head;
    while (current) {
      // To do comparison if the Node is the one we are looking for.
      if (value === current.value) {
        // return the value of nodeIndex.
        return nodeIndex;
      }
      // If it is not same value we need to increment 1 to nodeIndex and make current to be current.next
      nodeIndex++;
      current = current.next;
    }
    // If we can't find the value.
    return null;
  }

  // Git first elements
  getFirst() {
    return this.head.value;
  }

  // Git the size of the elements
  getSize() {
    return console.log(this.size);
  }

  getProps() {
    return `Length: ${this.size} || Head: ${this.head.value} || Tail: ${this.tail.value}`;
  }

  // To represent the Nodes in string way.
  // To used to have an overview of our list
  toString() {
    // To represent current Node.
    let current = this.head;
    let result = "";
    // Check if the list is empty.
    // Check if the list is empty, then loop thru all the Nodes if it is not empty.
    while (current !== null) {
      // To have the current value.
      result += `{ ${current.value} } -> `;
      // To have the next value.
      current = current.next;
    }
    return console.log(result);
  }

  // Includes
  // To check if our list have the Node value that we will give it and return true or false.
  includes(value) {
    // Initialize if it its not Include.
    let isInclude = false;
    let current = this.head;

    // Loop the Nodes to git witch one that have the same value.
    while (current) {
      if (current.value === value) {
        isInclude = true;
      }
      current = current.next;
    }
    // Return the result of our search.
    return isInclude;
  }

  // Print list value
  printListvalue() {
    // To represent current Node.
    let current = this.head;

    // Check if the list is empty.
    // Check if the list is empty, then loop thru all the Nodes if it is not empty.
    while (current !== null) {
      // To have the current value property.
      console.log(current.value);
      // To have the next value.
      current = current.next;
    }
    // printListvalue print the last Node to the first Node.
  }

  //(Deletion)-------------------------------------------------------------------------------------------------------------------------------
  // Remove first Node
  // It will remove the first Node in the list automatically without any parameters.
  removeFirst() {
    // Check if the list is empty.
    if (this.size === 0) {
      return null;
    }
    // If has only one element.
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    }
    // Advance the head to the next Node
    else {
      // Remove the Node and site the next to the next Node.
      this.head = this.head.next;
    }
    this.size--;
    return this.head;
  }

  // Remove at index
  removeAt(index) {
    // If the index is not exist or greater than the index.
    if (index > 0 && index > this.size) {
      return console.log(null);
    }
    // Make the current Node to be the first node.
    let current = this.head;
    let previous;
    let count = 0;
    // Remove first index if there is just it.
    if (index === 0) {
      return this.removeFirst();
    } else {
      // While the count less than the index and not equal 0.
      while (count <= index) {
        count++;
        // To site the previous Node to be equal the current Node.
        previous = current;
        current = current.next;
      }
      // To remove the Node.
      previous.next = current.next;
    }
    this.size--;
  }

  // Remove last Node
  // It will remove the last Node in the list automatically without any parameters.
  removeLast() {
    // Check if the list is empty.
    if (this.size === 0) {
      return null;
    }
    // If has only one element.
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    }
    // Advance the head to the next Node.
    else {
      let current = this.head;
      // To sure the end of the tail is not Null.
      while (current.next.next !== null) {
        current = current.next;
      }
      // Remove the Node and site the tail to the new Node
      current.next = null;
      this.tail = current;
    }
    this.size--;
    return this.tail;
  }

  // Clear the list
  clearList() {
    this.head = null;
    this.size = 0;
  }
  //(isPalindrome)-------------------------------------------------------------------------------------------------------------------------------
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
        // check if the node value isn't the same as the element popped:
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
  //-------------------------------------------------------------------------------------------------------------------------------
}
const ll = new LinkedList();
ll.insertFirst(1);
ll.insertFirst(2);
ll.insertFirst(3);
ll.insertFirst(4);
ll.insertFirst(5);

console.log("Print List");
ll.printListvalue();
console.log(ll.isPalindrome(ll));

module.exports = LinkedList;
