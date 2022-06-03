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
  ll.insert("test-1");
  expect(ll.head.value).toEqual("test-1");
  expect(ll.head.next).toBeNull();
});

test("The head property will properly point to the first node in the linked list", () => {
  const ll = new LinkedList();
  ll.insert("test-1");
  ll.insert("test-2");
  ll.insert("test-3");
  expect(ll).toBeDefined();
  expect(ll.head.value).toEqual("test-3");
  expect(ll.head.next).toBeTruthy();
});

test("Can properly insert multiple nodes into the linked list", () => {
  const ll = new LinkedList();
  ll.insert("test-1");
  ll.insert("test-2");
  ll.insert("test-3");
  expect(ll.head.value).toEqual("test-3");
  expect(ll.head.next.value).toEqual("test-2");
  expect(ll.head.next.next.value).toEqual("test-1");
  expect(ll.head.next.next.next).toBeNull();
});

test("Will return true when finding a value within the linked list that exists", () => {
  const ll = new LinkedList();
  ll.insert("test-1");
  ll.insert("test-2");
  ll.insert("test-3");
  expect(ll.includes("test-1")).toEqual(true);
  expect(ll.includes("test-2")).toEqual(true);
  expect(ll.includes("test-3")).toEqual(true);
  expect(ll.includes("test-4")).toEqual(false);
});

test("Will return false when searching for a value in the linked list that does not exist", () => {
  const ll = new LinkedList();
  ll.insert("test-1");
  ll.insert("test-2");
  expect(ll.includes("test-2")).toEqual(true);
  expect(ll.includes("test-3")).toEqual(false);
});

test("Can properly return a collection of all the values that exist in the linked list", () => {
  const ll = new LinkedList();
  //ll.insert("test-4");
  ll.insert("test-3");
  ll.insert("test-2");
  ll.insert("test-1");

  expect(ll.toString()).toEqual(
    "{ test-1 } -> { test-2 } -> { test-3 } -> NULL"
  );
  // expect(ll.toString()).toEqual(
  //   "{ test-1 } -> { test-2 } -> { test-3 } -> { test-4 } -> NULL"
  // );
});
