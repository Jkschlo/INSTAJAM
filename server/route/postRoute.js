// Require the postController module and log a message indicating that the postRoute module has been initialized
const postController = require("../controller/postController");
console.log("[postRoute] initialized");

// Require the express module and create a new router
const express = require("express");
const router = express.Router();

router
  .route("/")
  .get((req, res) => {
    postController.getPosts(req, res);
  })
  .post((req, res) => {
    postController.savePost(req, res);
  });
 

// Define a route for getting a post by array index
router.route("/:postId").get((req, res) => {
  postController.getPost(req, res);
})
.put((req, res) => {
  postController.updatePost(req, res);
})
.patch((req, res) => {
  postController.updatePost(req, res);
})
.delete((req, res) => {
  postController.deletePost(req, res);
});

// Export the router for use in other modules
module.exports = router;
