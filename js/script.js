
$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
        
    });
    $('.header__menu').click(function(event){
        $('.header__burger,.header__menu').removeClass('active');  
    });
    

});




$(function () {
  var SCROLLING_NAVBAR_OFFSET_TOP = 50;
  $(window).on('scroll', function () {
    var $navbar = $('.navbar');

    if ($navbar.length) {
      if ($navbar.offset().top > SCROLLING_NAVBAR_OFFSET_TOP) {
        $('.navbar,.header__burger,.header__burger-mobile,.header__inner,.header__logo').addClass('nav-collapse');
      } else {
        $('.navbar,.header__burger,.header__burger-mobile,.header__inner,.header__logo').removeClass('nav-collapse');
      }
    }
  });
});
/*
$(function () {
    var NAVBAR_OFFSET_TOP = 50;
    $(window).on('scroll', function () {
      var $navbar = $('.navbar');
  
      if ($navbar.length) {
        if ($navbar.offset().top > NAVBAR_OFFSET_TOP) {
          $('.header__menu, .header__burger-mobile').addClass('nav-collapse');
        } else {
          $('.header__menu, .header__burger-mobile').removeClass('nav-collapse');
        }
      }
    });
  });
*/
  /*
$(function () {
    var NAVBAR_OFFSET_TOP = 50;
    $(window).on('scroll', function () {
      var $navbar = $('.navbar');
  
      if ($navbar.length) {
        if ($navbar.offset().top > NAVBAR_OFFSET_TOP) {
          $('.header__logo').addClass('nav-collapses');
        } else {
          $('.header__logo').removeClass('nav-collapses');
        }
      }
    });
  });
  */
