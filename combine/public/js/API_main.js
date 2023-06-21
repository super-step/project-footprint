document.addEventListener("DOMContentLoaded", () => {
  const nav_sns_all = document.getElementById("nav_sns_all");
  const nav_sns_fes = document.getElementById("nav_sns_fes");
  const nav_sns_travel = document.getElementById("nav_sns_travel");
  const nav_sns_res = document.getElementById("nav_sns_res");
  const nav_sns_upload = document.querySelector("#nav_sns_upload");

  nav_sns_upload.addEventListener("click", () => {
    alert(nav_sns_upload.value);
    location.href("../views/sns_upload.html");
  });
});
