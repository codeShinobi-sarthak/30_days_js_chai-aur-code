//! Link:https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge

//* Activity-1
console.log("--Activity-1--");
// task-1
const num = 20;
if (num > 0) {
  console.log("positive number");
} else if (num < 0) {
  console.log("negative number");
} else console.log("number equals zero");

// task-2
if (num >= 18) {
  console.log("eligible to vote");
} else console.log("not eligible to vote");

//* Activity-2
console.log("--Activity-2--");

const num_1 = 5;
const num_2 = 11;
const num_3 = 9;

if (num_1 > num_2) {
  if (num_1 > num_3) {
    console.log("number 1 is greatest");
  } else console.log("number 3 is greatest");
} else if (num_2 > num_3) {
  if (num_2 > num_1) {
    console.log("number 2 is greatest");
  } else console.log("number 1 is greatest");
} else if (num_3 > num_1) {
  if (num_3 > num_2) {
    console.log("number 3 is greatest");
  } else console.log("number 2 is greatest");
}

//* Activity-3
console.log("--Activity-3--");
// task-1
let day = 2;

switch (day) {
  case 1:
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3:
    console.log("wednesday");
    break;
  case 4:
    console.log("thursday");
    break;
  case 5:
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
}

// task-2
const grade = "B";
switch (grade) {
  case "A":
    console.log("grade A");
    break;
  case "B":
    console.log("grade B");
    break;
  case "C":
    console.log("grade C");
    break;
  case "D":
    console.log("grade D");
    break;
  case "F":
    console.log("grade F");
    break;
  default:
    break;
}

//* Activity-4
console.log("--Activity-4--");
num % 2 == 0 ? console.log("even number") : console.log("odd number");

//* Activity-5
console.log("--Activity-5--");
const year = 2003;

if (year % 4 == 0) {
  console.log("year is leap year: ", year);
} else if (year % 100 == 0) {
  console.log("year is not a leap year: ", year);
} else if (year % 400 == 0) {
  console.log("year is leap year: ", year);
} else {
  console.log("year is not a leap year: ", year);
}
