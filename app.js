// const h1 = document.querySelector(".hello1");

// function clickEvent() {
//   h1.classList.toggle("active");
//   //   const clickedClass = "active";
//   //   if (h1.classList.contains(clickedClass)) {
//   //     h1.classList.remove(clickedClass);
//   //   } else {
//   //     h1.classList.add(clickedClass);
//   //   }
//   // }
// }
// h1.addEventListener("click", clickEvent);

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem("USERNAME_KEY", username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem("USERNAME_KEY");

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
