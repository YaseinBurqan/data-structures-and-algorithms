"use strict";

const Node = require("../node");

describe("node module test", () => {
  it("creat successfully node with value and next", () => {
    const node = new Node(1);
    expect(node).toBeInstanceOf(Node);
    expect(node.value).toEqual(1);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});
