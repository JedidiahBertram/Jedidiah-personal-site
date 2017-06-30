$(document).ready(function() {

  $(".smiling").mouseenter(function() {
    $(this).addClass("change").delay(7000).queue(function() {
      $(this).removeClass("change").dequeue();
    });
  });
  var position = 0;
  $(".scroll0").click(function(event) {
    console.log(position);
    if (position === 1) {
      $('html, body').animate({
        scrollTop: '-=632px'
      }, 500);
    } else if (position > 1) {
      $('html, body').animate({
        scrollTop: '-=1300px'
      }, 500);
      position = 0;
    }
  });
  $(".scroll1").click(function(event) {
    position += 1;
    console.log(position);
    if (position === 1) {
      $('html, body').animate({
        scrollTop: '+=632px'
      }, 500);
    } else if (position > 1) {
      $('html, body').animate({
        scrollTop: '-=631px'
      }, 500);
    }
  });
  $(".scroll2").click(function(event) {
    position += 2;
    console.log(position);
    $('html, body').animate({
      scrollTop: '+=1300px'
    }, 500);
  });
});;
