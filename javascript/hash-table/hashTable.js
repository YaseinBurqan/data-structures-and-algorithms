const LinkedList = require("../linked-list/src/linkedList");

class HashTable {
  constructor(size) {
    this.size = size;
    this.table = new Array(size);
  }

  hash(key) {
    const asciiCodeSum = key.split("").reduce((acc, cur) => {
      return acc + cur.charCodeAt(0);
    }, 0);
    const multiPrime = asciiCodeSum * 599;
    const theIndex = multiPrime % this.size;
    console.log(theIndex);
    return theIndex;
  }

  set(key, value) {
    const hash = this.hash(key);
    if (!this.map[hash]) {
      this.map[hash] = new LinkedList();
    }
    this.map[hash].append({ [key]: value });
  }

  get(key) {
    if (this.table[this.hash(key)]) {
      let current = this.table[this.hash(key)].head;
      while (current) {
        if (current.value[key]) {
          return current.value[key];
        } else {
          current = current.next;
        }
      }
    }
    return null;
  }

  contains(key) {
    if (this.table[this.hash(key)]) {
      let current = this.table[this.hash(key)].head;
      while (current) {
        if (current.value[key]) return true;
        current = current.next;
      }
      return false;
    } else {
      return false;
    }
  }

  keys() {
    let keys = [];
    this.map.forEach((element) => {
      let currentNode = element.head;
      while (currentNode) {
        keys.push(Object.keys(currentNode.value));
        currentNode = currentNode.next;
      }
    });
    return keys;
  }
}

module.exports = HashTable;
