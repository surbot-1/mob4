function saveImage(x, y, w, h) { alert('1');
  var can = document.getElementById("canvas"); 
  var ctx = can.getContext("2D"); 
  var imgData = ctx.createImageData(w, h); alert('2');
  imgData = ctx.getImageData(20, 200, 100, 100); 
  ctx.putImageData(imgData, 20, 400); 
  }
