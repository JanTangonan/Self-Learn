export default function LinkedList(){
    // Node class
    class Node {
        constructor(data) {
        this.data = data;
        this.next = null;
        }
    }
  
  // Linked list class
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a node at the beginning
    add(data) {
      let newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // Traverse the linked list
    traverse() {
      let current = this.head;
      while (current !== null) {
        console.log(current.data);
        current = current.next;
      }
    }
  }

  return(
    <div>
      
    </div>
  )
}