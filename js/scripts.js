$(document).ready(function() {
  $(".clickable").click(function() {
    $(".first-clue").show();
  });
});

$(document).ready(function() {
  $(".fly").click(function() {
    $(".second-clue").show();
  });
});

$(document).ready(function() {
  $(".one").click(function() {
    $(".third-clue").show();
  });
});

$(document).ready(function() {
  $(".now").click(function() {
    prompt ("nice. I feel like you're getting to know me pretty well by now. Can I know about you? What is your name?");
  });
});
