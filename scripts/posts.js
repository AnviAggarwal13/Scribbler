<<<<<<< HEAD
showPosts();
let likes = 0;

// load content from session storage
function showPosts() {
=======
showPost();
let likes = 0;

// load content from session storage
function showPost() {
>>>>>>> 7912b75527f72e63b6dd0c4f76f40603b95bc32f
  document
    .getElementById("title")
    .setAttribute("value", sessionStorage.getItem("title"));

  document.getElementById("name2").innerHTML = sessionStorage.getItem(
    "userName"
  );

  document.getElementById("postContent").innerHTML = sessionStorage
    .getItem("postContent")
    .replace(/\s+/g, " ")
    .trim();
}

// allow editing of post title and content
function edit() {
  let title = document.getElementById("title");
  title.style.border = "1px solid pink";
  title.removeAttribute("readonly");

  let postContent = document.getElementById("postContent");
  postContent.style.border = "1px solid pink";
  postContent.setAttribute("contentEditable", true);

  document.getElementById("edit").style.display = "none";
  document.getElementById("save").style.display = "";
}

// save changes to post
function save() {
  let title = document.getElementById("title");
  title.style.border = "none";
  title.setAttribute("readonly", true);

  let postContent = document.getElementById("postContent");
  postContent.style.border = "none";
  postContent.setAttribute("contentEditable", false);

  document.getElementById("save").style.display = "none";
  document.getElementById("edit").style.display = "";
}

// add likes to post
function like() {
  likes++;
  document.querySelector(".like button").innerHTML =
    '<i class="fas fa-thumbs-up"></i> &nbsp; Liked';
<<<<<<< HEAD
  if (likes >= 1) {
=======
  if (likes == 1) {
>>>>>>> 7912b75527f72e63b6dd0c4f76f40603b95bc32f
    document.querySelector(".like p").innerHTML = likes + " person likes this!";
  } else {
    document.querySelector(".like p").innerHTML = likes + " people like this!";
  }
}

// post comments in chronological order
function postComment() {
  let comment = document.getElementById("comment");
  let commentList = document.getElementById("all-comments");
  commentList.innerHTML =
    "<p>" + comment.value + "</p>" + commentList.innerHTML;
  comment.value = "";
}