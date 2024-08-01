//  dynamic programing

function fib(n) {
  //! index starting from 1 not 0
  let firstNum = 0;
  let secNum = 1;
  let nextNum;

  if (n == 1) {
    return firstNum;
  }
  if (n == 2) {
    return secNum;
  }

  for (let i = 0; i < n - 2; i++) {
    nextNum = firstNum + secNum;
    firstNum = secNum;
    secNum = nextNum;
  }
  return nextNum;
}

console.log(fib(2));
console.log(fib(5));
console.log(fib(3));
console.log(fib(9));
