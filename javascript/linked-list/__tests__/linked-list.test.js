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
  ll.insert("a");
  expect(ll.head.value).toEqual("a");
  expect(ll.head.next).toBeNull();
});

test("The head property will properly point to the first node in the linked list", () => {
  const ll = new LinkedList();
  ll.insert("a");
  ll.insert("b");
  ll.insert("c");
  expect(ll).toBeDefined();
  expect(ll.head.value).toEqual("c");
  expect(ll.head.next).toBeTruthy();
});

test("Can properly insert multiple nodes into the linked list", () => {
  const ll = new LinkedList();
  ll.insert("a");
  ll.insert("b");
  ll.insert("c");
  expect(ll.head.value).toEqual("c");
  expect(ll.head.next.value).toEqual("b");
  expect(ll.head.next.next.value).toEqual("a");
  expect(ll.head.next.next.next).toBeNull();
});

test("Will return true when finding a value within the linked list that exists", () => {
  const ll = new LinkedList();
  ll.insert("a");
  ll.insert("b");
  ll.insert("c");
  expect(ll.includes("a")).toEqual(true);
  expect(ll.includes("b")).toEqual(true);
  expect(ll.includes("c")).toEqual(true);
  expect(ll.includes("e")).toEqual(false);
});

test("Will return false when searching for a value in the linked list that does not exist", () => {
  const ll = new LinkedList();
  ll.insert("a");
  ll.insert("b");
  expect(ll.includes("b")).toEqual(true);
  expect(ll.includes("c")).toEqual(false);
});

test("Can properly return a collection of all the values that exist in the linked list", () => {
  const ll = new LinkedList();
  ll.insert("c");
  ll.insert("b");
  ll.insert("a");

  expect(ll.toString()).toEqual("{ a } -> { b } -> { c } -> NULL");
});
