// Activity-4

// task-7
console.log("TASK - 7 (AFTER SUBMITTING  SECOND FORM ) ");
document.getElementById("myForm2").addEventListener("submit", (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);
  formData.forEach((value, key) => {
    sessionStorage.setItem(key, value);
    console.log(sessionStorage.getItem(key));
  });
});

// sessionStorage.getItem("name");
// sessionStorage.getItem("age");

// task-7

console.log("TASK - 8");
sessionStorage.setItem("removeMe", "i will be removed (task-8)");
console.log(sessionStorage.getItem("removeMe"));
sessionStorage.removeItem("removeMe");
console.log(
  sessionStorage.getItem(
    "output  after being removed from sessionstorage : " + "removeMe"
  )
);
