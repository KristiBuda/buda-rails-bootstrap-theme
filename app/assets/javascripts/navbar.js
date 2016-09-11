function getScreenSize() {
  var width = parseInt($(window).width());

  if(width <= 800){
    $('#buda-navbar-jumbotron').fadeOut();
    $('.buda-navbar-follower').fadeIn();
  }
  else if(width > 800){
    $('#buda-navbar-jumbotron').fadeIn();
    $('.buda-navbar-follower').fadeOut();
  }
};
$(document).ready(getScreenSize);
$(window).resize(getScreenSize);
