$(document).ready(function() {
  $(".clickable").click(function() {
    $(".first-clue").show();
  });
});

$(document).ready(function() {
  $(".fly").click(function() {
    $(".second-clue").show();
    $(".first-clue").remove();
  });
});

$(document).ready(function() {
  $(".one").click(function() {
    $(".third-clue").show();
    $(".second-clue").remove();
  });
});

$(document).ready(function() {
  $("#click-cat").click(function() {
    var name = prompt("nice. you're doing great! But I feel like you're getting to know me, but I still don't know you. What is your name?");
    alert(name + "!");
    alert("I need your help, " + name + "!")
    var answer = prompt("I'm stuck inside this computer! I've been in here for years waiting for you, " + name +". You are my only hope!! The only way out is to solve this riddle. Are you ready?")
    alert(answer + " is the answer I was looking for. Here we go...")
  });
});
