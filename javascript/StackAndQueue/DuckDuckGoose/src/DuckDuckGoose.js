/* eslint-disable new-cap */
/* eslint-disable quotes */
"use strict";

const Queue = require("../../stack_queue/src/queue");

let newQueue = new Queue();

class DuckDuckGoose {
  duckDuckGoose(str, n) {
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
}

module.exports = DuckDuckGoose;
