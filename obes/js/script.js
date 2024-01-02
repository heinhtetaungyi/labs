function initS() {
 const swiper = new Swiper('.swiper', {

  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  coverflowEffect: {
   rotate: 0,
   stretch: 0,
   depth: 100,
   modifier: 3,
   slideShadows: true
  },
  autoplay: {
   delay: 5000,
  },
  // Optional parameters
  direction: 'horizontal',
  loop: true,

  // If we need pagination
  pagination: {
   el: '.swiper-pagination',
   clickable: true
  },

  // Navigation arrows
  navigation: {
   nextEl: '.swiper-button-next',
   prevEl: '.swiper-button-prev',
  },
  // Default parameters
  slidesPerView: 2,
  spaceBetween: 10,
  // Responsive breakpoints
  breakpoints: {
   // when window width is >= 320px
   320: {
    slidesPerView: 2,
    spaceBetween: 10
   },
   // when window width is >= 480px
   480: {
    slidesPerView: 2,
    spaceBetween: 15
   },
   // when window width is >= 640px
   640: {
    slidesPerView: 2,
    spaceBetween: 15
   }
  }
 });
}

const drawer = document.querySelector('.drawer');
const contact = document.querySelector('.contact');
//INIT VARIABLE
let isOpenDrawer = false;
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
 xhr.open("POST", "./data/task.php", true);
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

function createIntro(data) {
 //console.log("intro: ", data);
 let html = `<h1>${data.title}</h1>
 <p>${data.desc}</p>
 <a href="${data.link}">ပိုမိုလေ့လာရန်</a>`
 let container = document.getElementById("introContainer");
 container.innerHTML = html;
}

function createSlide(data) {
 let html = `<div class="swiper-slide effect" style="background:
 url('${data.image}')
 no-repeat 50% 50% / cover">
 <div>
 <h2>${data.title}</h2>
 <p>${data.desc}</p><br>
 <span class="effect" onclick="viewLink('${data.link}')">Learn more </span>
 </div>
 </div>`
 let container = document.getElementById("slideContainer");
 container.insertAdjacentHTML("beforeend", html);
}
function createPost(data) {
 let html = `<article>
 <img src="${data.image}" alt="${data.title}" />
 <div class="row">
 <h3>${data.title} </h3>
 <p>${data.desc}</p>
 </div>
 </article>`
 let container = document.getElementById("postContainer");
 container.insertAdjacentHTML("beforeend", html);
}
function createImage(data) {
 let html = `<li class="card">
 <img src="${data.image}" alt="Survey Photo" />
 <div class="title">
 ${data.name}
 </div>
 </li>`
 let container = document.getElementById("imageContainer");
 container.insertAdjacentHTML("beforeend", html);
}
function createProfile(data) {
 let html = `<div class="pitem">
 <img class="profile" src="${data.image}" alt="Profile" />
 <div class="horizontal-layout">
 <h3>Name: &nbsp;</h3>${data.name}</div>
 <div class="horizontal-layout">
 <h3>Specialization: &nbsp;</h3>${data.major}</div>
 <div class="horizontal-layout">
 <h3>Contact Number: &nbsp;</h3>${data.ph}</div>
 <div>`;
 let container = document.getElementById("profileContainer");
 container.insertAdjacentHTML("beforeend", html);
}
function createService(data) {
 let html = `<li>${data.text}</li>`;
 let container = document.getElementById("serviceContainer");
 container.insertAdjacentHTML("beforeend", html);
}
let arrayList = [];
let introList = [];
let postList = [];
let slideList = [];
let imageList = [];
let profileList = [];
let serviceList = [];
async function loadContents() {
 let res = await
 fetch("https://raw.githubusercontent.com/heinhtetaungyi/labs/main/obes/data/obes.json");
 if (res.ok) {
  arrayList = await res.json();
  for (let item of arrayList) {
   if (item) {
    //console.log(item);
    introList = item.intro;
    postList = item.posts;
    slideList = item.slides;
    imageList = item.photos;
    profileList = item.profiles;
    serviceList = item.services;
    loadIntro(introList);
    loadPost(postList);
    loadSlide(slideList);
    loadImage(imageList);
    loadProfile(profileList);
   }
  }
 } else {
  throw new Error("Failed to fetch contents!");
 }
}
function loadPost(list) {
 for (let i of list) {
  if (i) {
   createPost(i);
  }
 }
}
function loadIntro(list) {
 for (let i of list) {
  if (i) {
   createIntro(i);
  }
 }
}
function loadSlide(list) {
 //console.log(list);
 for (let i of list) {
  if (i) {
   createSlide(i);
  }
 }
 initS();
}
function loadImage(list) {
 //console.log(list);
 for (let i of list) {
  if (i) {
   createImage(i);
  }
 }
}
function loadProfile(list) {
 for (let i of list) {
  if (i) {
   createProfile(i);
  }
 }
}
function loadService(list) {
 for (let i of list) {
  if (i) {
   createService(i);
  }
 }
}

document.addEventListener("DOMContentLoaded", loadContents);