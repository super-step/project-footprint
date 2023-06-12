document.addEventListener("DOMContentLoaded", () => {
  const main_to_map = document.querySelector(".main_to_map img");

  main_to_map.addEventListener(
    "click",
    window.scrollTo(0, document.body.scrollHeight)
  );
});
