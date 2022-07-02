/* eslint-disable new-cap */
/* eslint-disable quotes */
"use strict";

const Queue = require("../../stack_queue/src/queue");

let newQueue = new Queue();

//use a for loop here to declare loop running until the length of string is 1, and declare a if statement that if n is more than the current length of the array (made from the strings) then delete the element which (k-n)th element and else to delete elements normally in the way of deleting the nth element

// let str = ["A", "B", "C", "D", "E"];
function DuckDuckGoose(str, n) {
  let deletionValue = "";

  if (str !== null) {
    for (let i = 0; i < str.length; i++) {
      while (str.indexOf(i) !== 1 && n !== 0) {
        newQueue.enqueue(str[i]);
        for (let j = 0; j < n - 1; j++) {
          deletionValue = newQueue.dequeue();
          newQueue.enqueue(deletionValue.value);
        }
        newQueue.dequeue();
      }
      return `only ${newQueue.dequeue().value} is lefts`;
    }
  } else {
    return "Empty Values";
  }
}

const game = new DuckDuckGoose();
console.log(game(["A", "B", "C", "D", "E"], 3));

module.exports = DuckDuckGoose();
