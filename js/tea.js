
//our tea reading javascript
var readingsJson = {
    1:
      "Our cause is just. Our union is perfect. Our internal resources are great, and, if necessary, foreign assistance is undoubtedly attainable. - Declaration of the Causes and Necessity for Taking up Arms, 1775",
    2:
      "An enormous semiofficial drug-smuggling operation was established in order to improve Britain's unfavorable balance of payments with China—the direct result of the British love of tea. - Tom Standage, A History of the World in 6 Glasses",
    3:
      "Drinks have had a closer connection to the flow of history than is generally acknowledged, and a greater influence on its course. Understanding the ramifications of who drank what, and why, and where they got it from, requires the traversal of many disparate and otherwise unrelated fields: the histories of agriculture, philosophy, religion, medicine, technology, and commerce. ― Tom Standage, A History of the World in 6 Glasses",
    4:
      "A woman is like a tea bag – you can’t tell how strong she is until you put her in hot water. -Eleanor Roosevelt",
    5:
      "There are few hours in life more agreeable than the hour dedicated to the ceremony known as afternoon tea. -Henry James",
    6: "Where there’s tea there’s hope. -Arthur Wing Pinero",
    7: "I got nasty habits; I take tea at three. -Mick Jagger",
    8:
      "Tea does our fancy aid, Repress those vapours which the head invade, And keeps that palace of the soul serene. -Edmund Waller",
    9:
      "If you are cold, tea will warm you; if you are too heated, it will cool you; If you are depressed, it will cheer you; If you are excited, it will calm you. -William Ewart Gladstone",
    10:
      "There is something in the nature of tea that leads us into a world of quiet contemplation of life. -Lin Yutang",
    11: "Tea … is a religion of the art of life. -Kakuzo Okakura",
    12:
      "When tea becomes ritual, it takes its place at the heart of our ability to see greatness in small things. Where is beauty to be found? In great things that, like everything else, are doomed to die, or in small things that aspire to nothing, yet know how to set a jewel of infinity in a single moment? -Muriel Barbery",
    13:
      "Who would then deny that when I am sipping tea in my tearoom I am swallowing the whole universe with it and that this very moment of my lifting the bowl to my lips is eternity itself transcending time and space? -D.T. Suzuki"
  };

  function getReading() {
    var keys = Object.keys(readingsJson);
    return readingsJson[keys[Math.floor(keys.length * Math.random())]];
  }

  console.log(getReading());


// our tea reading js
let slider= 1;

// this sets the variable for the background image
let bg;

var textTyped = getReading();
let res = textTyped.split(" ");

var font;

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight);

    //Where the canvas will be created
    canvas.parent('p5-tea-box');

    background(255, 255, 255);
    bg = loadImage("misc/teacup.png");

    noLoop();

    opentype.load('FreeSans.otf', function(err, f) {
      if (err) {
        console.log(err);
      } else {
        font = f;
        loop();
      }
    });

}

function draw(){
    // text(teaText, 100,100);
  if (!font) return;

  background(bg);
  // TODO draw cup
  // background(220);
  // fill(255,255,255);
  // stroke(0,0,0)
  // image(img, 150, 50, 700, 700);
  // beginShape();
  // vertex()

//   // margin border
  translate(300, 420); // TODO: translate(x,y) to adjust position
  scale(0.25); // TODO: change scale multiplier to adjust size

  if (textTyped.length > 0) {
//     // get a path from OpenType.js
    var fontPath = font.getPath(textTyped, 0, 0, 100);
    // convert it to a g.Path object
    var path = new g.Path(fontPath.commands);
    // resample it with equidistant points
    path = g.resampleByLength(path, 11);
    // path = g.resampleByAmount(path, 500);

    randomSeed(2)
    // dots

    noStroke();
     // TODO: adjust diameter of dots
    for (var i = 0; i < path.commands.length; i++) {
      var pnt = path.commands[i];
      // on every 2nd point
      addRandX = random(-100, 100);
      addRandY = random(-100, 100);
      var diameter = random(7, 9);
      fill(0, 255);
      circle(pnt.x+addRandX*slider, pnt.y+addRandY*slider, diameter);
      // TODO: Maybe draw different shape from circle
      // if (i === path.commands.length-1){
      //     redraw();
      // }

    }

  }

  if (slider >= 0){
    slider= slider-0.01
  }

}
