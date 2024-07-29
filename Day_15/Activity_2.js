// ? stacks

class Stack {
  constructor() {
    this.array = [];
    this.size = -1;
  }

  push(val) {
    this.array.push(val);
    this.size++;
  }

  pop() {
    if (this.array.length == 0) {
      return "stack is empty";
    }
    const topOfStack = this.array.pop();
    this.size--;
    return topOfStack;
  }

  peek() {
    if (this.array.length == 0) {
      return "stack is empty";
    }
    const topOfStack = this.array[this.size];
    console.log(topOfStack);
  }
}

const str = "reverseMe";

let stack = new Stack();
for (const char of str) {
  stack.push(char);
}

for (const char in str) {
  console.log(stack.pop());
}
