let myName = document.querySelector(".mPProfileName");
let myNic = document.querySelector(".mPNowNic");
let myNicChange = document.querySelector(".mPNicChange");
let myLogout = document.querySelector(".mPProfileLogout");
let myPWChange = document.querySelector(".mPPWChange");
let modalValueChange = document.querySelector("#my_modal_change_btn");
let like1 = document.querySelector(".mPLikeTitle:");

let member = JSON.parse(sessionStorage.getItem("member"));
const sessionUser = JSON.parse(sessionStorage.getItem("user"));
myName.innerHTML = `${sessionUser.name}`;
console.log(sessionUser.nick);
myNic.innerHTML = `${sessionUser.nick}`;
myNicChange.addEventListener("click", () => {
  let modal_title = document.querySelector(".my_modal_title h2");
  modal_title.innerHTML = "닉네임 변경";
  modal.style.display = "flex";

  modalValueChange.addEventListener("click", () => {
    let myChangeValue = document.querySelector(
      "input[name=myChangeValue]"
    ).value;
    console.log(myChangeValue);

    sessionUser.nick = myChangeValue;
    console.log(sessionUser.nick);

    alert(`변경되었습니다.${myChangeValue}`);

    sessionStorage.setItem("user", JSON.stringify(sessionUser));
  });
});
myLogout.addEventListener("click", () => {
  sessionStorage.removeItem("user");
  document.location.href = "./index.html";
});
myPWChange.addEventListener("click", () => {
  let modal_title = document.querySelector(".my_modal_title h2");
  modal_title.innerHTML = "비밀번호 변경";
  modal.style.display = "flex";

  modalValueChange.addEventListener("click", () => {
    let myChangeValue = document.querySelector(
      "input[name=myChangeValue]"
    ).value;
    console.log(myChangeValue);

    sessionUser.password = myChangeValue;
    console.log(sessionUser.password);

    alert(`변경되었습니다.${sessionUser.password}`);

    sessionStorage.setItem("user", JSON.stringify(sessionUser));
  });
});

// modalValueChange.addEventListener("click", () => {
//   let myChangeValue = document.querySelector("input[name=myChangeValue]").value;
//   console.log(myChangeValue);

//   sessionUser.nick = myChangeValue;
//   console.log(sessionUser.nick);

//   alert(`변경되었습니다.${myChangeValue}`);

//   sessionStorage.setItem("user", JSON.stringify(sessionUser));
// });

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
