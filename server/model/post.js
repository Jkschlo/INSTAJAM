// Define a post constructor function that takes a first and last name
function post(title, body, link) {
    // Set the title property to the passed in title
    this.title = title;
    // Set the body property to the passed in body
    this.body = body;
    // Set the body property to the passed in link
    this.link = link;
  }
  
  // Define an exports object with a function that creates a new post
  exports.createPost = function (title, body, link) {
    // Call the post constructor function with the passed in title and body and return the resulting object
    return new post(title, body, link);
  };
  
  // Log that the post module has been initialized
  console.log("[post] initialized");

  