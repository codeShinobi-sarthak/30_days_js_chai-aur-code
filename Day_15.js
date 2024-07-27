//! Link:https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge


//* Activity-1
console.log("--Activity-1--");
// task-1
function outerFunction() {
  let num = 34;
  return () => {
    console.log(++num);
  };
}

const innerFunction = outerFunction();
console.log(innerFunction);
console.log(innerFunction());

// task-2
function privateFunction() {
  let counter = 1;
  const increment = () => {
    return counter++;
  };

  return increment;
}

const counter = privateFunction();
console.log(counter());
console.log(counter());
console.log(counter());

//* Activity-2
console.log("--Activity-2--");
// task-3
const generateId = () => {
  let id = Math.floor(Math.random() * 100) + 1;
  return {
    tractId() {
      const prevId = id;
      console.log(prevId);
      return ++id;
    },
  };
};

let tracking = generateId();
console.log(tracking.tractId());

// task-4
const greet = (user) => {
  //   let name = user; //* other way
  return {
    greetMessage() {
      return `hello, ${user} how are you, hope doing fine`;
    },
  };
};

let greetings = greet("jonny");
console.log(greetings.greetMessage());

//* Activity-3
console.log("--Activity-3--");
// task-5

const arrFunctions = [];

for (let i = 0; i < 5; i++) {
  arrFunctions.push(
    (function (index) {
      return function () {
        console.log(index);
      };
    })(i)
  );
}

// Calling the functions
for (let j = 0; j < arrFunctions.length; j++) {
  arrFunctions[j]();
}

//* Activity-4
console.log("--Activity-4--");
// task-6
function collection() {
  let items = ["mango", "banana"];
  return {
    add(item) {
        items.push(item);
    },
    remove(removeItem) {
      items = items.filter((item) => item != removeItem)
    },
    listItems() {
        items.forEach((item) => {
        console.log(item);
      });
    },
  };
}

const collectionArray = collection();
collectionArray.add("apple");
collectionArray.remove("banana");
console.log(collectionArray.listItems());

//* Activity-5
console.log("--Activity-5--");
// task-7

// task-8
const fib = (n, memo) => {
    memo = memo || {}

    if (memo[n]) return memo[n]

    if (n <= 1) return 1
    return memo[n] = fib(n-1, memo) + fib(n-2, memo)
}

console.log(fib(9));

// task-9
const factorial = memoize(function(n) {
    if (n === 0) {
        return 1;
    }
    return n * factorial(n - 1);
});

function memoize(fn){
    const memo = {};
    return function(args){
        const key = JSON.stringify(args);
        if(memo[key]){
            return memo[key];
        }
        const result = fn(args);
        memo[key] = result;
        return result
    }
}

console.log(factorial(5)); // 120


