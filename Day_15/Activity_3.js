// ? Queue

class Queue {
  constructor() {
    this.array = [];
    this.size = -1;
  }

  enqueue(val) {
    this.array.push(val);
    this.size++;
  }

  dequeue() {
    if (this.array.length == 0) {
      return "queue is empty";
    }
    const firstInQueue = this.array.shift();
    this.size--;
    return firstInQueue;
  }

  front() {
    if (this.array.length == 0) {
      return "queue is empty";
    }
    const firstInQueue = this.array[0];
    console.log(firstInQueue);
  }
}

const jobs = ["front-end", "back-end", "full-stack", "java"];

let queue = new Queue();

for (const job of jobs) {
  queue.enqueue(job);
}
for (const job in jobs) {
  console.log(queue.dequeue());
}
