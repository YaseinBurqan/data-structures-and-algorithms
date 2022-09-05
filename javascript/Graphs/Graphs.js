/* eslint-disable quotes */
class Graph {
  constructor() {
    this.adjacencyList = {};
  }

  // add key
  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      this.adjacencyList[vertex] = new Set();
      console.log(`${vertex} Added Successfully`);
    } else {
      console.log(`${vertex} Exist`);
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjacencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjacencyList[vertex2]) {
      this.addVertex(vertex2);
    }

    this.adjacencyList[vertex1].add(vertex2);
    this.adjacencyList[vertex2].add(vertex1);
  }

  addDirectedEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].add(vertex2);
  }

  removeVertex(vertex) {
    if (!this.adjacencyList[vertex]) {
      return undefined;
    }
    for (let adjacentVertex of this.adjacencyList[vertex]) {
      this.removeEdge(vertex, adjacentVertex);
    }
    delete this.adjacencyList[vertex];
  }

  removeEdge(vertex1, vertex2) {
    this.adjacencyList[vertex1].delete(vertex2);
    this.adjacencyList[vertex2].delete(vertex1);
    return console.log(vertex1, " deleted from ", vertex2);
  }

  hasEdge(vertex1, vertex2) {
    return console.log(
      this.adjacencyList[vertex1].has(vertex2) &&
        this.adjacencyList[vertex2].has(vertex1)
    );
  }

  getEdge(vertex) {
    if (!this.adjacencyList[vertex]) {
      console.log(`${vertex} : node does not exist`);
    }
    console.log(`${vertex} : Has Edge Of`);
    return console.log(this.adjacencyList[vertex]);
  }

  display() {
    for (let vertex in this.adjacencyList) {
      console.log(`${vertex} -> ${[...this.adjacencyList[vertex]]}`);
    }
  }
}

module.exports = Graph;
