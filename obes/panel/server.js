// INITIAL
let arrayList = [];
let introList = [];
let slideList = [];
let imageList = [];
let profileList = [];
let serviceList = [];
let postList = [];
function loadRaw() {
 fetch("https://raw.githubusercontent.com/MDHein/DScript/main/upload/obes.json")
 .then(response => response.json())
 .then(jsonData => {
  onlineArrayList = jsonData;
  arrayList = jsonData;
  for (let item of jsonData) {
   if (item) {
    //console.log(item);
    listview.innerHTML = "";
    introList = item.intro;
    postList = item.posts;
    slideList = item.slides;
    imageList = item.photos;
    profileList = item.profiles;
    serviceList = item.services;
    loadIntro(introList);
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

function addRaw(post, type) {
 fetch(endPoint,
  {
   headers: {
    Authorization: `token ${accessToken}`
   }
  })
 .then(response => response.json())
 .then(existingData => {
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
    introList = list;
    jsonData[i].intro = list;
    break;
   } else if (type === "two") {
    let list = jsonData[i].slides;
    if (!Array.isArray(list)) {
     list = [];
    }
    list.push(post);
    slideList = list;
    jsonData[i].slides = list;
    break;
   } else if (type === "three") {
    let list = jsonData[i].photos;
    if (!Array.isArray(list)) {
     list = [];
    }
    list.push(post);
    imageList = list;
    jsonData[i].photos = list;
    break;
   } else if (type === "four") {
    let list = jsonData[i].profiles;
    if (!Array.isArray(list)) {
     list = [];
    }
    list.push(post);
    profileList = list;
    jsonData[i].profiles = list;
    break;
   } else if (type === "five") {
    let list = jsonData[i].services;
    if (!Array.isArray(list)) {
     list = [];
    }
    list.push(post);
    serviceList = list;
    jsonData[i].services = list;
    break;
   }
  }
  onlineArrayList = jsonData;
  shaKey = existingData.sha;
  //console.log("002" + shaKey);
  // realtime update
  let updatedJsonData = JSON.stringify(jsonData, null, 2);
  updatedJsonData = customBtoa(updatedJsonData);

  fetch(endPoint, {
   method: "PUT",
   headers: {
    Authorization: `token ${accessToken}`,
    "Content-Type": "application/json"
   },
   body: JSON.stringify({
    message: "Update file.json",
    content: updatedJsonData,
    sha: existingData.sha
   })
  })
  .then(response => {
   if (response.ok) {
    clearAllInput();
    alert("New add successfully.");
   } else {
    response.json().then(errorData => {
     alert("Error posting: " + response.statusText);
     console.error(
      "Error posting",
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
 })
 .catch(error => {
  alert("Error fetching: " + error);
  console.error("Fetch error:",
   error);
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
// OPTIONAL
function newOptional(post, list) {
 console.log("onupdate list:");
 for (let i of list) {
  if (i.key === post.key) {
   list[list.indexOf(i)] = post;
   updateArrayList(list);
   break;
  }
 }
}
function updatePost(post, type, list) {
 console.log("onupdate list:");
 for (let i = 0; i < list.length; i++) {
  if (list[i].key === post.key) {
   list[i] = post;
   updateArrayList(list, type);
   break;
  }
 }
}

function deletePost(post, type, list) {
 //console.log("ondelete list:", list);
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