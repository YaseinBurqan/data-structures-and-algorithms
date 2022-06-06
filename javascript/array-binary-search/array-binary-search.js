/* eslint-disable quotes */
/* eslint-disable new-cap */
"use strict";

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let value = 10;

let BinarySearch = function (arr, value, start, end) {
  if (start > end) return false;
  let mid = Math.floor((start + end) / 2);

  if (arr[mid] === value) {
    return true;
  }
  if (arr[mid] > value) {
    return BinarySearch(arr, value, start, mid - 1);
  } else {
    return BinarySearch(arr, value, mid + 1, end);
  }
};

if (BinarySearch(arr, value, 0, arr.length - 1)) {
  console.log("Element found : " + value);
} else {
  console.log("Element not found");
}
