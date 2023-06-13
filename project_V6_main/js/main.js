document.addEventListener("DOMContentLoaded", () => {
  const gj_map = document.querySelector("area[title='gj_map']");
  const main_intro = document.querySelector(".main_intro");
  main_intro.addEventListener("mouseenter", (main_intro.style.color = "red"));
});

// if ($('#location-map')) {
//   $('#location-map area').each(function() {
//     var id = $(this).attr('id');
//     $(this).mouseover(function() {
//       $('#overlay' + id).show();

//     });

//     $(this).mouseout(function() {
//       var id = $(this).attr('id');
//       $('#overlay' + id).hide();
//     });

//   });
// }
