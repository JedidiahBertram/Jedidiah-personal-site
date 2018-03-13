$(document).ready(function() {
  var position = 0;
  $("#email").click(function() {
    clipboard.copy("jedidiah.bertram@gmail.com")
    $('#clipboardAlert').show().delay(2000).fadeOut("slow");
  });

  $(".smiling").mouseenter(function() {
    $(this).addClass("change").delay(7000).queue(function() {
      $(this).removeClass("change").dequeue();
    });
  });

  $("#focused").mouseenter(function() {
    $(this).addClass("change").delay(7000).queue(function() {
      $(this).removeClass("change").dequeue();
    });
  });

  $(".scroll0").click(function(event) {
    if (position === 1) {
      $('html, body').animate({
        scrollTop: '-=800px'
      }, 500);
    } else if (position > 1) {
      $('html, body').animate({
        scrollTop: '-=2800px'
      }, 500);
      position = 0;
    }
  });
  $(".scroll1").click(function(event) {
    position += 1;
    if (position === 1) {
      $('html, body').animate({
        scrollTop: '+=800px'
      }, 500);
    } else if (position > 1) {
      $('html, body').animate({
        scrollTop: '-=1280px'
      }, 500);
    }
  });
  $(".scroll2").click(function(event) {
    position += 2;
    $('html, body').animate({
      scrollTop: '+=2500px'
    }, 500);
  });
});;