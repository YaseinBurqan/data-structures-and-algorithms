"use strict";

const Node = require("../src/node");

describe("node module test", () => {
  it("creat successfully node with value and next", () => {
    const testValue = "test";
    const node = new Node(testValue);
    expect(node.value).toBe(testValue);
    expect(node.next).toBeNull();
    expect(node).toBeInstanceOf(Node);
  });
});
