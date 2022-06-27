/* eslint-disable quotes */
"use strict";

const Node = require("../../node");

// Queue is a very useful data structures and have variety of practical application. Queue follows the principle of First In First Out (FIFO) that is first element inserted inside the queue is the first element to be deleted from it. The two major operations on queue is enqueue (insertion) & dequeue (deletion)

class Queue {
  constructor() {
    // initialize the front of the Queue
    this.front = null;
    // initialize the rear of the Queue
    this.rear = null;
  }

  isEmpty() {
    return this.front === null && this.rear === null;
  }

  // insert a Node
  // also called : Enqueue (insertion) - Nodes or items that are added to the queue.
  enqueue(data) {
    const newNode = new Node(data);
    // if the Queue is empty then make the front to be the new Node
    if (this.isEmpty()) this.front = newNode;
    // otherwise the rear next part will contain the new Node
    else this.rear.next = newNode;
    // shift the new Node rear pointer to the new Node
    this.rear = newNode;
  }

  // remove Node method
  // also called : Dequeue (deletion) - Nodes or items that are removed from the queue. If called when the queue is empty an exception will be raised
  dequeue() {
    // if the Queue is empty then return
    if (this.isEmpty()) return; // queue is empty is in the front.
    // if there is at least one element we will shift this pointer(position)(index) to the next element
    this.front = this.front.next;
    // if the front pointing is Null, the rear will be null
    if (!this.front) this.rear = null;
  }

  // peek it is peek front to see the first Node of the queue
  // also called : Front - This is the front/first Node of the queue.
  peek() {
    // if the Queue is empty then return "queue is empty"
    if (this.isEmpty()) return "queue is empty";
    // if the Queue is not empty, return return the data of the front/first Node
    return console.log(
      `the front/first element of the stack is ${this.front.data} .`
    );
  }

  // display the Nodes
  display() {
    // if the stack list is empty
    if (this.isEmpty()) return;

    let result = "";
    // the current variable will point to the front Node
    let current = this.front;

    // print the head statement to indicate the head element
    process.stdout.write("(FRONT) ");

    // use the while loop to revers all the stack
    // while the current.next data exist and not null the loop will stop on the last node
    while (current.next !== null) {
      // make the result equal the data portion<- جزء
      result += `{ ${current.data} } -> `;
      //
      // shift the current element to the next position,To have the next data.
      current = current.next;
    }
    // print the result from the front  to the rear Node
    return console.log(result + "REAR");
  }
}

// const queue = new Queue();
// queue.enqueue(1);
// queue.enqueue(2);
// queue.enqueue(3);
// queue.enqueue(4);
// queue.enqueue(5);
// queue.display();
// queue.dequeue();
// queue.dequeue();
// queue.display();
// queue.peek();

module.exports = Queue;
