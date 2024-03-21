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
  removeFrom(index) {
    if (index < 0 || index >= this.size) {
      console.log("Entry is Invallid");
      return;
    }
    let removeNode;
    if (index === 0) {
      removeNode = this.head;
      this.head = this.head.next;
    } else {
      let prev = this.head;
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      removeNode = prev.next;
      prev.next = removeNode.next;
    }
    this.size--;
    return removeNode.value;
  }

  search(value) {
    if (this.isEmpty()) {
      return -1;
    }
    let i = 0;
    let curr = this.head;
    while (curr) {
      if (curr.value === value) {
        return i;
      }
      curr = curr.next;
      i++;
      console.log([i]);
    }
    return -1;
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
list.removeFrom(1);
list.print();
list.removeFrom(0);
list.print();
list.removeFrom(1);
list.print();
list.search(20);
list.print();
console.log(list.search(20));
