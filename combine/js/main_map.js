const map = [
  "gj",
  "jn",
  "jb",
  "gn",
  "bs",
  "us",
  "dg",
  "gb",
  "cb",
  "dj",
  "sj",
  "cn",
  "su",
  "ic",
  "gg",
  "go",
  "jj",
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
    const img_area = document.querySelector(`area[title='${area}_map']`);
    const img = document.querySelector(`.map_container img[id='map_${area}']`);
    const area_tab = document.querySelector(`input[id='${area}_tab']`);
    img_area.addEventListener("mouseover", () => {
      img.style.opacity = 1;
    });
    img_area.addEventListener("mouseout", () => {
      img.style.opacity = 0.5;
    });
    img_area.addEventListener("click", () => {
      location.href = "./API_map.html";
    });
  }
});
