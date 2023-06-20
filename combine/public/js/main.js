document.addEventListener("DOMContentLoaded", () => {
  const toBottom = document.querySelector(".main_to_map img");
  const section = document.querySelector(".main_map_container").offsetTop;
  const intro = document.querySelector(".main_intro");
  toBottom.addEventListener("click", () => {
    intro.style.color = red;
  });
});
