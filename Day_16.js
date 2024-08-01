//! Link:https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge

//! Recursion

//* Activity-1
console.log("--Activity-1--");
// task-1
function factorial(n) {
  if (n == 1) return 1;
  return n * factorial(n - 1);
}
console.log("task_1 : " + factorial(5));

// task-2
function fib(n) {
  if (n <= 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
console.log("task_2 : " + fib(5));

//* Activity-2
console.log("--Activity-2--");

// task-3
const sumArray = [11, 2, 32, 41, 95, 35, 63, 33];
function recursiveSum(sumArray, index) {
  if (index == sumArray.length) {
    return 0;
  }
  return sumArray[index] + recursiveSum(sumArray, index + 1);
}

console.log("task_3 : " + recursiveSum(sumArray, 0));

// task - 4;
function largestNum(arr, i, largest) {
  if (i === arr.length) {
    return largest;
  }
  if (arr[i] > largest) {
    largest = arr[i];
  }
  return largestNum(arr, i + 1, largest);
}

const arr = [3, 5, 7, 2, 8, 1]; // Example array
console.log("task_4 : " + largestNum(arr, 0, Number.MIN_VALUE)); // Output: 8

//* Activity-3
console.log("--Activity-3--");
// task-5
function revString(str, i, newStr) {
  if (i < 0) {
    return newStr;
  }
  const char = str.charAt(i);
  return revString(str, i - 1, newStr + char);
}
const string = "hello";
console.log("task_5 : " + revString(string, string.length, ""));

// task-6
function helper(str, start, end) {
  if (start >= end) {
    return true;
  }
  if (str.charAt(start) != str.charAt(end)) {
    return false;
  }
  return helper(str, start + 1, end - 1);
}

function checkPalindrome(str) {
  return helper(str, 0, str.length - 1);
}
console.log("task_6 : " + checkPalindrome("hello"));

//* Activity-4
console.log("--Activity-4--");
// task-7
const sortedArr = [1, 2, 3, 5, 8, 10, 33, 71];
function binarySearch(sortedArr, target, start, end) {
  if (start > end) {
    return false;
  }
  const mid = Math.floor((start + end) / 2);

  if (sortedArr[mid] == target) {
    return true;
  } else if (sortedArr[mid] > target) {
    return binarySearch(sortedArr, target, start, mid - 1);
  } else {
    return binarySearch(sortedArr, target, mid + 1, end);
  }
}

console.log("task_7 : " + binarySearch(sortedArr, 10, 0, sortedArr.length - 1));
// task-8
const array = [34, 24, 12, 44, 7, 44, 24, 1, 24];
function occurrence(arr, target, i, n) {
  if (i == arr.length) {
    return n;
  }
  if (arr[i] == target) {
    n = n + 1;
  }
  return occurrence(array, 24, i + 1, n);
}

console.log("task_8 : " + occurrence(array, 24, 0, 0));

// //* Activity-5
// console.log("--Activity-5--");
// // ! i didnt construct the tree but writing the functions that should be implmented inside the class
// // task-9
// function inOrderTransversal(root) {
//   if (root == null) {
//     return;
//   }
//   inOrderTransversal(root.left);
//   console.log(root.val);
//   inOrderTransversal(root.right);
// }
// // task-10
// function depthOfBinaryTree(root) {
//   if (root == null) {
//     return 0;
//   }

//   const left = depthOfBinaryTree(root.left);
//   const right = depthOfBinaryTree(root.right);
//   return 1 + Math.max(left, right);
// }
