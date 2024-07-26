// task- 3, 4

const Person = require("./Person"); // Import the Person class

class Student extends Person {
  static no = 0; //* for task 6
  studentID;

  constructor(id, firstName, lastName) {
    super(firstName, lastName);
    this.studentID = id;
    Student.no += 1;
  }

  get StudentID() {
    return this.studentID;
  }

  greet() {
    return `hello, ${this.name} my student id is ${this.StudentID}`;
  }
}

console.log(
  " --------------------startign of student class--------------------"
);
// Create student instances
const student1 = new Student(1234, "hardik", " tyagi");
console.log("Student ID: " + student1.studentID);
console.log(student1.greet());

const student2 = new Student(4321, "john", " cena");
console.log("Student ID: " + student2.studentID);
console.log(student2.greet());

// Task 6: Log the number of students
console.log("Number of students: " + Student.no);
