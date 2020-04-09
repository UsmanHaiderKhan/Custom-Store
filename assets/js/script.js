// $(document).ready(function () {

//------ Getting Image Source ------- //
// function getImageD() {
//   var myImg = document.querySelector(".hoods");
//   var realWidth = myImg.naturalWidth;
//   return realWidth;
// }
$('#hood .hoods-size').on('click', function () {
  if ($(this).attr('data-click-state') == 1) {
    $(this).attr('data-click-state', 0);
    $(".hoods").attr('src', "");
  } else {
    $(this).attr('data-click-state', 1);
    var source = $(this).attr('src');
    $(".hoods").attr('src', source);
  }
});

// var realWidth = 641;
// var borderwidth = $(".appliences-setting").width();
// console.log("Border-width=" + borderwidth);
// console.log("Your real Width is:" + realWidth);
// if (borderwidth <= realWidth) {

$("#gallon #c1 ").on('click', function () {
  $("#gallon-1").addClass("d-block");
  $("#gallon-2").removeClass("d-block");
  $("#gallon-3").removeClass("d-block");

});
$("#gallon #c2 ").on('click', function () {
  $("#gallon-2").addClass("d-block");
  $("#gallon-1").removeClass("d-block");
  $("#gallon-3").removeClass("d-block");
});
$("#gallon  #c3").on('click', function () {
  $("#gallon-3").addClass("d-block");
  $("#gallon-2").removeClass("d-block");
  $("#gallon-1").removeClass("d-block");
});

$('#burner #drag1').on('click', function () {
  if ($(this).attr('data-click-state') == 1) {
    $(this).attr('data-click-state', 0);
    $("#apl-1").attr('src', "");
  } else {
    $(this).attr('data-click-state', 1);
    var get_img = $(this).attr('src');
    var burner_1 = $("#apl-1").attr('src', get_img);
    var burnerwidth_1 = burner_1.width();
    console.log(burnerwidth_1);

  }
});
$('#burner #drag2').on('click', function () {
  if ($(this).attr('data-click-state') == 1) {
    $(this).attr('data-click-state', 0);
    $("#apl-2").attr('src', "");
  } else {
    $(this).attr('data-click-state', 1);
    var get_img1 = $(this).attr('src');
    var burner_2 = $("#apl-2").attr('src', get_img1);
    var burnerwidth_2 = burner_2.width();
    console.log(burnerwidth_2);
  }
});
$('#burner #drag3').on('click', function () {
  if ($(this).attr('data-click-state') == 1) {
    $(this).attr('data-click-state', 0);
    $("#apl-3").attr('src', "");
  } else {
    $(this).attr('data-click-state', 1);
    var get_img2 = $(this).attr('src');
    var burner_3 = $("#apl-3").attr('src', get_img2);
    var burnerwidth_3 = burner_3.width();
    console.log(burnerwidth_3);
  }
});
$('#burner #drag4').on('click', function () {
  if ($(this).attr('data-click-state') == 1) {
    $(this).attr('data-click-state', 0);
    $("#apl-4").attr('src', "");

  } else {
    $(this).attr('data-click-state', 1);
    var get_img3 = $(this).attr('src');
    var burner_4 = $("#apl-4").attr('src', get_img3);
    var burnerwidth_4 = burner_4.width();
    console.log(burnerwidth_4);
  }
});
$('#fryer .product_size').on('click', function () {
  if ($(this).attr('data-click-state') == 1) {
    $(this).attr('data-click-state', 0);
    $("#apl-5").attr('src', "");

  } else {
    $(this).attr('data-click-state', 1);
    var get_img4 = $(this).attr('src');
    var burner_5 = $("#apl-5").attr('src', get_img4);
    var burnerwidth_5 = burner_5.width();
    console.log(burnerwidth_5);

  }
});
$('#unknown .product_size').on('click', function () {
  if ($(this).attr('data-click-state') == 1) {
    $(this).attr('data-click-state', 0);
    $("#apl-5").attr('src', "");

  } else {
    $(this).attr('data-click-state', 1);
    var get_img4 = $(this).attr('src');
    var burner_6 = $("#apl-5").attr('src', get_img4);
    var burnerwidth_6 = burner_6.width();
    console.log(burnerwidth_6);
  }
});
// console.log(burnerwidth_6);

  // } else {
  //   alert("Your Limit is up");
  // }
// });