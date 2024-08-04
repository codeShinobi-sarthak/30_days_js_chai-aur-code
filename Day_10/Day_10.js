//! Link:https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge

//* Activity-1
console.log("--Activity-1--");
// task-1
const btn = document.querySelector(".btn");
const paragraph = document.querySelector(".paragraph");
btn.addEventListener("click", () => {
    paragraph.textContent = "text content chnaged";
});

// task-2
const imgVisible = document.querySelector(".img-visible");
imgVisible.addEventListener("dblclick", () => {
    imgVisible.style.visibility = "hidden";
});

//* Activity-2
console.log("--Activity-2--");
// task-3, 4
const changeBg = document.querySelector(".change-bg");
changeBg.addEventListener("mouseover", () => {
    changeBg.style.backgroundColor = "red";
});
changeBg.addEventListener("mouseout", () => {
    changeBg.style.backgroundColor = "pink";
});

//* Activity-3
console.log("--Activity-3--");
// task-5, 6
const logKey = document.querySelector("#log-key");
let pressedKey;
logKey.addEventListener("keypress", (key) => {
    pressedKey = key.key;
});

logKey.addEventListener("keydown", () => {
    console.log(pressedKey);
});

logKey.addEventListener("keyup", () => {
    document.querySelector(".display-key").textContent = pressedKey;
});

//* Activity-4
console.log("--Activity-4--");
// task-7
document.getElementById("myForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission

    // Log form data
    const formData = new FormData(event.target);
    // console.log(formData);
    formData.forEach((value, key) => {
        console.log(key + ": " + value);
    });
});

// task-8
const dropDown = document.querySelector("#language");
const display = document.querySelector(".selected-value");
dropDown.addEventListener("change", (event) => {
    const selectedOption = document.getElementById("language");
    display.textContent = selectedOption.value;
});

//* Activity-5
console.log("--Activity-5--");
// task-9
const list = document.querySelector(".list");
list.addEventListener("click", (event) => {
    console.log(event.target.textContent);
});

// task-10
const addItemBtn = document.querySelector(".add-Item-Btn");
addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item Added";
    list.appendChild(newItem);
});
