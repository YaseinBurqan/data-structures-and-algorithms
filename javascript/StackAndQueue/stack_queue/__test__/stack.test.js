/* eslint-disable quotes */
"use strict";

const Stack = require("../src/stack");

describe("stacks", () => {
  test("Can successfully push onto a stack ", () => {
    const stack = new Stack();
    stack.push("1");
    expect(stack.head.data).toBe("1");
  });

  test("Can successfully push multiple data onto a stack", () => {
    const stack = new Stack();
    stack.push("1");
    stack.push("2");
    stack.push("3");
    expect(stack.head.data).toBe("3");
    expect(stack.head.next.data).toBe("2");
    expect(stack.head.next.next.data).toBe("1");
  });

  test("Can successfully pop off the stack", () => {
    const stack = new Stack();
    stack.push("1");
    stack.push("2");
    stack.push("3");
    stack.pop();
    expect(stack.head.data).toBe("2");
  });

  it("Can successfully empty a stack after multiple pops", () => {
    const stack = new Stack();
    stack.push("1");
    stack.push("2");
    stack.push("3");
    stack.pop();
    stack.pop();
    stack.pop();
    expect(stack.pop()).toBe("stack is empty");
  });

  test("Can successfully peek the next item on the stack", () => {
    const stack = new Stack();
    stack.push("1");
    stack.push("2");
    stack.push("3");
    stack.peek();
    expect(stack.head.data).toBe("3");
  });

  it("Can successfully instantiate an empty stack ", () => {
    const stack = new Stack();
    expect(stack.head).toBe(null);
  });

  it("Calling pop or peek on empty stack raises exception", () => {
    const stack = new Stack();
    expect(stack.peek()).toBe("stack is empty");
    expect(stack.pop()).toBe("stack is empty");
  });
});
