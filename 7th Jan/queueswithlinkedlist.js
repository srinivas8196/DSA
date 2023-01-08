class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  };
  
class Queue {
    constructor() {
      this.head = null;
      this.tail = null;
      this.length = 0;
    }
    enqueue(val) {
      const newNode = new Node(val);
  
      if (!this.head) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
        this.tail = newNode;
      };
  
      this.length++;
      return this;
    }
    dequeue() {
      if (!this.head) return null;
      if (this.head === this.tail) this.last = null;
      let temp = this.head;
      this.head = this.head.next;
  
      this.length--;
      return temp.val;
    }
  }
  
  let queue = new Queue();
  queue.enqueue('one');
  queue.enqueue('two');
  queue.enqueue('three');
  queue.dequeue();
  console.log(queue); // two -> three