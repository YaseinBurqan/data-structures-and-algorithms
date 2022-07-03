"use strict";

const Node = require("../node");

describe("node module test", () => {
  it("creat successfully node with Data and next", () => {
    const node = new Node(1);
    expect(node).toBeInstanceOf(Node);
    expect(node.data).toEqual(1);
    expect(node.left).toBeNull();
    expect(node.right).toBeNull();
  });
});
