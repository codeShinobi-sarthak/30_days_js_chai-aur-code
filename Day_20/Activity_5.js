// Activity-5

// task-9
console.log("TRASK - 9");

function compare(key, value) {
  localStorage.setItem(key, value);
  sessionStorage.setItem(key, value);

  console.log("output for local storage:  " + localStorage.getItem(key));
  console.log("output for session storage:  " + sessionStorage.getItem(key));
}

compare("Activity", 5);

// task-10
console.log("TRASK - 10");

function clearData(key) {
  localStorage.removeItem(key);
  sessionStorage.removeItem(key);
  console.log(
    "output for local storage after data cleared:  " + localStorage.getItem(key)
  );
  console.log(
    "output for session storage after data cleared:  " +
      sessionStorage.getItem(key)
  );
}

clearData("Activity");
