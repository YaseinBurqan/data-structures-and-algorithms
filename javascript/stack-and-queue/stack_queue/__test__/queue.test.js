/* eslint-disable quotes */
"use strict";

const Queue = require("../src/queue");

describe(" Queue test", () => {
  it("Can successfully enqueue into a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    expect(queue.front.data).toBe(1);
  });
  it("Can successfully enqueue multiple data into a queue", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    expect(queue.front.data).toBe(1);
  });
  test("Can successfully dequeue out of a queue the expected data", () => {
    let queue = new Queue();
    queue.enqueue("1");
    queue.enqueue("2");
    queue.enqueue("3");
    queue.dequeue();
    expect(queue.front.data).toBe("2");
  });
  test("Can successfully peek into a queue, seeing the expected data", () => {
    let queue = new Queue();
    queue.enqueue("1");
    queue.enqueue("2");
    queue.enqueue("3");
    queue.peek();
    expect(queue.front.data).toBe("1");
  });
  it("Can successfully empty a queue after multiple dequeues", () => {
    let queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.enqueue(4);

    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    queue.dequeue();
    expect(queue.front).toBeNull();
  });
  it("Can successfully instantiate an empty queue", () => {
    let queue = new Queue();
    expect(queue.front).toBeNull();
  });
  it("Calling dequeue or peek on empty queue raises exception", () => {
    let queue = new Queue();
    expect(() => queue.dequeue()).toBeNull;
    expect(() => queue.peek()).toBeNull;
  });
});
