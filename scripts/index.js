function navigateToBlog(){
  location.href="html/postslist.html"
}

function showCreatePost(){
var modal= document.getElementById("post-modal");
modal.style.display="flex";
}

function hideCreatePost(){
    var modal= document.getElementById("post-modal");
    modal.style.display="none";
}