
sessionStorage.clear();
let targetElement;

<<<<<<< HEAD
function openDeletePostModal(e){
    targetElement = e.parentElement.parentElement.parentElement.parentElement;
    const modal= document.getElementById("delete-post-modal");
    modal.style.display="flex";
}

function hideDeletePostModal(){
    targetElement=null;
    const modal=document.getElementById("delete-post-modal");
    modal.style.display="none";
}

function showFullPost(e) {
    let posts = e.parentElement.parentElement.parentElement;
    let userName = posts.getElementsByTagName("p")[0].innerHTML;
    let title = posts.getElementsByTagName("p")[1].innerHTML;
    let postContent = posts.getElementsByTagName("p")[2].innerHTML;
    sessionStorage.setItem("title", title);
    sessionStorage.setItem("userName", userName);
    sessionStorage.setItem("postContent", postContent);
  
    window.location.href = "../html/posts.html";
=======
// displays modal to confirm post deletion
function openDeletePostModal(e) {
  targetElement = e.parentElement.parentElement.parentElement.parentElement;

  var modal = document.getElementById("delete-post-modal");
  modal.style.display = "block";
}

// function closes delete post modal
function closeDeletePostModal() {
  targetElement = null;
  var modal = document.getElementById("delete-post-modal");
  modal.style.display = "none";
>>>>>>> 7912b75527f72e63b6dd0c4f76f40603b95bc32f
}

// function deletes post
function deletePost() {
<<<<<<< HEAD
    document.getElementById("delete-post-modal").style.display = "none";
    targetElement.remove();
  }
=======
  document.getElementById("delete-post-modal").style.display = "none";
  targetElement.remove();
}

// store post details in session storage
function showFullPost(e) {
  let post = e.parentElement.parentElement.parentElement;
  let userName = post.getElementsByTagName("p")[0].innerHTML;
  let title = post.getElementsByTagName("p")[1].innerHTML;
  let postContent = post.getElementsByTagName("p")[2].innerHTML;
  sessionStorage.setItem("title", title);
  sessionStorage.setItem("userName", userName);
  sessionStorage.setItem("postContent", postContent);

  window.location.href = "../html/posts.html";
}
>>>>>>> 7912b75527f72e63b6dd0c4f76f40603b95bc32f
