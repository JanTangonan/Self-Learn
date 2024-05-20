export default function Graph(){
    class Node {
        constructor(value) {
          this.value = value;
          this.neighbors = [];
        }
      }
      
      // Creating a graph
      let node1 = new Node(1);
      let node2 = new Node(2);
      node1.neighbors.push(node2);
}