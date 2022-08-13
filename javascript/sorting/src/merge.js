/* eslint-disable quotes */
"use strict";

function mergeSort(arr) {
  const n = arr.length;

  if (n > 1) {
    const mid = Math.floor(n / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, n);
    return merge(left, right);
  } else {
    return arr;
  }
}

function merge(left, right) {
  let i = 0;
  let j = 0;
  let k = 0;
  let newArr = [];

  while (i < left.length && j < right.length) {
    if (left[i] <= right[j]) {
      newArr[k] = left[i];
      console.log("if array k " + newArr);
      i++;
    } else {
      newArr[k] = right[i];
      console.log("else array k " + newArr);
      i++;
    }
    k++;
  }

  if (i === left.length) {
    newArr[k] = right[i];
    i++;
  } else {
    return newArr;
  }

  return newArr;
}

module.exports = mergeSort;
