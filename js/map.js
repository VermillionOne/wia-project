/*jslint indent: 2 */
/*global window,document,$,console,createjs */

$(document).ready(function () {

  'use strict';

  $('.area-map p').click(function () {

    $('.area-map p.active').removeClass('active');
    $(this).addClass('active');

    var initialData, poolLocation;
    initialData = $(this).data();
    poolLocation = initialData.option;

    $('.location.active').fadeOut(250, function () {
      $('.location.active').removeClass('active');
      $('[data-target=' + poolLocation + ']').fadeIn(250, function () {
        $('[data-target=' + poolLocation + ']').addClass('active');
      })
    })

  });



});
