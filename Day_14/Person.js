class Person {
  static school = "chai aur code";
  firstName;
  lastName;
  age;

  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = 20; // Use a different variable name to avoid recursive setter call
  }

  greet() {
    return `Hello ${this.name}, hope you are doing good whats your student id`;
  }

  get age() {
    return this.age;
  }

  set age(value) {
    this.age = value;
  }

  // task-7
  get name() {
    return this.firstName + this.lastName;
  }

  // task-8
  set firstName(firstName) {
    this.firstName = firstName;
  }

  set lastName(lastName) {
    this.lastName = lastName;
  }
}

const person = new Person("shade", " shadow");
console.log(person.greet());
person.age = 30; // Using the setter method
console.log("getting the age from get method while updating : " + person.age); // Verify that age is set to 30

console.log(person.name);
person.firstName = "tom";
person.lastName = " & jerry";
console.log("updated name : " + person.name);

console.log("static method for task 5 : " + Person.school);

module.exports = Person; // Export the Person class
