//! Link:https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge

//* Activity-1
console.log("--Activity-1--");
// task-[1, 2]
const arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log(arr[0]);
console.log(arr[arr.length - 1]);

//* Activity-2
console.log("--Activity-2--");
// task-[3, 4, 5, 6]
arr.push(6);
console.log(arr);
console.log(arr.pop());
console.log(arr.shift());
arr.unshift(7);
console.log(arr);

//* Activity-3
console.log("--Activity-3--");
// task-7
const doubleArr = arr.map((num) => num * 2);
console.log(" ---> Double array: " + doubleArr);
// task-8
const filterArr = arr.filter((val) => val % 2 == 0);
console.log(" ---> filtered array: " + filterArr);
// task-9
const reduceArr = arr.reduce((accumulator, currNum) => accumulator + currNum, 0);
console.log(" ---> sum of the numbers in array: " + reduceArr);

//* Activity-4
console.log("--Activity-4--");
// task-10
console.log("using for loop");
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

// task-11
console.log("using forEach method");
arr.forEach((num) => {
  console.log(num);
});

//* Activity-5
console.log("--Activity-5--");
// task-[12,13]

const multiArr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(multiArr[2][1]);
