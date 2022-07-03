"use strict";

const Node = require("../src/node");

describe("node module test", () => {
  it("creat successfully node with Data and next", () => {
    const testData = "test";
    const node = new Node(testData);
    expect(node.data).toBe(testData);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
    expect(node).toBeInstanceOf(Node);
  });
});
