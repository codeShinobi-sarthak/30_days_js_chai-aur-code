//! Link:https://courses.chaicode.com/learn/home/30-days-of-Javascript-challenge

//* Activity-1
console.log("--Activity-1--");
// task-1
const heading = document.getElementById("heading");
heading.textContent = "changed text content";
// task-2
const changeBg = document.querySelector(".changeBg");
changeBg.style.backgroundColor = "red";

//* Activity-2
console.log("--Activity-2--");
// task-3
const createDiv = document.createElement("div");
createDiv.innerText = "created a new element using create-element";
document.body.appendChild(createDiv);

// task-4
const list = document.querySelector(".list");
const item = document.createElement("li");
item.appendChild(document.createTextNode("item-3 added"));
list.appendChild(item);

//* Activity-3
console.log("--Activity-3--");
// task-5
// const removeElement = document.querySelector(".item-1");
// list.removeChild(removeElement)
list.removeChild(list.firstElementChild);
// task-6
const removeSpecific = document.querySelector("#last-child");
const container = document.querySelector(".container");
container.removeChild(removeSpecific);

//* Activity-4
console.log("--Activity-4--");
// task-7
const btn = document.querySelector(".btn");
btn.setAttribute("alt", "random button");

// task-8 //! using the changBG div from above
changeBg.classList.remove("removeClass");

//* Activity-5
console.log("--Activity-5--");
// task-9
const para = document.querySelector(".para");
btn.addEventListener("click", () => {
  para.textContent = "changed the text content on click";
});

// task-10
btn.addEventListener("mouseover", () => {
  btn.style.border = "none";
});
