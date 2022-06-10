/* eslint-disable quotes */
/* eslint-disable new-cap */
"use strict";

let arr = [4, 8, 15, 16, 23, 42];
let value = 15;

function arrayBinarySearch(arr, value) {
  let minValue = 0;
  let maxValue = arr.length - 1;

  while (minValue <= maxValue) {
    let midValue = Math.floor((minValue + maxValue) / 2);
    let middleIndex = arr[midValue];
    if (middleIndex === value) {
      return midValue;
    }
    if (middleIndex > value) {
      maxValue = midValue - 1;
    } else {
      minValue = midValue + 1;
    }
  }
  return -1;
}
console.log(arrayBinarySearch(arr, value));
