// Activity-2

// task-3
console.log("TASK - 3" + "(SEEN AFTER SUBMITING FIEST FROM)");
document.getElementById("myForm").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  formData.forEach((value, key) => {
    localStorage.setItem(key, value);
    console.log(localStorage.getItem(key));
  });
});

// localStorage.getItem("name");
// localStorage.getItem("age");

// task-4

console.log("TASK - 4");
localStorage.setItem("removeMe", "i will be removed (task-4)");
console.log(localStorage.getItem("removeMe"));
localStorage.removeItem("removeMe");
console.log(
  localStorage.getItem("output  after being removed from localstorage: " + "removeMe")
);
