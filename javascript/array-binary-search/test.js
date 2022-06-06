let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 7, 8, 7, 8, 78, 7, 87, 87, 87, 8];
function arrayBinarySearch(arr, value) {
  let middle = Math.floor(arr.length / 2);
  if (value === arr[middle]) {
    return middle;
  } else if (value !== arr[middle] && arr.length === 1) {
    return -1;
  }

  if (value > arr[middle]) {
    arr = arr.slice(middle);
    return middle + arrayBinarySearch(arr, value);
  } else {
    arr = arr.slice(0, middle);
    return arrayBinarySearch(arr, value);
  }
}
arrayBinarySearch(arr, 5);
