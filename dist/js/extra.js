var countDownDate = new Date(2020, 4, 2, 12).getTime();

var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("timer").innerHTML =
    "Gender Reveal: " +
    days +
    "d " +
    hours +
    "h " +
    minutes +
    "m " +
    seconds +
    "s ";

  if (distance < 0) {
    clearInterval(x);
    // Don't read the source code you cheater!!
    document.getElementById("timer").innerHTML = "It's A Boy!!";
  }
}, 1000);

$(".menu-btn__clickable").click(function() {
  $(".menu-btn").toggleClass("active");
});
