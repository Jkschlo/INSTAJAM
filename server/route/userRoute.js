// Require the userController module and log a message indicating that the userRoute module has been initialized
const userController = require("../controller/userController");
console.log("[userRoute] initialized");

// Require the express module and create a new router
const express = require("express");
const router = express.Router();

// Define routes for getting all users, creating a new user, updating a user, and deleting a user
router
  .route("/")
  .get((req, res) => {
    // When a GET request is received for this route, call the getUsers function in the userController module
    userController.getUsers(req, res);
  })
  .post((req, res) => {
    // When a POST request is received for this route, call the saveUser function in the userController module
    userController.saveUser(req, res);
  });
 

// Define a route for getting a user by array index
router.route("/:userId").get((req, res) => {
  // When a GET request is received for this route, call the getUser function in the userController module
  userController.getUser(req, res);
})
.put((req, res) => {
  // When a PUT request is received for this route, call the updateUser function in the userController module
  userController.updateUser(req, res);
})
.patch((req, res) => {
  // When a PATCH request is received for this route, call the updateUser function in the userController module
  userController.updateUser(req, res);
})
.delete((req, res) => {
  // When a DELETE request is received for this route, call the deleteUser function in the userController module
  userController.deleteUser(req, res);
});

// Export the router for use in other modules
module.exports = router;
