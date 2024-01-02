// INIT VARIABLE
let isOpenServiceLayout = false;
let isOpenMenu = false;
let onlineArrayList = [];
let arrayList = [];
let introList = [];
let slideList = [];
let imageList = [];
let profileList = [];
let serviceList = [];
let postList = [];
let openPost = null;
let postType;
let shaKey;
const endPoint =
"https://api.github.com/repos/heinhtetaungyi/labs/obes/data/obes.json";
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



// Start Inject
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
 if (isOpenMenu) {
  menuLayout.style.height = "0";
  isOpenMenu = false;
 } else {
  menuLayout.style.height = "100%";
  isOpenMenu = true;
 }
}

function onServiceLayout() {
 if (isOpenServiceLayout) {
  clearAllInput();
  serviceLayout.style.height = "0";
  isOpenServiceLayout = false;
 } else {
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
 if (openPost !== null) {
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

// SERVER RENDERRING
function loadPost() {
 let jsonData = [];
 fetch(endPoint,
  {
   headers: {
    Authorization: `token ${accessToken}`
   }
  })
 .then(response => response.json())
 .then(existingData => {

  try {
   jsonData = JSON.parse(customAtob(existingData.content));
  } catch (e) {
   jsonData = [];
  }
  shaKey = existingData.sha;
  onlineArrayList = jsonData;
  arrayList = jsonData;
  for (let item of jsonData) {
   if (item) {
    console.log(item);
    listview.innerHTML = "";
    introList = item.intro;
    postList = item.posts;
    slideList = item.slides;
    imageList = item.photos;
    profileList = item.profiles;
    serviceList = item.services;
    loadIntro(introList);
    loadArticle(postList);
    loadSlide(slideList);
    loadImage(imageList);
    loadProfile(profileList);
   }
  }
 })
 .catch(error => {
  console.error("Error fetching JSON data:", error);
 });
}
function createPost(post, type) {
 fetch(endPoint,
  {
   headers: {
    Authorization: `token ${accessToken}`
   }
  })
 .then(response => response.json())
 .then(existingData => {
  shaKey = existingData.sha;
  let jsonData = [];
  try {
   jsonData = JSON.parse(customAtob(existingData.content));
  } catch (e) {
   jsonData = [];
  }
  if (!Array.isArray(jsonData)) {
   jsonData = [];
  }
  for (let i = 0; i < jsonData.length; i++) {
   if (type === "one") {
    let list = jsonData[i].intro;
    if (!Array.isArray(list)) {
     list = [];
    }
    list.push(post);
    updateArrayList(list, type);
    break;
   } else if (type === "two") {
    let list = jsonData[i].slides;
    if (!Array.isArray(list)) {
     list = [];
    }
    list.push(post);
    updateArrayList(list, type);
    break;
   } else if (type === "three") {
    let list = jsonData[i].photos;
    if (!Array.isArray(list)) {
     list = [];
    }
    list.push(post);
    updateArrayList(list, type);
    break;
   } else if (type === "four") {
    let list = jsonData[i].profiles;
    if (!Array.isArray(list)) {
     list = [];
    }
    list.push(post);
    updateArrayList(list, type);
    break;
   } else if (type === "five") {
    let list = jsonData[i].services;
    if (!Array.isArray(list)) {
     list = [];
    }
    list.push(post);
    updateArrayList(list, type);
    break;
   } else if (type === "six") {
    let list = jsonData[i].posts;
    if (!Array.isArray(list)) {
     list = [];
    }
    list.push(post);
    updateArrayList(list, type);
    break;
   }
  }
 })
 .catch(error => {
  alert("Error fetching: " + error);
  console.error("Fetch error:",
   error);
 });
}

function updatePost(post, type, list) {
 for (let i = 0; i < list.length; i++) {
  if (list[i].key === post.key) {
   list[i] = post;
   updateArrayList(list, type);
   break;
  }
 }
}

function deletePost(post, type, list) {
 for (let i = 0; i < list.length; i++) {
  if (list[i].key === post.key) {
   list.splice(i, 1);
   //console.log("on list:", list, type);
   updateArrayList(list, type);
   break;
  }
 }
}

function updateArrayList(array, type) {
 let jsonData = [];
 fetch(endPoint,
  {
   headers: {
    Authorization: `token ${accessToken}`
   }
  })
 .then(response => response.json())
 .then(existingData => {
  shaKey = existingData.sha;
  jsonData = [];
  try {
   jsonData = JSON.parse(customAtob(existingData.content));
  } catch (e) {
   jsonData = [];
  }
  if (!Array.isArray(jsonData)) {
   jsonData = [];
  }
  // to do
  for (let i = 0; i < jsonData.length; i++) {
   if (type === "one") {
    jsonData[i].intro = array;
    introList = jsonData[i].intro;
    break;
   } else if (type === "two") {
    jsonData[i].slides = array;
    slideList = jsonData[i].slides;
    break;
   } else if (type === "three") {
    jsonData[i].photos = array;
    imageList = jsonData[i].photos;
    break;
   } else if (type === "four") {
    jsonData[i].profiles = array;
    profileList = jsonData[i].profiles;
    break;
   } else if (type === "five") {
    jsonData[i].services = array;
    serviceList = jsonData[i].services;
    break;
   } else if (type === "six") {
    jsonData[i].posts = array;
    postList = jsonData[i].posts;
    //console.log("onsix:", postList);
   }
  }
  updateDataList(jsonData);
 });
}

function updateDataList(array) {
 let data = JSON.stringify(array,
  null,
  2);
 data = customBtoa(data);
 fetch(endPoint,
  {
   method: "PUT",
   headers: {
    Authorization: `token ${accessToken}`,
    "Content-Type": "application/json"
   },
   body: JSON.stringify({
    message: "Update file.json",
    content: data,
    sha: shaKey
   })
  })
 .then(response => {
  if (response.ok) {
   alert("success!");
  } else {
   response.json().then(errorData => {
    alert("Error: " + response.statusText);
    console.error(
     "Error Updating",
     response.status,
     response.statusText,
     errorData
    );
   });
  }
 })
 .catch(error => {
  alert("Error realtime fetching: " + error);
  console.error("realtime fetch error:", error);
 });
}
function customAtob(str) {
 return decodeURIComponent(escape(atob(str)));
}
function customBtoa(str) {
 return btoa(unescape(encodeURIComponent(str)));
}
loadPost();