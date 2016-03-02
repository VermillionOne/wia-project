/*jslint indent: 2 */
/*global window,document,Modernizr,$,console */

$(document).ready(function () {

  'use strict';

  if (Modernizr.svg) {
    $('.fighting-fish-image').css('display', 'none');
    $('.fighting-fish').css('display', 'block');
  } else {
    $('.fighting-fish').css('display', 'none');
    $('.fighting-fish-image').css('display', 'block');
  }

  $('.section-title span').fadeIn(1000);

  $('.water-button').click(function () {
    $(this).fadeOut(250, function () {
      $('.parallax-img video').fadeIn();
    });
  });

});
