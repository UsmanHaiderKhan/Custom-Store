$(document).ready(function () {

  //------ Getting Image Source ------- //
  $("#hood .product_size").on('click', function () {
    var source = $(this).attr('src');
    $(".hoods").attr('src', source);
  });

  $("#gallon .product_size").on('click', function () {
    var source1 = $(this).attr('src');
    $(".border-left").find('img').attr('src', source1);
  });
  $("#burner #drag1").on('click', function () {
    var get_img = $(this).attr('src');
    $("#apl-1").attr('src', get_img);
  });
  $("#burner #drag2").on('click', function () {
    var get_img1 = $(this).attr('src');
    $("#apl-2").attr('src', get_img1);
  });
  $("#burner #drag3").on('click', function () {
    var get_img2 = $(this).attr('src');
    $("#apl-3").attr('src', get_img2);
  });
  $("#burner #drag4").on('click', function () {
    var get_img3 = $(this).attr('src');
    $("#apl-4").attr('src', get_img3);
  });
  $("#fryer .product_size").on('click', function () {
    var get_img4 = $(this).attr('src');
    $("#apl-5").attr('src', get_img4);
  });
  $("#unknown .product_size").on('click', function () {
    var get_img5 = $(this).attr('src');
    $("#apl-5").attr('src', get_img5);
  });



});