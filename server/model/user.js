// Define a user constructor function that takes a first and last name
function user(first, last, email, pass) {
  // Set the firstName property to the passed in first name
  this.firstName = first;
  // Set the lastName property to the passed in last name
  this.lastName = last;
  // Set the firstName property to the passed in email
  this.email = email;
  // Set the lastName property to the passed in last name
  this.password = pass;
}

// Define an exports object with a function that creates a new user
exports.createUser = function (first, last, email, pass) {
  // Call the user constructor function with the passed in first and last names and return the resulting object
  return new user(first, last, email, pass);
};

// Log that the user module has been initialized
console.log("[user] initialized");