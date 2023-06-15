document.addEventListener("DOMContentLoaded", () => {
  const gj_map = document.querySelector("area[title='gj_map']");
  const jn_map = document.querySelector("area[title='jn_map']");
  const gj_img = document.querySelector(".map_container img[id='map_gj']");
  const jn_img = document.querySelector(".map_container img[id='map_jn']");
  gj_map.addEventListener("mouseover", () => {
    gj_img.style.opacity = 1;
  });
  gj_map.addEventListener("mouseout", () => {
    gj_img.style.opacity = 0.5;
  });
  jn_map.addEventListener("mouseover", () => {
    jn_img.style.opacity = 1;
  });
  jn_map.addEventListener("mouseout", () => {
    jn_img.style.opacity = 0.5;
  });
});
