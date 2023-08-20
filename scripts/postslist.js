sessionStorage.clear();
let targetElement;

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
}

function deletePost() {
    document.getElementById("delete-post-modal").style.display = "none";
    targetElement.remove();
  }