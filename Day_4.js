//! Link:https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge

//* Activity-1
console.log("--Activity-1--");
// task-1
for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// task-2
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}


//* Activity-2
console.log("--Activity-2--");
// task-3
let i = 0;
let sum = 0;
while (i < 11) {
  sum += i;
  i++;
}
console.log("sum equals : " + sum);

// task-4
let rev = 10;
while (rev != 0) {
  console.log(rev);
  rev--;
}


//* Activity-3
console.log("--Activity-3--");
// task-5
let num = 1;
do {
  console.log(num);
  num++;
} while (num <= 5);

// task-6
let ans = 1;
let factorial = 5;
do {
  ans *= factorial;
  factorial--;
} while (factorial >= 1);
console.log("factorial of given number is: " + ans);


//* Activity-4
console.log("--Activity-4--");
// task-7
for (let i = 1; i <= 5; i++) {
 console.log("*".repeat(i));
}


//* Activity-5
console.log("--Activity-5--");
// task-8
for (let num = 1; num <= 10; num++) {
  if (num == 5) continue;
  console.log(num);
}

// task-9
console.log("----------------------");
for (let num = 1; num <= 10; num++) {
    if (num == 7) break;
    console.log(num);
  }
