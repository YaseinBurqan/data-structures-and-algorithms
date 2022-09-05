const Graph = require("./Graphs");

let graph = new Graph();

graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Dallas");
graph.addVertex("Aspen");

graph.addEdge("Aspen", "Dallas");
graph.addEdge("Dallas", "Tokyo");
graph.addEdge("Aspen", "Dallas");
graph.addEdge("Aspen", "Tokyo");
graph.addEdge("Tokyo", "Dallas");

graph.display();

console.log();

graph.getEdge("Tokyo");
graph.getEdge("Dallas");
graph.getEdge("Aspen");

graph.display();
