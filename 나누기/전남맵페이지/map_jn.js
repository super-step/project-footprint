document.addEventListener("DOMContentLoaded", () => {
  for (let index = 1; index < 23; index++) {
    let area = document.querySelector(
      `.jn_map_container a:nth-of-type(${index})`
    );
    if (area.id == "Yeosu") {
      area.addEventListener("click", () => {
        location.href = "../views/API_map_Yeosu.html";
      });
    } else {
      area.addEventListener("click", () => {
        alert("업데이트 중");
      });
    }
  }
});
