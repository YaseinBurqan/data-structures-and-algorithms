"use strict";

// Require our linked list implementation
const LinkedList = require("../linkedlist");

describe("Linked List", () => {
  test("works", () => {
    expect(true).toBeTruthy();
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

  test("append to linklist works", () => {
    let list = new LinkedList();
    list.append("test1");
    expect(list.head.value).toEqual("test1");
    list.append("test2");
    expect(list.head.value).toEqual("test1");
    list.append(4);
    list.append(5);
    expect(list.head.value).toEqual("test1");
  });

  test("Can successfully add a node to the end of the linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    expect(ll.head.next).toBeNull();
  });

  test("Can successfully add multiple nodes to the end of a linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    expect(ll.head.next.value).toEqual("b");
    expect(ll.head.next.next).toBeNull();
  });

  test("Can successfully insert a node before a node located i the middle of a linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    ll.insertBefore("b", "d");
    expect(ll.head.next.value).toEqual("d");
    expect(ll.head.next.next.value).toEqual("b");
  });

  test("Can successfully insert a node before the first node of a linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.insertBefore("a", "c");
    console.log(ll.toString());
    expect(ll.head.value).toEqual("c");
  });

  test("Can successfully insert after a node in the middle of the linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    ll.insertAfter("b", "d");
    expect(ll.head.next.next.value).toEqual("d");
    expect(ll.head.next.next.next.value).toEqual("c");
  });

  test("Can successfully insert a node after the last node of the linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    ll.insertAfter("c", "d");
    expect(ll.head.next.next.next.value).toEqual("d");
    expect(ll.head.next.next.next.next).toBeNull();
  });

  test("Where k is greater than the length of the linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    expect(ll.kthFormEnd(2)).toEqual("Exception");
  });

  test("Where k and the length of the list are the same", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    expect(ll.kthFormEnd(1)).toEqual("a");
  });

  test("Where k is not a positive integer", () => {
    const ll = new LinkedList();
    ll.append("a");
    expect(ll.kthFormEnd(-1)).toEqual("Exception");
  });

  test("Where the linked list is of a size 1", () => {
    const ll = new LinkedList();
    ll.append("a");
    expect(ll.kthFormEnd(0)).toEqual("a");
  });

  test("Happy Path” where k is not at the end, but somewhere in the middle of the linked list", () => {
    const ll = new LinkedList();
    ll.append("a");
    ll.append("b");
    ll.append("c");
    ll.append("d");
    ll.append("e");
    expect(ll.kthFormEnd(3)).toEqual("b");
  });

  // //---------------------------------

  test("zipLists method -test1", () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    let ll = new LinkedList();
    ll1.append(1);
    ll1.append(3);
    ll1.append(2);
    ll2.append(5);
    ll2.append(9);
    ll2.append(4);
    ll = ll1.zipLists(ll1, ll2);
    expect(ll.toString()).toEqual(
      "{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> { 4 } -> NULL"
    );
  });

  test("zipLists method -test2", () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    let ll = new LinkedList();
    ll1.append(1);
    ll1.append(3);
    ll2.append(5);
    ll2.append(9);
    ll2.append(4);
    ll = ll1.zipLists(ll1, ll2);
    expect(ll.toString()).toEqual(
      "{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 4 } -> NULL"
    );
  });

  test("zipLists method -test3", () => {
    const ll1 = new LinkedList();
    const ll2 = new LinkedList();
    let ll = new LinkedList();
    ll1.append(1);
    ll1.append(3);
    ll1.append(2);
    ll2.append(5);
    ll2.append(9);
    ll = ll1.zipLists(ll1, ll2);
    expect(ll.toString()).toEqual(
      "{ 1 } -> { 5 } -> { 3 } -> { 9 } -> { 2 } -> NULL"
    );
  });

  //-----------------------

  test("isPalindrome method -test1", () => {
    const ll1 = new LinkedList();
    ll1.append("t");
    ll1.append("a");
    ll1.append("c");
    ll1.append("o");
    ll1.append("c");
    ll1.append("a");
    ll1.append("t");
    let result = ll1.isPalindrome(ll1);
    expect(result).toEqual(true);
  });

  test("isPalindrome method -test2", () => {
    const ll1 = new LinkedList();
    ll1.append("m");
    ll1.append("o");
    ll1.append("o");
    ll1.append("m");
    let result = ll1.isPalindrome(ll1);
    expect(result).toEqual(true);
  });

  test("isPalindrome method -test3", () => {
    const ll1 = new LinkedList();
    ll1.append("h");
    ll1.append("o");
    ll1.append("u");
    ll1.append("s");
    ll1.append("e");
    let result = ll1.isPalindrome(ll1);
    expect(result).toEqual(false);
  });
});
