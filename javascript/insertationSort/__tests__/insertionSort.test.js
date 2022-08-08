/* eslint-disable quotes */
"use strict";
const InsertionSort = require("../src/insertion");

describe("insertion sort", () => {
  test("empty array", () => {
    const insertionSort = new InsertionSort();
    let arr = [];
    expect(insertionSort.sort(arr)).toEqual("empty array");
  });

  test("Can successfully sort an array", () => {
    const insertionSort = new InsertionSort();
    let arr = [4, 2, 12, 10, 8, 6];
    expect(insertionSort.sort(arr)).toEqual([2, 4, 6, 8, 10, 12]);
  });

  test("Can successfully sort a Reverse-sorted array", () => {
    const insertionSort = new InsertionSort();
    let arr = [12, 10, 8, 6, 4, 2];
    expect(insertionSort.sort(arr)).toEqual([2, 4, 6, 8, 10, 12]);
  });

  test("Can successfully sort a Few uniques array", () => {
    const insertionSort = new InsertionSort();
    let arr = [2, 8, 2, 4, 4, 8, 4];
    expect(insertionSort.sort(arr)).toEqual([2, 2, 4, 4, 4, 8, 8]);
  });

  test("Can successfully sort a Nearly-sorted array", () => {
    const insertionSort = new InsertionSort();
    let arr = [2, 3, 5, 7, 13, 11];
    [2, 4, 6, 8, 10, 12];
    expect(insertionSort.sort(arr)).toEqual([2, 3, 5, 7, 11, 13]);
  });
});
