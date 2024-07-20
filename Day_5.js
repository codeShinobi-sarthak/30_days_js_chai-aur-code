//! Link:https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge

//* Activity-1
console.log("--Activity-1--");
// task-1
function checkNum(num) {
  if (num % 2 == 0) {
    return "even";
  } else return "odd";
}
console.log(checkNum(6));

// task-2
function square(num) {
  return num * num;
}
console.log("square of the number is: " + square(6));

//* Activity-2
console.log("--Activity-2--");
// task-3
function max(x, y) {
  if (x > y) {
    return "x";
  } else return "y";
}
console.log(max(6, 10));

// task-4
function concatString(str_1, str_2) {
  return str_1 + str_2;
}
console.log(concatString("hello", "world"));

//* Activity-3
console.log("--Activity-3--");
// task-5
const sum = (a, b) => {
  return a + b;
};
console.log("sum of the numbers are: " + sum(3, 7));

// task - 6;
const include = (text) => {
  return text.includes("n");
};
console.log(include("string"));

//* Activity-4
console.log("--Activity-4--");
// task-7
const product = (a, b = 9) => {
  return a * b;
};
console.log("product of the numbers are: " + product(3));

// task-8
const greetings = (name, age = 20) => {
  return `Hello, my Name is ${name} and my age is ${age}`;
};
console.log(greetings("sarthak"));

//* Activity-5
console.log("--Activity-5--");
// task-9
const great = () => {
  console.log("hello");
};
function func(greatFucntion, n) {
  for (let i = 0; i < n; i++) {
    greatFucntion();
  }
}

func(great, 5);

// task-10

const fucn_1 = (value) => {
  return `${value}-Order`;
};

const fucn_2 = (value) => {
  console.log(`${value} Functions`);
};

function task_10(fucn_1, func_2, valus) {
  fucn_2(fucn_1(valus));
}

task_10(fucn_1, fucn_2, "Higher");
