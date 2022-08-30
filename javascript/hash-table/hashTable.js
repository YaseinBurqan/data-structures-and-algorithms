const LinkedList = require("../linked-list/linkedList");

class HashTable {
  constructor(size) {
    this.buckets = new Array(size);
    this.size = size;
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
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
    let index = this.hash(key);
    if (!this.buckets[index]) {
      this.buckets[index] = new LinkedList();
    }
    this.buckets[index].append({ [key]: value });
    return index;
  }

  get(key) {
    let index = this.hash(key);
    if (!this.buckets[index]) {
      return null;
    }
    return this.buckets[index].values();
  }

  getIndex(key) {
    const indexHash = this.hash(key);
    const index = indexHash % this.buckets.length;
    return index;
  }

  remove(key) {
    let index = this.hash(key);
    const bucket = this.buckets[index];
    if (bucket && bucket.length) {
      const sameKeyItem = bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        bucket.splice(bucket.indexOf(sameKeyItem), 1);
      }
    }
  }

  contains(key) {
    const hash = this.hash(key);
    if (this.buckets[hash]) {
      let currentNode = this.buckets[hash].head;
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
    let keysArray = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          if (!keysArray.includes(this.buckets[i][j][0])) {
            keysArray.push(this.buckets[i][j][0]);
          }
        }
      }
    }
    return keysArray;
  }

  display() {
    this.buckets.forEach((values, index) => {
      const chainedValues = values.map(
        ([key, value]) => `[ ${key}: ${value} ]`
      );
      console.log(`${index}: ${chainedValues}`);
    });
  }

  values() {
    let valuesArr = [];
    for (let i = 0; i < this.buckets.length; i++) {
      if (this.buckets[i]) {
        for (let j = 0; j < this.buckets[i].length; j++) {
          if (!valuesArr.includes(this.buckets[i][j][1])) {
            valuesArr.push(this.buckets[i][j][1]);
          }
        }
      }
    }
    return valuesArr;
  }

  countRepeatedLetters(string) {
    let arr = string.split(" ");
    let letters = {};

    for (let word of arr) {
      if (!letters[word]) {
        letters[word] = 1;
      } else {
        letters[word]++;
      }
    }

    return letters;
  }

  countRepeatedWord(string) {
    let arr = string.split(" ");
    let str = [];

    for (let word of arr) {
      if (!str[word]) {
        str[word] = 1;
      } else {
        str[word]++;
      }
    }

    return str;
  }

  firstRepeatedLetter(string) {
    let arr = string.split("");
    let letters = {};

    for (let letter of arr) {
      if (!letters[letter]) {
        letters[letter] = 1;
      } else {
        letters[letter]++;
      }
    }

    for (let key in letters) {
      if (letters[key] > 1) {
        return key;
      }
    }
    return -1;
  }

  firstRepeatedWord(string) {
    let arr = string.split(" ");
    let str = {};

    for (let word of arr) {
      if (!str[word]) {
        str[word] = 1;
      } else {
        str[word]++;
      }
    }

    for (let key in str) {
      if (str[key] > 1) {
        return key;
      }
    }
    return -1;
  }

  hashmapLeftJoin(leftColumn, rightColumn) {
    if (leftColumn.length === 0 || rightColumn.length === 0) {
      return null;
    } else {
      const result = [];
      for (let i in leftColumn.buckets) {
        result.push(Object.entries(leftColumn.buckets[i].head.value)[0]);
      }
      for (let i in result) {
        if (rightColumn.get(result[i][0])) {
          result[i].push(rightColumn.get(result[0][i]));
        } else {
          result[i].push("null");
        }
      }
      return result;
    }
  }

  mostCommonWord(string) {
    if (string === "") {
      return "empty value";
    }
    const lowerCase = string.toLowerCase();
    const str = this.countRepeatedWord(lowerCase);

    for (let key in str) {
      if (str[key]) {
        if (str[key] > str[key]) {
          return key;
        } else return key;
      }
    }
    return str;
  }

  match(index1, index2) {
    let str = [];
    for (let i in index1)
      index2.includes(index1[i]) ? str.push(index1[i]) : false;
    return str;
  }

  commonCharactersInTwoString(string1, string2) {
    let duplicateCharacter = "";
    for (let i = 0; i < string1.length; i += 1) {
      if (duplicateCharacter.indexOf(string1[i]) === -1) {
        if (string2.indexOf(string1[i]) !== -1) {
          duplicateCharacter += string1[i];
        }
      }
    }
    return [...duplicateCharacter];
  }
}

module.exports = HashTable;
