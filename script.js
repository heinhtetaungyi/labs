function viewLink(url) {
 window.location.href = url;
}

function showAnim() {
 let anim = document.querySelector(".overlay");
 anim.style.display = "none";
 setTimeout(function() {
  anim.style.display = "flex";
 }, 2000);
}
//showAnim();