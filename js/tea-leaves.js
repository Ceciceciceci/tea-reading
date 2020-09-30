// M_1_2_01
//
// Generative Gestaltung – Creative Coding im Web
// ISBN: 978-3-87439-902-9, First Edition, Hermann Schmidt, Mainz, 2018
// Benedikt Groß, Hartmut Bohnacker, Julia Laub, Claudius Lazzeroni
// with contributions by Joey Lee and Niels Poldervaart
// Copyright 2018
//
// http://www.generative-gestaltung.de
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

/**
 * order vs random!
 * how to interpolate beetween a free composition (random) and a circle shape (order)
 *
 * MOUSE
 * position x          : fade between random and circle shape
 *
 * KEYS
 * s                   : save png
 */
'use strict';

var sketch = function(p) {

  var actRandomSeed = 0;
  var count = 1200;

  p.setup = function() {
    p.createCanvas(800,800);
    p.cursor(p.CROSS);
    p.noStroke();
    // p.fill(0,130,164);
    p.frameRate(5);
  };

  p.draw = function() {
    p.background(255);

    var faderX = p.mouseX / p.width;

    p.randomSeed(actRandomSeed);
    var angle = p.radians(360 / count);
    for (var i = 0; i < count; i++) {
      // positions
      var randomX = p.random(0,p.width);
      var randomY = p.random(0,p.height);
      var circleX = p.width / 2 + p.cos(angle * i) * 300;
      var circleY = p.height / 2 + p.sin(angle * i) * 300;

      var x = p.lerp(randomX,circleX,faderX);
      var y = p.lerp(randomY,circleY,faderX);
      // console.log(x);

      var sizes = [[40, 11], [20, 11], [11,40], [11,20]];
      var [w, q] = p.random(sizes);

      var rounds = [20, 0, 10, 5];
      var cols = [p.color(129, 23, 0), p.color(194, 153, 0),p.color(55, 43, 0)];
      var col = p.random(cols);

      // console.log(col);
      col.setAlpha(90);

      p.translate(x, y); // Translate so the "origin" is at x, y
      let rotation = p.frameCount*0.01 * p.random(rotations);
      p.rotate(rotation); // Rotate the canvas
      p.rect(0, 0, w, q, p.random(rounds),
            p.random(rounds),p.random(rounds),
            p.random(rounds));
      p.fill(col);
      p.rotate(-1 * rotation); // Undo rotation
      p.translate(-x, -y); // Undo translation.
    };
  };

  p.mousePressed = function() {
    actRandomSeed = p.random(100000);
  };

  p.keyReleased = function(){
    if (p.key == 's' || p.key == 'S') p.saveCanvas(gd.timestamp(), 'png');
  };

};

var myp5 = new p5(sketch, 'c2');
