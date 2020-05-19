$(function () {
  /* 햄버거 사이드 메뉴 */
  var maskHeight = $(document).height();
  var maskWidth = $(window).width();
  $('#mask').css({'width':maskWidth,'height':maskHeight});

  function sideMenuOpen() {
    $("nav").addClass("on");
    $('#mask').fadeIn(1000);
    $('#mask').fadeTo("slow",0.8);
  }
  function sideMenuClose() {
    $("nav").removeClass("on");
    $('#mask').fadeOut();
    $('#mask').fadeTo("fast",1);
  }
  function sideMenu() {
    $(".hamburger a").on("click", function () {
      $(this).toggleClass("on");
      if($(this).hasClass("on")) {
        sideMenuOpen();
      } else {
        sideMenuClose();
      }
    });
    $('#mask').click(function () {
      sideMenuClose();
      $(".hamburger a").removeClass("on");
    });
  }
  sideMenu();

});
