$(document).ready(function() {

  $(".smiling").mouseenter(function() {
    $(this).addClass("change").delay(7000).queue(function() {
      $(this).removeClass("change").dequeue();
    });

  });
  // $(function() {
  //   var $elie = $(".smiling"),
  //     degree = 0,
  //     timer;
  //   rotate();
  //
  //   function rotate() {
  //
  //     $elie.css({
  //       WebkitTransform: 'rotate(' + degree + 'deg)'
  //     });
  //     $elie.css({
  //       '-moz-transform': 'rotate(' + degree + 'deg)'
  //     });
  //     timer = setTimeout(function() {
  //       ++degree;
  //       rotate();
  //     }, 5);
  //   }
  //
  //   $("input").toggle(function() {
  //     clearTimeout(timer);
  //   }, function() {
  //     rotate();
  //   });
  // });

});;
