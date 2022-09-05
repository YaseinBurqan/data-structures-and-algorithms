/* eslint-disable quotes */
"use strict";

const HashTable = require("../hash-table/hashTable");

function TreInterSection(tree1, tree2) {
  console.log(tree1);
  console.log(tree2);

  const hashTable = new HashTable();

  if (tree1.root === null || tree2.root === null) {
    return "Empty Tree";
  }

  let result = [];

  for (let i = 0; i < tree2.length; i++) {
    hashTable.set(tree1[i], tree1[i]);
  }

  for (let i = 0; i < tree1.length; i++) {
    if (hashTable.contains(tree2[i]) === true) {
      result.push(tree2[i]);
    }
  }
  return result;
}

// const one = [150, 100, 75, 160, 125, 175, 250, 200, 350, 300, 500];
// const two = [42, 100, 15, 160, 125, 175, 600, 200, 350, 4, 500];

// console.log(TreInterSection(one, two));

module.exports = TreInterSection;
