"use strict";

// Require our linked list implementation
const LinkedList = require("../linkedlist");

describe("Linked List", () => {
  test("works", () => {
    expect(true).toBeTruthy();
  });
});

test("Can successfully instantiate an empty linked list", () => {
  const ll = new LinkedList();
  expect(ll).toBeInstanceOf(LinkedList);
  expect(ll.head).toBeNull();
});

test("Adds a new node with that value to the head", () => {
  const ll = new LinkedList();
  ll.insert("test1");
  expect(ll.head.value).toBe("test1");
  expect(ll.head.next).toBeNull();
});

test("The head property will properly point to the first node in the linked list", () => {
  const ll = new LinkedList();
  ll.insert("test1");
  ll.insert("test2");
  ll.insert("test3");
  expect(ll.head.value).toBe("test3");
  expect(ll.head.next).toBeTruthy();
});

test("Can properly insert multiple nodes into the linked list", () => {
  const ll = new LinkedList();
  ll.insert("test1");
  ll.insert("test2");
  ll.insert("test3");
  expect(ll.head.value).toBe("test3");
  expect(ll.head.next.value).toBe("test2");
  expect(ll.head.next.next.value).toBe("test1");
  expect(ll.head.next.next.next).toBeNull();
});

test("Will return true when finding a value within the linked list that exists", () => {
  const ll = new LinkedList();
  ll.insert("test1");
  ll.insert("test2");
  expect(ll.includes("test2")).toBe(true);
});

test("Will return false when searching for a value in the linked list that does not exist", () => {
  const ll = new LinkedList();
  ll.insert("test1");
  ll.insert("test2");
  expect(ll.includes("test3")).toBe(false);
});

test("Can properly return a collection of all the values that exist in the linked list", () => {
  const ll = new LinkedList();
  ll.insert("test3");
  ll.insert("test2");
  ll.insert("test1");

  expect(ll.toString()).toBe("{ test1 } -> { test2 } -> { test3 } -> NULL");
});
