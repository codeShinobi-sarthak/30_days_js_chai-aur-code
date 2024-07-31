//! Link:https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge

//* Activity-1
console.log("--Activity-1--");
// task-1
const str = "hello javascript How are You Javascript";
const matches = str.match(/javascript/gi);
console.log(matches);

// task-2
const inputStr =
  "The event is scheduled for 2024-07-31 at 10:30 AM, and the ticket number is 12345.";
console.log(inputStr.match(/\d/g));

//* Activity-2
console.log("--Activity-2--");
// task-3
// ! using above str
console.log(str.match(/\b[A-Z][a-z]*\b/g));
// ! using above imputStr
console.log(inputStr.match(/\d+/g));

//* Activity-3
console.log("--Activity-3--");
// task-5
const phoneNo = "(123) 456-7890";
console.log(phoneNo.match(/\(\d{3}\)[\s.-]\d{3}[\s.-]\d{4}/));

// task-6
const email = "heyJavascript@gamil.com";
console.log(email.match(/([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9._%+-]+)/));

//* Activity-4
console.log("--Activity-4--");
// task-7, 8
const word = "hello world";
console.log(word.match(/^h/g));
console.log(word.match(/^s/g));
console.log(word.match(/h$/g));
console.log(word.match(/D$/i));

//* Activity-5
console.log("--Activity-5--");
// task-9
const passward = "java-Script@123";
let regex1 = /\d+\w+/i;
console.log(regex1.test(passward));

const url = "http://example.com/path/to/page"
let regex2 = /^(http(s)?:\/\/)([a-zA-Z0-9.-]+)(\.[a-zA-Z]{3,})/
console.log(regex2.test(url));
