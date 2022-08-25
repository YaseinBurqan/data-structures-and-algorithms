const LinkedList = require("../linked-list/linkedList");
class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }

  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  set(key, value) {
    let index = this.hash(key);
    if (!this.table[index]) {
      this.table[index] = new LinkedList();
    }
    this.table[index].append({ [key]: value });
  }

  get(key) {
    let index = this.hash(key);
    if (!this.table[index]) {
      return null;
    }
    return this.table[index].values();
  }

  remove(key) {
    let index = this.hash(key);
    const bucket = this.table[index];
    if (bucket && bucket.length) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  contains(key) {
    const hash = this.hash(key);
    if (this.table[hash]) {
      let currentNode = this.table[hash].head;
      while (currentNode) {
        if (currentNode.value[key]) {
          return true;
        }
        currentNode = currentNode.next;
      }
    } else {
      return false;
    }
  }

  keys() {
    let keys = [];
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        keys.push(this.table[i].keys());
      }
    }
    return keys;
  }

  display() {
    for (let i = 0; i < this.table.length; i++) {
      this.table[i];
    }
  }
}

module.exports = HashTable;
