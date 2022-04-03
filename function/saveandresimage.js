function saveImage(x, y, w, h) { alert('1');
  var can = document.getElementById("canvas"); alert('2');
  var ctx = can.getContext('2D'); alert('3');
  var imgData = ctx.createImageData(w, h); alert('4');
  imgData = ctx.getImageData(20, 200, 100, 100); alert('5');
  ctx.putImageData(imgData, 20, 400); alert('6');
  }
