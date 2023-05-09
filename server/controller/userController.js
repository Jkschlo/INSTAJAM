// Require the user model
var user = require("../model/user");
// Log that the userController has been initialized
console.log("[userController] initialized");

// Create an empty array to store users
var users = [];
// Create a new user and push it to the users array
var user1 = user.createUser("Jackson", "Schlosser", "jackson.schlosser1@marist.edu", "fishy123");
var user2 = user.createUser("Thomas", "Hohenforst", "thomas.hohenforst1@marist.edu", "password");
var user3 = user.createUser("Liam", "McGylnn", "liam.mcgylnn1@marist.edu", "SuperSecure");
users.push(user1);
users.push(user2);
users.push(user3);

// Define a function to get all users
exports.getUsers = function (req, res) {
  // Set the content type of the response to JSON
  res.setHeader("Content-Type", "application/json");
  // Send the users array in JSON format
  res.send(users);
};

// Define a function to save a new user
exports.saveUser = function (req, res) {
  // Create a new user based on the request body
  var newUser = user.createUser(req.body.firstName, req.body.lastName, req.body.email, req.body.pass);
  // Add the new user to the users array
  users.push(newUser);
  // Set the content type of the response to JSON
  res.setHeader("Content-Type", "application/json");
  // Send the request body back in JSON format
  res.send(req.body);
};

// Define a function to get a specific user
exports.getUser = function (req, res) {
  // Set the content type of the response to JSON
  res.setHeader("Content-Type", "application/json");
  // Get the user with the specified ID from the users array and send it back in JSON format
  res.send(users[req.params.userId]);
};

// Define a function to delete a specific user
exports.deleteUser = function (req, res) {
  // Remove the user with the specified ID from the users array
  users.splice(req.params.userId, 1);
  // Set the content type of the response to JSON
  res.setHeader("Content-Type", "application/json");
  // Send the updated users array back in JSON format
  res.send(users);
};

// Define a function to update a specific user
exports.updateUser = function (req, res) {
  // Get the existing user from the array
  var updatedUser = users[req.params.userId];
  // Check to see what fields have been passed and update the local copy of the user accordingly
  console.log(req.body.firstName);
  console.log(req.body.lastName);
  if (req.body.firstName) updatedUser.firstName = req.body.firstName;
  if (req.body.lastName) updatedUser.lastName = req.body.lastName;
  if (req.body.email) updatedUser.email = req.body.email;
  if (req.body.pass) updatedUser.pass = req.body.pass;
  // Save the updated user back into the users array
  users[req.params.userId] = updatedUser;
  // Set the content type of the response to JSON
  res.setHeader("Content-Type", "application/json");
  // Send the updated user back in JSON format
  res.send(users[req.params.userId]);
};
