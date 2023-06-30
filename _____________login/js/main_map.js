const map = [
  { name: "gj", deepLv: 1 },
  { name: "bs", deepLv: 1 },
  { name: "us", deepLv: 1 },
  { name: "dg", deepLv: 1 },
  { name: "dj", deepLv: 1 },
  { name: "sj", deepLv: 1 },
  { name: "su", deepLv: 1 },
  { name: "ic", deepLv: 1 },
  { name: "jj", deepLv: 1 },
  { name: "jn", deepLv: 2 },
  { name: "jb", deepLv: 2 },
  { name: "gn", deepLv: 2 },
  { name: "gb", deepLv: 2 },
  { name: "cb", deepLv: 2 },
  { name: "cn", deepLv: 2 },
  { name: "gg", deepLv: 2 },
  { name: "go", deepLv: 2 },
];

document.addEventListener("DOMContentLoaded", () => {
  function setNowMap(id, mapName) {
    for (var i = 0; i < jsonObj.length; i++) {
      if (jsonObj[i].Id === id) {
        jsonObj[i].Username = newUsername;
        return;
      }
    }
  }
  for (let area of map) {
    const img_area = document.querySelector(`area[title='${area.name}_map']`);
    const img = document.querySelector(
      `.map_container img[id='map_${area.name}']`
    );
    const area_tab = document.querySelector(`input[id='${area.name}_tab']`);
    img_area.addEventListener("mouseover", () => {
      img.style.opacity = 1;
    });
    img_area.addEventListener("mouseout", () => {
      img.style.opacity = 0.5;
    });
    // 세부지도 or API 지도로 링크
    img_area.addEventListener("click", () => {
      if (area.name == "gj" || area.name == "jn") {
        if (area.deepLv == 1) {
          location.replace(`/detailmap/API_map.html?name=${area.name}&type=0`);
        } else if (area.deepLv == 2) {
          location.href = `/servemap/map_${area.name}.html`;
        }
      } else {
        alert("업데이트 예정");
      }
    });
  }
});
