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
      location.href = "../project_V7_API/index.html";
    });
  }
});
