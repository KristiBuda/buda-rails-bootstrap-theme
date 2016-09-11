function getScreenSize() {
  var width = parseInt($(window).width());

  if(width <= 800){
    // $('#buda-navbar-jumbotron').fadeOut("slow");
    // $('.buda-navbar-follower').fadeIn("slow");
  }
  else if(width > 800){
    $('#buda-navbar-jumbotron').fadeIn("slow");
    $('.buda-navbar-follower').fadeOut("slow");
  }
};
$(document).ready(getScreenSize);
$(window).resize(getScreenSize);


$(document).ready(function() {
  $(window).scroll(function () {
      console.log($(window).scrollTop())
    if ($(window).scrollTop() > 0) {
      $('.navbar').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < 0) {
      $('.navbar').removeClass('navbar-fixed-top');
    }
    if($(window).scrollTop() >= 150){
      $('#buda-navbar-jumbotron').fadeOut("slow");
      $('.buda-navbar-follower').fadeIn("slow");
    }
    else {
      $('#buda-navbar-jumbotron').fadeIn("slow");
      $('.buda-navbar-follower').fadeOut("slow");
    }
  });
});
