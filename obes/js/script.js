const drawer = document.querySelector('.drawer');
const contact = document.querySelector('.contact');
const form = document.querySelector('form');

//INIT VARIABLE
var isOpenDrawer = false;
var isOpenContact = false;

function onDrawer() {
  if (isOpenDrawer) {
    drawer.style.width = "0";
    isOpenDrawer = false;
  } else {
    drawer.style.width = "100%";
    isOpenDrawer = true;
  }
}
function onContact() {
  if (isOpenContact) {
    contact.style.height = "0";
    isOpenContact = false;
  } else {
    contact.style.height = "100%";
    isOpenContact = true;
  }
}

function sendEmail() {
  let xhr = new XMLHttpRequest();
  xhr.open("POST", "data/message.php", true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
      let response = xhr.responseText;
      console.log(response);
      if (response === "success") {
        alert("Email sent successfully!");
        // Reset form or perform other actions if needed
      } else {
        alert("Connect to server to view actual result.");
      }
    }
  };

  let formData = new FormData(document.querySelector("form"));
  xhr.send(formData);
}

function viewLink(link) {
  window.location.href = link;
}