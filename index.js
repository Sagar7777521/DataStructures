// ****************** Link List Stack ********************

class LinkedListStack {
  constructor() {
    this.list = new LinkedList();
  }

  push(value) {
    this.list.prepend(value);
  }
}

const list = new LinkedListStack();
list.push(10);
console.log(push());
