let myName = document.querySelector(".mPProfileName");
let myNic = document.querySelector(".mPNowNic");
let myNicChange = document.querySelector(".mPNicChange");
let myLogout = document.querySelector(".mPProfileLogout");
let member = JSON.parse(sessionStorage.getItem("member"));
const sessionUser = JSON.parse(sessionStorage.getItem("user"));

myName.innerHTML = `${sessionUser.name}`;
myNic.innerHTML = `${sessionUser.nick}`;
myNicChange.addEventListener("click", () => {});
myLogout.addEventListener("click", () => {
  sessionStorage.removeItem("user");
  document.location.href = "./index.html";
});
// 세션유무에 따른 메뉴바 처리
// let isLogin = false;
// const menuBar = document.querySelector("nav.cyy_nav");
// for (i = 0; i < member.length; i++) {
//   if (sessionUser?.id === member[i].id) {
//     console.log(sessionUser?.id);
//     isLogin = true;
//     break;
//   }
// }
// if (isLogin) {
//   menuBar.querySelector("#login")?.remove();
//   let logout = document.querySelector("#logout");
//   let logoutText = logout?.getAttribute("data-link");
//   logout?.setAttribute("data-link", logoutText + "(" + sessionUser?.nick + ")");
// } else {

// }
