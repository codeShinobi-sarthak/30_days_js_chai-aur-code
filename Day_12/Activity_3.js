// task-4
class CustomError extends Error {
  constructor(message) {
    super(message);
    this.name = "Custom error";
  }
}

function func() {
  throw new CustomError("This is the function of custom error");
}

try {
  func();
} catch (error) {
  console.log(error.name + " : " + error.message);
}

// task-5
console.log("------- TASK 5 begins -------");

function validate(input) {
  if (input == "") {
    throw new Error("Input can not be empty");
  } else console.log("input is not empty");
}

try {
  validate("");
} catch (error) {
  console.log(error.message);
}
