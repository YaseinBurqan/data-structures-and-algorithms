const HashTable = require("../hashTable");
const left = new HashTable();

describe("hashmapLeftJoin", () => {
  const leftColumn = new HashTable();
  const rightColumn = new HashTable();
  it("return an empty array", () => {
    expect(left.hashmapLeftJoin(leftColumn, rightColumn)).toBe(
      "one of them is empty"
    );
  });

  it("return a new Left joined HashTable", () => {
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

    expect(left.hashmapLeftJoin(leftColumn, rightColumn)).toEqual([
      ["wrath", "anger", "delight"],
      ["diligent", "employed", "idle"],
      ["outfit", "garb", null],
      ["guide", "usher", "follow"],
      ["font", "enamored", "averse"],
    ]);
  });
});
