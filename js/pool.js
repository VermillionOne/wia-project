/*jslint indent: 2 */
/*global window,document,$,console,Modernizr,createjs */

$(document).ready(function () {

  'use strict';

  $('.parallax-img').parallax({imageSrc: 'img/sw-outdoors-optimized.jpg'});

  if (Modernizr.canvas) {
    $('.pool-drawing').css('display', 'none');
    $('#lanePool').css('display', 'block');

    $('.red-cross-logo').css('display', 'none');
    $('#redCross').css('display', 'block');

  } else {
    $('#lanePool').css('display', 'none');
    $('.pool-drawing').css('display', 'block');

    $('#redCross').css('display', 'none');
    $('.red-cross-logo').css('display', 'block');

  }

  //Canvas and stage
  var stage, shape, canvas, crossCanvas, crossStage, crossShape, national, redCross;
  canvas = document.getElementById("lanePool");
  stage = new createjs.Stage(canvas);

  //Create a graphic shape
  shape = new createjs.Shape();

  //Set stroke styles
  shape.graphics.beginStroke("rgba(0,0,0,.75)");
  shape.graphics.setStrokeStyle(3, 0, 1);

  // Draw a rectangle
  shape.graphics.rect(50, 50, 400, 201);

  shape.graphics.beginStroke("#349bcd");
  shape.graphics.moveTo(60, 60);
  shape.graphics.lineTo(60, 82);
  shape.graphics.moveTo(60, 92);
  shape.graphics.lineTo(60, 114);
  shape.graphics.moveTo(60, 124);
  shape.graphics.lineTo(60, 146);
  shape.graphics.moveTo(60, 156);
  shape.graphics.lineTo(60, 178);
  shape.graphics.moveTo(60, 188);
  shape.graphics.lineTo(60, 210);
  shape.graphics.moveTo(60, 220);
  shape.graphics.lineTo(60, 242);

  shape.graphics.moveTo(60, 71);
  shape.graphics.lineTo(440, 71);
  shape.graphics.moveTo(60, 103);
  shape.graphics.lineTo(440, 103);
  shape.graphics.moveTo(60, 135);
  shape.graphics.lineTo(440, 135);
  shape.graphics.moveTo(60, 167);
  shape.graphics.lineTo(440, 167);
  shape.graphics.moveTo(60, 199);
  shape.graphics.lineTo(440, 199);
  shape.graphics.moveTo(60, 231);
  shape.graphics.lineTo(440, 231);

  shape.graphics.moveTo(440, 60);
  shape.graphics.lineTo(440, 82);
  shape.graphics.moveTo(440, 92);
  shape.graphics.lineTo(440, 114);
  shape.graphics.moveTo(440, 124);
  shape.graphics.lineTo(440, 146);
  shape.graphics.moveTo(440, 156);
  shape.graphics.lineTo(440, 178);
  shape.graphics.moveTo(440, 188);
  shape.graphics.lineTo(440, 210);
  shape.graphics.moveTo(440, 220);
  shape.graphics.lineTo(440, 242);

  //Set stroke styles
  shape.graphics.beginStroke("rgba(0,0,0,.35)");
  shape.graphics.setStrokeStyle(3, 0, 1);
  shape.graphics.rect(460, 60, 22, 22);
  shape.graphics.rect(460, 92, 22, 22);
  shape.graphics.rect(460, 124, 22, 22);
  shape.graphics.rect(460, 156, 22, 22);
  shape.graphics.rect(460, 188, 22, 22);
  shape.graphics.rect(460, 220, 22, 22);

  stage.addChild(shape);
  stage.update();

  crossCanvas = document.getElementById("redCross");
  crossStage = new createjs.Stage(crossCanvas);
  //Create a graphic shape
  crossShape = new createjs.Shape();

  crossShape.graphics.beginFill('#ff0f0f');

  crossShape.graphics.rect(0, 33, 99, 33);
  crossShape.graphics.rect(33, 0, 33, 99);

  national = new createjs.Text("National", "30px Impact", "#222222");
  redCross = new createjs.Text("Red Cross", "30px Impact", "#222222");
  national.x = 119;
  national.y = 18;

  redCross.x = 119;
  redCross.y = 50;

  //Draw it by calling update
  crossStage.addChild(crossShape);
  crossStage.addChild(national);
  crossStage.addChild(redCross);
  crossStage.update();
});
