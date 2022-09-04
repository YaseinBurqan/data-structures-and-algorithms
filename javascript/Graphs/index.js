const Graph = require("./Graphs");

let graph = new Graph();

graph.addVertex("Tokyo");
graph.addVertex("Dallas");
graph.addVertex("Aspen");

graph.addEdge("Tokyo", "Dallas");
graph.addEdge("Dallas", "Tokyo");
graph.addEdge("Aspen", "Dallas");

graph.removeEdge("Dallas", "Aspen");
// graph.hasEdge("Dallas", "Aspen");

graph.removeVertex("Dallas");

graph.display();
