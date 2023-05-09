//JavaScript DOM Event for password

// Get the password input and eye icons
const passwordInput = document.getElementById("password");
const showPasswordIcon = document.getElementById("hide");
const hidePasswordIcon = document.getElementById("hide2");

if (showPasswordIcon) {
  showPasswordIcon.addEventListener("click", function () {
    // Change the input type to text
    passwordInput.type = "text";

    // Show the hide icon and hide the show icon
    hidePasswordIcon.style.display = "block";
    showPasswordIcon.style.display = "none";
  });
}

// Add a click event listener to the hide icon
if (hidePasswordIcon) {
  hidePasswordIcon.addEventListener("click", function () {
    // Change the input type to password
    passwordInput.type = "password";

    // Show the show icon and hide the hide icon
    showPasswordIcon.style.display = "block";
    hidePasswordIcon.style.display = "none";
  });
}

//JavaScript DOM Event for Confirm Password

// Get the password input and eye icons
const confirmPasswordInput = document.getElementById("confirmPassword");
const showConfirmPasswordIcon = document.getElementById("cp_hide");
const hideConfirmPasswordIcon = document.getElementById("cp_hide2");

if (showConfirmPasswordIcon) {
  showConfirmPasswordIcon.addEventListener("click", function () {
    // Change the input type to text
    confirmPasswordInput.type = "text";

    // Show the hide icon and hide the show icon
    hideConfirmPasswordIcon.style.display = "block";
    showConfirmPasswordIcon.style.display = "none";
  });
}

if (hideConfirmPasswordIcon) {
  hideConfirmPasswordIcon.addEventListener("click", function () {
    // Change the input type to password
    confirmPasswordInput.type = "password";

    // Show the show icon and hide the hide icon
    showConfirmPasswordIcon.style.display = "block";
    hideConfirmPasswordIcon.style.display = "none";
  });
}

// Password match alert system, currently non functional

/* document.querySelector(".login__btn button");
document.addEventListener("click", function (event) {
  var password = document.querySelector("#password").value;
  var confirmPassword = document.querySelector("#confirmPassword").value;
  // If conditions for pass match
  if (password == "" && confirmPassword == "") {
    alert("Please enter a password in both fields.");
    event.preventDefault();
  } else if (password == "" || confirmPassword == "") {
    alert("Please enter a password in both fields.");
    event.preventDefault();
  } else if (password != confirmPassword) {
    alert("Passwords do not match.");
    event.preventDefault();
  } else {
    alert("Passwords match!");
  }
}); */

window.addEventListener("load", () => {
  //getPost();
});

function getPost() {
  fetch("/api/post").then((res) => {
    if (res.status >= 400) {
      return;
    }

    res.json().then((posts) => {
      let postHtml = "<div class='myClass' id='postContainer'>";
      posts.forEach((post) => {
        postHtml += "<h4>" + post.title + "</h4>";
        postHtml += "<p>" + post.body + "</p>";
        postHtml +=
          "<a href='" + post.link + "' target='_blank'>Take me to Spotify</a>";
        postHtml += "<hr />";
      });

      postHtml += "</div>";

      document.getElementById("postContainer").innerHTML = postHtml;
    });
  });
}

document.getElementById("postSubmit").addEventListener("click", () => {
  let title = document.getElementById("titleInput").value;
  let body = document.getElementById("bodyInput").value;
  let link = document.getElementById("linkInput").value;

  fetch("/api/post", {
    method: "post",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body:
      '{"title": "' +
      title +
      '", "body": "' +
      body +
      '", "link": "' +
      link +
      '"}',
  }).then(function (response) {
    if (response.status !== 200) {
    }
    getPost();
    return;
  });
});
