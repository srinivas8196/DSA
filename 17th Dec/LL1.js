class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class Linkedlist {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    // this.length = 1;
  }
  append(value) {
    const newNode = new Node(value);
    if (this.head == null) {
      this.head = Node;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    }
  }
  printlist() {
    let currentHead = this.head;
    let output = [];
    while (currentHead !== null) {
      output.push(currentHead.value);
      currentHead = currentHead.next;
    }
    console.log(output);
  }
  prepend(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
    return this;
  }

  insertNode(value, index) {
    const newNode = new Node(value);
    let i = 1;
    let previousNode = this.head;
    while (i < index) {
      previousNode = previousNode.next;
      i++;
    }
    newNode.next = previousNode.next;
    previousNode.next = newNode;
    return this;
  }

  deletehead()
            {
                this.head=this.head.next;
                this.length--;
                return this;

            }

            deleteAtIndex(index){
              if(index === 0){
               this.head = this.head.next;
               this.length--;
               return this;
              }
           let count = 1;
           let previousNode = this.head;
           while(count < index){
               previousNode = previousNode.next;
               count++;
           }
           previousNode.next = previousNode.next.next;
           this.length--;
           return this;
           }
       
}

const n1 = new Linkedlist(1);
n1.append(52);
n1.append(25);
n1.prepend(85);
n1.insertNode(10, 2);
n1.printlist();
n1.deletehead()
n1.printlist();
n1.deleteAtIndex(1)
n1.printlist()

// var obj1 = new Linkedlist(100);
// Linkedlist.append(32);

// console.log(obj1);
