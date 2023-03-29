function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

Person.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

let john = new Person("John", "Doe");
console.log(john.fullName()); // Output: John Doe

// In this example, Person is a constructor function for creating objects with a firstName and lastName property. 
// The fullName method is added to the Person.prototype object so that all instances of Person can access it. 
// When john.fullName() is called, it looks for the fullName method on the john object and doesn't find it, so it goes 
// up the prototype chain to find it on the Person.prototype object.


// Person constructor function
function Person(name, age) {
  this.name = name;
  this.age = age;
}

// Adding a method to Person's prototype
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
}

// Creating a new Person object
const john = new Person('John', 30);

// Calling the greet method on the john object
john.greet(); // Output: "Hello, my name is John and I'm 30 years old."

// In this example, the Person constructor function creates new Person objects with a name and age property. 
// The greet method is added to the Person prototype, so that all instances of Person can access it. 
// When john.greet() is called, it logs a message to the console that includes the name and age properties of the john object.

