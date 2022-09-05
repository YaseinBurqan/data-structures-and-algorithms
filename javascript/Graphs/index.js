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

console.log(graph.getEdge("Tokyo"));
console.log(graph.getEdge("Dallas"));
console.log(graph.getEdge("Aspen"));

console.log();

graph.hasEdge("Tokyo", "Dallas");

console.log();

graph.display();
