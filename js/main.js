// responsive nav
$(function () {
  menu = $('nav ul');

  $('#openup').on('click', function (e) {
    e.preventDefault(); menu.slideToggle();
  });

  $('nav li').on('click', function (e) {
    menu.slideToggle();
  });

  $(window).resize(function () {
    let w = $(this).width(); if (w > 480 && menu.is(':hidden')) {
      menu.removeAttr('style');
    }
  });
});