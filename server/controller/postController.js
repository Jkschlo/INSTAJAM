// Require the post model
var post = require("../model/post");
var postService = require("../services/postService");
// Log that the postController has been initialized
console.log("[postController] initialized");

// Create an empty array to store posts
var posts = [];
// Create a new post and push it to the posts array
var post1 = post.createPost(
  "Look Upon My Works", "The feeling that nothing can last forever, on a cosmic level.", "https://open.spotify.com/playlist/3g06Ygajk4BNWPPpem18hl?si=8d98b3ef96bc4a9d&nd=1");
posts.push(post1);

// Define a function to get all posts
exports.getPosts = async function (req, res) {
  res.setHeader("Content-Type", "application/json");
  let posts = await postService.getPosts();
  res.send(posts);
};

// Define a function to save a new post
exports.savePost = async function (req, res) {
  let newPost = post.createPost(req.body.title, req.body.body, req.body.link);
  let posts = await postService.savePost(newPost);
  res.setHeader("Content-Type", "application/json");
  res.send(posts);
};

// Define a function to get a specific post
exports.getPost = function (req, res) {
  res.setHeader("Content-Type", "application/json");
  res.send(posts[req.params.postId]);
};

// Define a function to delete a specific post
exports.deletePosts = function (req, res) {
  posts.splice(req.params.postId, 1);
  res.setHeader("Content-Type", "application/json");
  res.send(posts);
};

// Define a function to update a specific post
exports.updatePost = function (req, res) {
  var updatedPost = posts[req.params.postId];
  console.log(req.body.title);
  console.log(req.body.body);
  console.log(req.body.link);
  if (req.body.title) updatedPost.title = req.body.title;
  if (req.body.body) updatedPost.body = req.body.body;
  if (req.body.link) updatedPost.link = req.body.link;
  posts[req.params.postId] = updatedPost;
  res.setHeader("Content-Type", "application/json");
  res.send(posts[req.params.postId]);
};