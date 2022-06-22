/* eslint-disable new-cap */
/* eslint-disable quotes */
"use strict";

// Stack >> LIFO/FILO
const pseudoQueue = require("../pseudo-queue");

describe("pseudo queue", () => {
  test("Can successfully add into a Pseudo Queue ", () => {
    const pseudo = new pseudoQueue();
    expect(pseudo.enqueue(5)).toBe(5);
  });

  test("Can successfully add multiple values onto a Pseudo Queue", () => {
    const pseudo = new pseudoQueue();
    pseudo.enqueue(5);
    pseudo.enqueue(10);
    pseudo.enqueue(15);
    pseudo.enqueue(20);

    expect(pseudo.stack1.top.value).toBe(20);
    expect(pseudo.stack1.top.next.value).toBe(15);
    expect(pseudo.stack1.top.next.next.value).toBe(10);
    expect(pseudo.stack1.top.next.next.next.value).toBe(5);
    expect(pseudo.stack1.top.next.next.next.next).toBeNull();
  });

  test("Can successfully dequeue off the stack", () => {
    const pseudo = new pseudoQueue();
    pseudo.enqueue(5);
    expect(pseudo.dequeue()).toBe(5);
  });

  test("Can successfully dequeue a stack after multiple pops", () => {
    const pseudo = new pseudoQueue();
    pseudo.enqueue(5);
    pseudo.enqueue(10);
    pseudo.enqueue(15);
    pseudo.enqueue(20);
    expect(pseudo.dequeue()).toBe(5);
    expect(pseudo.dequeue()).toBe(10);
    expect(pseudo.dequeue()).toBe(15);
    expect(pseudo.dequeue()).toBe(20);
  });

  test("Can successfully dequeue a stack after multiple pops", () => {
    const pseudo = new pseudoQueue();
    pseudo.enqueue(20);
    pseudo.enqueue(15);
    pseudo.dequeue();
    pseudo.enqueue(10);
    pseudo.enqueue(5);
    expect(pseudo.dequeue()).toBe(15);
    expect(pseudo.dequeue()).toBe(10);
    expect(pseudo.dequeue()).toBe(5);
  });

  test("Calling dequeue on empty pseudo raises exception", () => {
    const pseudo = new pseudoQueue();
    expect(pseudo.dequeue()).toBe("stack is empty");
  });
});
