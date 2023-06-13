document.addEventListener("DOMContentLoaded", () => {
  const gj_map = document.querySelector("area[target='gj_map']");
  const main_intro = document.querySelector(".main_intro");
  gj_map.addEventListener("click", (main_intro.style.color = "red"));

  if ($("#image-map")) {
    $("#image-map area").each(function() {
      var id = $(this).attr('id');
      $(this).mouseover(function() {
      $('#overlay' + id).show();
    }
      $(this).mouseout(function() {
      var id = $(this).attr('id');
      $('#overlay' + id).hide();
    });


  });
  }

  
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
