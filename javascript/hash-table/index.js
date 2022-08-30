const HashTable = require("./hashTable");
const left = new HashTable();

let leftColumn = new HashTable(10);
leftColumn.set("diligent", "employed");
leftColumn.set("fond", "enamored");
leftColumn.set("guide", "usher");
leftColumn.set("outfit", "garb");
leftColumn.set("wrath", "anger");

let rightColumn = new HashTable(10);
rightColumn.set("diligen", "idle");
rightColumn.set("fond", "averse");
rightColumn.set("guide", "follow");
rightColumn.set("flow", "jam");
rightColumn.set("wrath", "delight");

console.log(left.hashmapLeftJoin(leftColumn, rightColumn));

// rightColumn.keys().forEach(function (key) {
//   console.log(rightColumn.get(key));
// });

// [
//   ["wrath", "anger", "delight"],
//   ["diligent", "employed", "idle"],
//   ["outfit", "garb", null],
//   ["guide", "usher", "follow"],
//   ["font", "enamored", "averse"],
// ];
