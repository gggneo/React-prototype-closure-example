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
