export default function Trees(){
    class Node {
        constructor(data) {
          this.data = data;
          this.left = null;
          this.right = null;
        }
      }
      
      // Creating a binary tree
      let root = new Node(1);
      root.left = new Node(2);
      root.right = new Node(3);
}