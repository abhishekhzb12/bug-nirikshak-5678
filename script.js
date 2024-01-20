// -----------------------sujeet_start--------------------------

let loginEmailInput = document.getElementById("loginEmail");
let loginPasswordInput = document.getElementById("loginPassword");
let loginBtn = document.getElementById("loginBtn");

// loginBtn.addEventListener("click",()=>{
//   let existingUserEmail = loginEmailInput.value;
//   let existingUserPassword = loginPasswordInput.value;
//   let usersSign = JSON.parse(localStorage.getItem("user")) || [];

//   let result = false;
// for(let i=0;i<usersSign.length;i++){
// if(usersSign[i].email == existingUserEmail && usersSign[i].password == existingUserPassword){
// result = true;

// }
// }
// if(!result){
//   alert("Check you email & password");
// }else{
// alert("Welcome to Language ! Best E-language App");
// window.location.href="nav.html";
// }
// })

// ----------------------sign up---------------

let signupInput = document.getElementById("email");
let signupPasswordInput = document.getElementById("password");
let signupBtn = document.getElementById("signUpBtn");

// signupInput.innerHTML="";
// signupPasswordInput.innerHTML="";

signupBtn.addEventListener("click", () => {
  let newUser = signupInput.value;
  let user = JSON.parse(localStorage.getItem("user")) || [];

let userData=user.filter((item) => {
  if(item.email==newUser){
    return item;
  } 
  });
  if(userData.length>0){
    alert("You have already Signed up, please log in");
    window.location.href = "login.html";
    
  }
  if(userData.length>0){
    return
  }
  let useObj = {
    email: signupInput.value,
    password: signupPasswordInput.value,
  };
  user.push(useObj);
  localStorage.setItem("user", JSON.stringify(user));
  
  alert("You sucessessfully sign up!");
    window.location.href="nav.html"
});


// -----------------------sujeet_end----------------------------