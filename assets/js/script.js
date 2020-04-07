$(document).ready(function () {

  //------ Getting Image Source ------- //

  $('#hood .hoods-size').on('click', function () {
    if ($(this).attr('data-click-state') == 1) {
      $(this).attr('data-click-state', 0);
      var source = $(this).attr('src');
      $(".hoods").attr('src', source);
    } else {
      $(this).attr('data-click-state', 1);
      var source = "";
      $(".hoods").attr('src', source);
    }
  });



  // $("#hood .hoods-size").toggle(
  //   function () {
  //     var source = $(this).attr('src');
  //     $(".hoods").attr('src', source);
  // var myImg = document.querySelector(".hoods");
  // var realWidth = myImg.naturalWidth;
  // var realHeight = myImg.naturalHeight;
  //},
  // function () {
  //   var source = "";
  //   $(".hoods").attr('src', source);
  // }
  //  );
  var borderwidth = $(".appliences-setting").width();
  var width_Re = 641;

  $('#gallon .product_size').on('click', function () {
    if ($(this).attr('data-click-state') == 1) {
      $(this).attr('data-click-state', 0);
      var source1 = $(this).attr('src');
      $(".border-left").find('img').attr('src', source1);
    } else {
      $(this).attr('data-click-state', 1);
      var source1 = "";
      $(".border-left").find('img').attr('src', source1);
    }
  });

  // $("#gallon .product_size").on('click', function () {
  //   var source1 = $(this).attr('src');
  //   $(".border-left").find('img').attr('src', source1);
  // });

  $('#burner #drag1').on('click', function () {
    if ($(this).attr('data-click-state') == 1) {
      $(this).attr('data-click-state', 0);
      var get_img = $(this).attr('src');
      $("#apl-1").attr('src', get_img);
    } else {
      $(this).attr('data-click-state', 1);
      var get_img = "";
      $("#apl-1").attr('src', get_img);
    }
  });


  $('#burner #drag2').on('click', function () {
    if ($(this).attr('data-click-state') == 1) {
      $(this).attr('data-click-state', 0);
      var get_img1 = $(this).attr('src');
      $("#apl-2").attr('src', get_img1);
    } else {
      $(this).attr('data-click-state', 1);
      var get_img1 = "";
      $("#apl-2").attr('src', get_img1);
    }
  });


  $('#burner #drag3').on('click', function () {
    if ($(this).attr('data-click-state') == 1) {
      $(this).attr('data-click-state', 0);
      var get_img2 = $(this).attr('src');
      $("#apl-3").attr('src', get_img2);
    } else {
      $(this).attr('data-click-state', 1);
      var get_img2 = "";
      $("#apl-3").attr('src', get_img2);
    }
  });

  $('#burner #drag4').on('click', function () {
    if ($(this).attr('data-click-state') == 1) {
      $(this).attr('data-click-state', 0);
      var get_img3 = $(this).attr('src');
      $("#apl-4").attr('src', get_img3);
    } else {
      $(this).attr('data-click-state', 1);
      var get_img3 = "";
      $("#apl-4").attr('src', get_img3);
    }
  });


  $('#fryer .product_size').on('click', function () {
    if ($(this).attr('data-click-state') == 1) {
      $(this).attr('data-click-state', 0);
      var get_img4 = $(this).attr('src');
      $("#apl-5").attr('src', get_img4);
    } else {
      $(this).attr('data-click-state', 1);
      var get_img4 = "";
      $("#apl-5").attr('src', get_img4);
    }
  });

  $('#unknown .product_size').on('click', function () {
    if ($(this).attr('data-click-state') == 1) {
      $(this).attr('data-click-state', 0);
      var get_img4 = $(this).attr('src');
      $("#apl-5").attr('src', get_img4);
    } else {
      $(this).attr('data-click-state', 1);
      var get_img4 = "";
      $("#apl-5").attr('src', get_img4);
    }
  });
});