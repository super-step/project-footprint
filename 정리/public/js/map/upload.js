const nav_sns_upload = document.getElementById("nav_sns_upload");
nav_sns_upload.addEventListener("click", () => {
  location.replace(`../views/sns_upload.html?type=0&name=${area.name}`);
});
nav_sns_upload.addEventListener("click", () => {
  // 커스텀 오버레이를 전부 닫고
  customOverlays.forEach((element) => {
    element.setMap(null);
  });
  // Todo : 선택한 마커의 글 리스트를 보여주는 부분을 추가해줘야 됨.
  const sideCon = document.querySelector(".side_right");
  const sideList = document.querySelector(".right_list");
  const titleLable = document.querySelector(".titleLable");
  // 리스트의 내용 전부 지우기
  if (sideCon.firstChild) {
    sideCon.removeChild(sideCon.firstChild);
  }
  // while (sideList.firstChild) {
  //   sideList.removeChild(sideList.firstChild);
  // }

  // 글 리스트 불러와서 세팅
  let totalHTML = `          <div class="upload_header_box">글쓰기</div>
  <form id="upload_form">
    <div id="upload_img_container">
      <label id="upload_img"
        ><img src="../image/img_book_none.png" alt=""
      /></label>
      <input
        type="file"
        class="real-upload"
        accept="image/*"
        required
        multiple
      />
    </div>
    <div id="upload_title">
      <label>title</label>
      <input type="text" id="password" name="password" />
    </div>
    <div id="upload_contents">
      <label>contents</label>
      <textarea
        name=""
        id=""
        cols="1"
        rows="2"
        maxlength="55"
      ></textarea>
    </div>
    <div id="upload_btn_container">
      <button type="button" id="upload_btn">UPLOAD</button>
    </div>
  </form>`;

  // let totalHTML = sideList.innerHTML;
  //   const snsboxString = `<div class="sns_box">
  //   <div class="sns_img">
  //     <img class="img" src="${snsCotents[0].img}" alt="" />
  //   </div>
  //   <div class="sns_title"><h2>${snsCotents[0].title}</h2></div>
  // </div>`;
  // totalHTML = totalHTML + snsboxString;
  // console.log(snsboxString);
  sideList.innerHTML = totalHTML;

  titleLable.textContent = marker.getTitle();
  sideList.appendChild(titleLable);
  sideList.classList.add("right_showit");
  sideCon.appendChild(sideList);
  // 선택한 오버레이를 열어준다.
  customOverlay.setMap(map);
});
