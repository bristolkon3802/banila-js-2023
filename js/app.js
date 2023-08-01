//key = "FcdnbCeOTvnZ7%2FWsLX6ElR7cQSCSJ4tp1sIUxY8zxi89y7rmbfQSlta2lU5RO8n3tw1YRO%2FctCZVhr4M5G8iKw%3D%3D"
//사이트 = https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15084084#tab_layer_detail_function

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HEDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function handleLoginSubmit(e) {
  e.preventDefault();
  const username = loginInput.value;
  loginForm.classList.add(HEDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, username);
  paintGreeting(username);
}

function paintGreeting(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HEDDEN_CLASSNAME);
}

loginForm.addEventListener("submit", handleLoginSubmit);

const savedusername = localStorage.getItem(USERNAME_KEY);
if (savedusername === null) {
  loginForm.classList.remove(HEDDEN_CLASSNAME);
  loginForm.addEventListener("submit", handleLoginSubmit);
} else {
  paintGreeting(savedusername);
}

//const googleForm = document.querySelector("#google-form");
const googleInput = document.querySelector("#google-form input");
//const naverForm = document.querySelector("#naver-form");
const naverInput = document.querySelector("#naver-form input");
