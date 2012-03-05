var startScreen = function(canvas, context) {
  setTimeout(function() {
    level1.draw(canvas);
  }, 500);
}

$(function(){
  var canvas = $("#canvas")[0];
  var context = canvas.getContext("2d"); 
  startScreen(canvas, context);

  var dragging = false;
  var mousePos = {x:0, y:0}
  var offset = {x:0, y:0}

  canvas.onmousedown = function(event){
    mousePos.x = event.clientX;
    mousePos.y = event.clientY;
    dragging = true;
  }

  canvas.onmouseup = function(){
    dragging = false;
  }

  canvas.onmousemove = function(event){
    if(dragging){
      var deltaX = event.clientX - mousePos.x;
      var deltaY = event.clientY - mousePos.y;

      mousePos.x = event.clientX;
      mousePos.y = event.clientY;

      offset.x += deltaX;
      offset.y += deltaY;

      level1.draw(canvas, offset.x, offset.y);
    }
  }

});
