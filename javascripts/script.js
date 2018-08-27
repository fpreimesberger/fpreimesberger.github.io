$(document).ready(function() {
  $("#title-text").css("display", "none");
  $("#title-text").fadeIn(1000).animate({"left": "300px"}, 4000);
  $("#down").css("display", "none");
  $("#plus").css("display", "none");
  $("#down").fadeIn(1000);
  $("#plus").fadeIn(1000);

  $("#subtitle").delay(500);
  $("#subtitle").css("display", "none");
  $("#subtitle").fadeIn(900);
})
