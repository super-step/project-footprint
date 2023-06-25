const nav_sns_all = document.getElementById("nav_sns_all");
const nav_sns_fes = document.getElementById("nav_sns_fes");
const nav_sns_travel = document.getElementById("nav_sns_travel");
const nav_sns_res = document.getElementById("nav_sns_res");
const nav_sns_upload = document.querySelector("#nav_sns_upload");
let markerType = 0;
nav_sns_upload.addEventListener("click", () => {
  location.href = "../views/sns_upload.html";
});
nav_sns_all.addEventListener("click", () => {
  markerType = "0";
});
nav_sns_fes.addEventListener("click", () => {
  markerType = "1";
});
nav_sns_travel.addEventListener("click", () => {
  markerType = "2";
});
nav_sns_res.addEventListener("click", () => {
  markerType = "3";
});
