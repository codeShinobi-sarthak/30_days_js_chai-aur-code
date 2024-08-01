// ? linked list

class Node {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  add(val) {
    let node = new Node(val);
    if (this.head == null) {
      this.head = node;
      return;
    } else {
      let temp = this.head;
      while (temp.next) {
        temp = temp.next;
      }
      temp.next = node;
    }
  }

  removeLast() {
    if (this.head == null) {
      return;
    } else {
      let temp = this.head;
      while (temp.next.next != null) {
        temp = temp.next;
      }
      temp.next = null;
    }
  }

  display() {
    console.log("displaying the list");
    let current = this.head;
    while (current) {
      console.log(current.val);
      current = current.next;
    }
  }
}

// Usage
const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.display(); // Output: 1, 2, 3
list.removeLast();
list.display(); // Output: 1, 3
