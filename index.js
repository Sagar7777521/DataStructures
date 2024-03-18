// *************** Queue Methods *******************

// class Queue {
//   constructor() {
//     this.items = [];
//   }
//   enqueue(element) {
//     this.items.push(element);
//   }
//   dequeue(element) {
//     return this.items.shift(element);
//   }
//   isEmpty() {
//     return this.items.length === 0;
//   }
//   peek() {
//     if (!this.isEmpty()) {
//       return this.items[0];
//     }
//     return null;
//   }
//   size() {
//     return this.items.length;
//   }

//   print() {
//     console.log(this.items.toString());
//   }
// }

// const queue = new Queue();
// console.log(queue.isEmpty());

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);

// console.log(queue.size());
// console.log(queue.print());
// console.log(queue.dequeue());
// console.log(queue.print());
// queue.print();
// console.log(queue.peek());

// ***************** Queue Implementation Optimised *************

// class Queue {
//   constructor() {
//     this.items = {};
//     this.rear = 0;
//     this.front = 0;
//   }

//   enqueue(element) {
//     this.items[this.rear] = element;
//     this.rear++;
//   }
//   dequeue() {
//     const item = this.items[this.front];
//     delete this.items[this.front];
//     this.front++;
//     return item;
//   }
//   isEmpty() {
//     return this.rear - this.front === 0;
//   }
//   peek() {
//     return this.items[this.front];
//   }
//   size() {
//     return this.rear - this.front;
//   }
//   print() {
//     console.log(this.items);
//   }
// }

// const queue = new Queue();
// console.log(queue.isEmpty());

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);

// queue.print();
// console.log(queue.size());

// ********************* Circular Queue Implementation ****************

// class CircularQueue {
//   constructor(capacity) {
//     this.items = new Array(capacity);
//     this.capacity = capacity;
//     this.currentLength = 0;
//     this.rear = -1;
//     this.front = -1;
//   }

//   isFull() {
//     return this.currentLength == this.capacity;
//   }

//   isEmpty() {
//     return this.currentLength === 0;
//   }
//   enqueue(element) {
//     if (!this.isFull()) {
//       this.rear = this.rear + 1;
//       this.items[this.rear] = element;
//       this.currentLength += 1;
//       if (this.front === -1) {
//         this.front = this.rear;
//       }
//     }
//   }
//   dequeue() {
//     if (this.isEmpty()) {
//       return null;
//     }
//     const item = this.items[this.front];
//     this.items[this.front] = null;
//     this.front = (this.front + 1) % this.capacity;
//     this.currentLength -= 1;
//     if (this.isEmpty()) {
//       this.front = -1;
//       this.rear = -1;
//     }
//     return item;
//   }

//   peek() {
//     if (!this.isEmpty()) {
//       return this.items[this.front];
//     }
//     return null;
//   }

//   print() {
//     if (this.isEmpty()) {
//       console.log("Queue is empty");
//     } else {
//       let i;
//       let str = "";
//       for (i = this.front; i !== this.rear; i = (i + 1) % this.capacity) {
//         str += this.items[i] + " ";
//       }
//       str += this.items[i];
//       console.log(str);
//     }
//   }
// }

// const queue = new CircularQueue(5);

// queue.enqueue(10);
// queue.enqueue(20);
// queue.enqueue(30);
// queue.enqueue(40);
// queue.enqueue(50);

// // console.log(queue.isEmpty());
// // queue.print();
// // console.log(queue.isFull());
// // queue.dequeue();
// // queue.print();
// queue.dequeue();
// queue.print();

// queue.enqueue(70);
// queue.print();

// *******************Linked List ******************************

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size === null;
  }

  getSize() {
    return this.size;
  }
  prepend(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  append(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      let prev = this.head;
      while (prev.next) {
        prev = prev.next;
      }
      prev.next = node;
    }
    this.size++;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is Empty");
    } else {
      let curr = this.head;
      let listValues = " ";
      while (curr) {
        listValues += `${curr.value}`;
        curr = curr.next;
      }
      console.log(listValues.trim());
    }
  }

  insert(value, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid Entry");
      return;
    }
    if (index === 0) {
      this.prepend(value);
    } else {
      const node = new Node(value);
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
}

const list = new LinkedList();

list.prepend(10);
list.prepend(20);
list.prepend(30);
list.prepend(40);
list.prepend(50);
list.print();
console.log("Total Size of list", list.getSize());
list.append(100);
list.print();
list.insert(60, 3);
list.print();
list.insert(121, 1);
list.print();
