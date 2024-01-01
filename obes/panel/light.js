// INIT VARIABLE
let isOpenServiceLayout = false;
let isOpenMenu = false;
let onlineArrayList = [];
let openPost = null;
let postType;
let shaKey;
const endPoint =
"https://api.github.com/repos/MDHein/DScript/contents/upload/obes.json";
const accessToken = "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";
// INIT ID
const username = document.getElementById("username");
const password = document.getElementById("password");
const saveme = document.getElementById("saveme");
const login = document.getElementById("login");
const logout = document.getElementById("logout");
const loginLayout = document.querySelector(".loginlayout");
const menu = document.querySelector(".menu");
const load = document.querySelector(".load");
const plus = document.querySelector(".plus");

const listtitle = document.querySelector(".listtitle");
const listview = document.querySelector(".listview");

const menuLayout = document.querySelector(".menulayout");
const viewLayout = document.querySelector(".viewlayout");
const viewTitle = viewLayout.querySelector(".title");
const viewDescription = viewLayout.querySelector(".description");
const viewCover = viewLayout.querySelector(".cover");

const serviceLayout = document.querySelector(".service");
const back = serviceLayout.querySelector(".back");
const add = serviceLayout.querySelector(".add");
const postView = serviceLayout.querySelector(".view");
const postDelete = serviceLayout.querySelector(".delete");
const postTitle = serviceLayout.querySelector(".center");

const titleInput = document.getElementById("title");
const descriptionInput = document.getElementById("description");
const imageInput = document.getElementById("image");
const linkInput = document.getElementById("link");
const majorInput = document.getElementById("major");
const phInput = document.getElementById("ph");
const optionSelect = document.getElementById("option-select");

optionSelect.addEventListener("change", () => {
 const selectedOption = optionSelect.value;
 if (selectedOption === "custom") {} else if (selectedOption === "one") {
  //console.log("One");
  onIntro();
 } else if (selectedOption === "two") {
  onSlide();
 } else if (selectedOption === "three") {
  onImage();
 } else if (selectedOption === "four") {
  onProfile();
 } else {
  console.log("Else");
 }
});

function viewIntro(p) {
 openPost = p;
 titleInput.value = p.title;
 linkInput.value = p.link;
 descriptionInput.value = p.desc;
 add.textContent = "Update";
 postView.style.display = "flex";
 postDelete.style.display = "flex";
 postTitle.textContent = "";
 onServiceLayout();
 onIntro();
}
function viewArticle(p) {
 openPost = p;
 titleInput.value = p.title;
 imageInput.value = p.image;
 descriptionInput.value = p.desc;
 add.textContent = "Update";
 postView.style.display = "flex";
 postDelete.style.display = "flex";
 postTitle.textContent = "";
 onServiceLayout();
 onArticle();
}
function viewSlide(p) {
 openPost = p;
 titleInput.value = p.title;
 imageInput.value = p.image;
 linkInput.value = p.link;
 descriptionInput.value = p.desc;
 add.textContent = "Update";
 postView.style.display = "flex";
 postDelete.style.display = "flex";
 postTitle.textContent = "";
 onServiceLayout();
 onSlide();
}
function viewImage(p) {
 openPost = p;
 titleInput.value = p.name;
 imageInput.value = p.image;
 add.textContent = "Update";
 postView.style.display = "flex";
 postDelete.style.display = "flex";
 postTitle.textContent = "";
 onServiceLayout();
 onImage();
}
function viewProfile(p) {
 openPost = p;
 titleInput.value = p.name;
 imageInput.value = p.image;
 majorInput.value = p.major;
 phInput.value = p.ph;
 add.textContent = "Update";
 postView.style.display = "flex";
 postDelete.style.display = "flex";
 postTitle.textContent = "";
 onServiceLayout();
 onProfile();
}
function viewService(p) {
 openPost = p;
 titleInput.value = p.title;
 descriptionInput.value = p.desc;
 add.textContent = "Update";
 postView.style.display = "flex";
 postDelete.style.display = "flex";
 postTitle.textContent = "";
 onServiceLayout();
 onService();
}

// Start Inject
function createIntro(data) {
 //console.log("intro: ", data);
 let html = `<h1>${data.title}</h1>
 <p>${data.desc}</p>`
 let li = document.createElement("li");
 li.className = "item";
 li.innerHTML = html;
 li.addEventListener("click",
  ()=> {
   viewIntro(data);
  });
 listview.appendChild(li);
}

function createArticle(data) {
 let html = `<h1>${data.title}</h1>
 <p>${data.desc}</p> <img src="${data.image}" alt="Article" />`;
 let li = document.createElement("li");
 li.className = "item";
 li.innerHTML = html;
 li.addEventListener("click",
  ()=> {
   viewArticle(data);
  });
 listview.appendChild(li);
}
function createSlide(data) {
 let html = `<h1>${data.title}</h1>
 <p>${data.desc}</p> <img src="${data.image}" alt="Slide" />`;
 let li = document.createElement("li");
 li.className = "item";
 li.innerHTML = html;
 li.addEventListener("click",
  ()=> {
   viewSlide(data);
  });
 listview.appendChild(li);
}

function createImage(data) {
 let html = `<img src="${data.image}" alt="Survey Photo" />
 <div>
 ${data.name}
 </div>`
 let li = document.createElement("li");
 li.className = "item";
 li.innerHTML = html;
 li.addEventListener("click",
  ()=> {
   viewImage(data);
  });
 listview.appendChild(li);
}
function createProfile(data) {
 let html = `<h1>${data.name}</h1>
 <p>${data.major}</p>`
 let li = document.createElement("li");
 li.className = "item";
 li.innerHTML = html;
 li.addEventListener("click",
  ()=> {
   viewProfile(data);
  });
 listview.appendChild(li);
}
function createService(data) {
 let html = `<p>${data.text}</p`;
 let li = document.createElement("li");
 li.className = "item";
 li.innerHTML = html;
 li.addEventListener("click",
  ()=> {
   viewService(data);
  });
 listview.appendChild(li);
}

function loadIntro(list) {
 for (let i of list) {
  if (i) {
   createIntro(i);
  }
 }
}
function loadArticle(list) {
 //console.log(list);
 for (let i of list) {
  if (i) {
   createArticle(i);
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
function onIntro() {
 postType = "one";
 titleInput.style.display = "flex";
 imageInput.style.display = "none";
 linkInput.style.display = "flex";
 majorInput.style.display = "none";
 phInput.style.display = "none";
 descriptionInput.style.display = "flex";
 optionSelect.selectedIndex = 0;
}
function onSlide() {
 postType = "two";
 titleInput.style.display = "flex";
 imageInput.style.display = "flex";
 linkInput.style.display = "flex";
 majorInput.style.display = "none";
 phInput.style.display = "none";
 descriptionInput.style.display = "flex";
 optionSelect.selectedIndex = 1;
}
function onImage() {
 postType = "three";
 titleInput.style.display = "flex";
 imageInput.style.display = "flex";
 linkInput.style.display = "none";
 majorInput.style.display = "none";
 phInput.style.display = "none";
 descriptionInput.style.display = "none";
 optionSelect.selectedIndex = 2;
}
function onProfile() {
 postType = "four";
 titleInput.style.display = "flex";
 imageInput.style.display = "flex";
 linkInput.style.display = "none";
 majorInput.style.display = "flex";
 phInput.style.display = "flex";
 descriptionInput.style.display = "none";
 optionSelect.selectedIndex = 3;
}
function onService() {
 postType = "five";
 titleInput.style.display = "flex";
 imageInput.style.display = "none";
 linkInput.style.display = "none";
 majorInput.style.display = "none";
 phInput.style.display = "none";
 descriptionInput.style.display = "flex";
 optionSelect.selectedIndex = 4;
}
function onArticle() {
 postType = "six";
 titleInput.style.display = "flex";
 imageInput.style.display = "flex";
 linkInput.style.display = "none";
 majorInput.style.display = "none";
 phInput.style.display = "none";
 descriptionInput.style.display = "flex";
 optionSelect.selectedIndex = 5;
}
// End Inject

function onMenu() {
 //console.log("onMenu");
 if (isOpenMenu) {
  menuLayout.style.height = "0";
  isOpenMenu = false;
  //console.log("onMenuClose");
 } else {
  //console.log("onMenuOpen");
  menuLayout.style.height = "100%";
  isOpenMenu = true;
 }
}

function onServiceLayout() {
 //console.log("onService");
 if (isOpenServiceLayout) {
  clearAllInput();
  serviceLayout.style.height = "0";
  isOpenServiceLayout = false;
  //console.log("onServiceClose");
 } else {
  //console.log("onServiceOpen");
  onArticle();
  serviceLayout.style.height = "100%";
  isOpenServiceLayout = true;
 }
}

function onAdd() {
 let a = generateID() + "";
 let b = titleInput.value.trim() + "";
 let c = descriptionInput.value.trim() + "";
 let d = imageInput.value.trim() + "";
 let f = linkInput.value.trim() + "";
 let g = majorInput.value.trim() + "";
 let h = phInput.value.trim() + "";
 if (openPost!==null) {
  a = openPost.key;
 }
 let list = [];
 let post = {
  key: a,
  title: b,
  desc: d
 };
 if (b) {

  // to storage specific path
  if (postType === "one") {
   list = introList;
   post = {
    key: a,
    title: b,
    desc: c,
    link: f
   };
  } else if (postType === "two") {
   list = slideList;
   post = {
    key: a,
    title: b,
    desc: c,
    link: f,
    image: d
   };
  } else if (postType === "three") {
   list = imageList;
   post = {
    key: a,
    name: b,
    image: d
   };
  } else if (postType === "four") {
   list = profileList;
   post = {
    key: a,
    name: b,
    major: g,
    ph: h,
    image: d
   };
  } else if (postType === "five") {
   list = serviceList;
   post = {
    key: a,
    title: b,
    desc: c
   };
  } else if (postType === "six") {
   list = postList;
   post = {
    key: a,
    title: b,
    desc: c,
    image: d
   };
  }

  if (add.textContent === "Add") {
   createPost(post, postType);
  } else {
   updatePost(post, postType, list);
  }
 } else {
  alert("Required to fill form!");
 }
}
function openView() {
 viewLayout.style.height = "100%";
 if (openPost) {
  if (openPost.title !== undefined) {
   viewTitle.innerHTML = openPost.title;
  } else {
   viewTitle.innerHTML = openPost.name;
  }
  if (openPost.desc !== undefined) {
   viewDescription.innerHTML = openPost.desc;
  } else {
   viewDescription.innerHTML = openPost.toString();
  }


 }
}
function closeView() {
 viewLayout.style.height = "0";
}
function onDelete() {
 let list = [];
 if (postType === "one") {
  list = introList;
 } else if (postType === "two") {
  list = slideList;
 } else if (postType === "three") {
  list = imageList;
 } else if (postType === "four") {
  list = profileList;
 } else if (postType === "five") {
  list = serviceList;
 } else if (postType === "six") {
  list = postList;
 }
 if (openPost) {
  let ask = confirm("Do you want to delete " + openPost.title + "?");
  if (ask) {
   deletePost(openPost, postType, list);
   clearAllInput();
  }
 } else {
  alert("Post is read only!");
 }
}

function generateID() {
 const timestamp = Date.now().toString(36);
 const randomPart = Math.random().toString(36).substr(2, 5);
 return `${timestamp}-${randomPart}`;
}

function clearAllInput() {
 openPost = null;
 titleInput.value = "";
 imageInput.value = "";
 linkInput.value = "";
 majorInput.value = "";
 phInput.value = "";
 descriptionInput.value = "";
 postView.style.display = "none";
 postDelete.style.display = "none";
 add.textContent = "Add";
 postTitle.textContent = "Add Post";
}

let saveLogin = localStorage.getItem("saveLogin");
if (saveLogin === "login") {
 loginLayout.style.display = "none";
} else {
 loginLayout.style.display = "flex";
}
function onLogin() {
 if (
  username.value.toLowerCase().trim() === "admin" &&
  password.value.trim() === "1234"
 ) {
  loginLayout.style.display = "none";
  if (saveme.checked) {
   localStorage.setItem("saveLogin", "login");
  } else {
   localStorage.setItem("saveLogin", "signup");
  }
 } else {
  alert("Username or Password is incorrect. Please try again!");
 }
}
function onLogout() {
 let ask = confirm("Do you want to logout?");
 if (ask) {
  loginLayout.style.display = "flex";
  localStorage.setItem("saveLogin", "logout");
 }
}