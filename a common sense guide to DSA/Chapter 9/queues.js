class Queues {
  constructor() {
    this.data = [];
  }

  enqueue(value) {
    this.data.push(value);
  }

  dequeue() {
    return this.data.shift();
  }
  isEmpty() {
    return this.data.length > 0;
  }

  read() {
    return this.data[0];
  }

  size() {
    return this.data.length;
  }
}
