// Activity-3

// console.log(sessionStorage);

// task-5
console.log("TASK - 5");
sessionStorage.setItem("str", "This is session storage");
console.log(sessionStorage.getItem("str"));

// task-6
const obj2 = {
  task: 6,
  challenge: "Understanding SessionStorage",
};

localStorage.setItem("anObject2", JSON.stringify(obj2));
const getJson2 = localStorage.getItem("anObject");
console.log("This is in json format :" + getJson2);
console.log(JSON.parse(getJson2));
