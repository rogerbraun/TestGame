

var startScreen = function(canvas, context) {
  context.fillStyle = '#000000';
  context.fillRect(0,0,canvas.width,canvas.height);
  var move = 0;
  var imgd = context.getImageData(0,0,canvas.width,canvas.height);
  var pixels = imgd.data;

  var drawStartScreen = function() {
    for(var i = 0; i < pixels.length; i += 4) {
      var red = (Math.sin(i / 10) + 1) * 127;
      var blue = (Math.sin(i / 100) + 1) * 127;
      var green = (Math.sin(i / 50) + 1) * 127;
      red = (red + move) % 255;
      blue = (blue + move) % 255;
      green = (green + move) % 255;
      pixels[i] = red;
      pixels[i + 1] = blue;
      pixels[i + 2] = green;
    }
    move++;
    context.putImageData(imgd,0,0);

    context.fillStyle = '#ffffff';

    context.font = "bold 16px Arial, sans-serif";
    context.fillText("PRESS PLAY TO START",10,30)
  }

  // setInterval(drawStartScreen, 1000/60);
  //

  var grass = new Image();
  grass.src = "images/Grass Block.png";
  grass.onload = function(){
    for(var x = 0; x < canvas.width; x += 100){
      for(var y = 0; y < canvas.height; y += 80) {
        context.drawImage(grass, x, y);
      }
    }
  }

  var block = new Image();
  block.src = "images/Dirt Block.png";
  block.onload = function(){

    context.drawImage(block, 100, 120);
    context.drawImage(block, 200, 120);
    context.drawImage(block, 300, 120);
    
    context.drawImage(block, 100, 80);
    context.drawImage(block, 200, 80);
  }

  var girl = new Image();
  girl.src = "images/Character Cat Girl.png";
  girl.onload = function(){
    context.drawImage(girl,100, 40);
    context.drawImage(girl,400, 40);
  }

  var tree = new Image();
  tree.src = "images/Tree Short.png";
  tree.onload = function(){
    context.drawImage(tree, 400, 120);
  }

  var boy = new Image();
  boy.src = "images/Character Boy.png";
  boy.onload = function(){
    context.drawImage(boy, 200, 200);
  }
}

$(function(){
  var canvas = $("#canvas")[0];
  var context = canvas.getContext("2d"); 
  startScreen(canvas, context);
});
