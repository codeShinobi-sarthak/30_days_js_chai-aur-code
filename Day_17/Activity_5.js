//  ? graphs 

class Graph {
    constructor() {
      this.adjacencyList = {};
    }
  
    addVertex(vertex) {
      if (!this.adjacencyList[vertex]) {
        this.adjacencyList[vertex] = [];
      }
    }
  
    addEdge(vertex1, vertex2) {
      if (!this.adjacencyList[vertex1]) this.addVertex(vertex1);
      if (!this.adjacencyList[vertex2]) this.addVertex(vertex2);
      this.adjacencyList[vertex1].push(vertex2);
      this.adjacencyList[vertex2].push(vertex1);
    }
  
    vertices() {
      return Object.keys(this.adjacencyList);
    }
  
    edges() {
      const edgesList = [];
      for (let vertex in this.adjacencyList) {
        for (let neighbor of this.adjacencyList[vertex]) {
          if (!edgesList.includes([vertex, neighbor].sort().join('-'))) {
            edgesList.push([vertex, neighbor].sort().join('-'));
          }
        }
      }
      return edgesList.map(edge => edge.split('-'));
    }
  
    bfs(start) {
      const queue = [start];
      const result = [];
      const visited = {};
      visited[start] = true;
  
      while (queue.length) {
        const currentVertex = queue.shift();
        result.push(currentVertex);
  
        this.adjacencyList[currentVertex].forEach(neighbor => {
          if (!visited[neighbor]) {
            visited[neighbor] = true;
            queue.push(neighbor);
          }
        });
      }
      return result;
    }
  }
  
  // Usage
  const graph = new Graph();
  graph.addVertex('A');
  graph.addVertex('B');
  graph.addVertex('C');
  graph.addVertex('D');
  graph.addEdge('A', 'B');
  graph.addEdge('A', 'C');
  graph.addEdge('B', 'D');
  graph.addEdge('C', 'D');
  
  console.log('Vertices:', graph.vertices()); // ['A', 'B', 'C', 'D']
  console.log('Edges:', graph.edges()); // [['A', 'B'], ['A', 'C'], ['B', 'D'], ['C', 'D']]
  console.log('BFS from A:', graph.bfs('A')); // ['A', 'B', 'C', 'D']