//! Link:https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge

//* Activity-1
console.log("--Activity-1--");
// task-1
const name = "Sarthak";
const age = 20;
const str = `My name is ${name} and my age is ${age}`;
console.log(str);

// task-2
const multiStr = `this is a 
multiline string using
Template Literal`;
console.log(multiStr);

//* Activity-2
console.log("--Activity-2--");
// task-3
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const [...rest] = arr;
console.log(rest);

// task-3
const obj = {
  name_2: "sarthak",
  a: 20,
  gender: "male",
};
const { name_2, a, gender } = obj;
console.log(name_2);
console.log(a);
console.log(gender);

//* Activity-3
console.log("--Activity-3--");
// task-5
const newArr = [...arr, 10, 11];
console.log(newArr);

// task-6
const restOperator = (...nums) => {
  let sum = 0;
  for (const num of nums) {
    sum += num;
  }
  return sum;
};
console.log(restOperator(2, 3, 4, 5, 6, 7));

//* Activity-4
console.log("--Activity-4--");
// task-7
function product(num_1, num_2 = 1) {
  return num_1 + num_2;
}
console.log(product(4));
console.log(product(4, 8));

//* Activity-5
console.log("--Activity-5--");
// task-8
const book_name = "Atomic Habit";
const auther = "James Clerk";
const year = 2000;
const rating = 9;

const book = { book_name, auther, year, rating };
console.log(book);

// task-9
let prop_name = "person";
function method() {
  return "what is this";
}

const task_9 = {
  [prop_name]: "person_1",
  [method()]: "this ia a object with computed properties name",
};

console.log(task_9);
