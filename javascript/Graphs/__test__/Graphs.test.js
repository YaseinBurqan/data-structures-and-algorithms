const Graphs = require("../Graphs");
const G = new Graphs();

describe("Graphs", () => {
  it("return a new Left joined HashTable", () => {
    expect(G.addVertex("Tokyo")).toEqual("Tokyo");
  });
});
