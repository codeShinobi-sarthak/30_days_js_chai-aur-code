// Activity-1

// console.log(localStorage);

//task-1
console.log("TASK - 1");
localStorage.setItem("Day", 20);
const getItem = localStorage.getItem("Day");
console.log(getItem);



console.log("TASK - 2");
// task-2
const obj = {
    task: 2,
    challenge : "UnderstandingL ocalStorage"
}

localStorage.setItem("anObject", JSON.stringify(obj));
const getJson = localStorage.getItem("anObject");
console.log( "This is in json format :" + getJson);
console.log(JSON.parse(getJson));



