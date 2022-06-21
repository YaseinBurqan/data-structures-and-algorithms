# Singly Linked List

Create a Stack and Queue classes with some specs

## Challenge

Create Stack and Queue functions .

### Features

Using a Linked List as the underlying data storage mechanism, implement both a Stack and a Queue

### Node

Create a Node class that has properties for the value stored in the Node, and a pointer to the next node.

### Stack

- Add a new `node` with that value to the `top` of the stack.
- Returns the value from `node` from the `top` of the stack.
- Returns the value of the `node` located at the `top` of the stack.

### Queue

- adds a new `node` with that value to the `back` of the queue.
- Removes the `node` from the `front` of the queue.
- Returns the `value` of the `node` located at the `front` of the queue.

#

## Approach & Efficiency

- understand the problem first.
- Imagined how the results should be.
- Write the code.
- Make the tests.

time: O(1)
space: O(1)

#

## API

### Stack

- push(value) : adds a new node with that value to the top of the stack with an O(1) Time performance.

- pop() : Removes the node from the top of the stack.

- peek() : Returns the Value of the node located at the top of the stack.

- isEmpty() : Returns a boolean indicating whether or not the stack is empty.

### Queue

- enqueue(value) : adds a new node with that value to the back of the queue with an O(1) Time performance.

- dequeue() : Removes the node from the front of the queue.

- peek() : Returns the Value of the node located at the front of the queue.

- isEmpty() : Returns a boolean indicating whether or not the queue is empty.
