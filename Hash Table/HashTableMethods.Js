class HashTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      total += key.charCodeAt(i);
    }
    return total % this.size;
  }

  // **************** SET FUNCTION FOR COLLISION ****************

  set(key, value) {
    const index = this.hash(key);
    const Bucket = this.table[index];
    if (!Bucket) {
      Bucket = [[key, value]];
    } else {
      const sameKeyItem = Bucket.find((item) => item[0] === key);
      if (sameKeyItem) {
        sameKeyItem[1] = value;
      } else {
        Bucket.push([key, value]);
      }
    }
  }

  get(key) {
    const index = this.hash(key);
    // return this.table[index];
  }
  remove(key) {
    const index = this.hash(key);
    // this.table[index] = undefined;
    const Bucket = this.table[index];
    if (Bucket) {
      const sameKeyItem = Bucket;
    }
  }
  display() {
    for (let i = 0; i < this.table.length; i++) {
      if (this.table[i]) {
        console.log(i, this.table[i]);
      }
    }
  }
}

const table = new HashTable(50);
table.set("Name", "Sagar");
table.set("Age", "25");
table.display();
console.log(table.get("Name")); // Sagar
table.set("Name1", "Shekhar");

table.display();
