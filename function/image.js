function saveImage(x, y, w, h) { 
  var can = document.getElementById('canvas'); 
  var ctx = can.getContext('2d'); 
  // var imgData = ctx.createImageData(w, h); 
  var imgData = ctx.getImageData(x, y, w, h); 
  // var imgBuf = new ArrayBuffer(w*4*h); 
  // var imgView = new Uint8Array(imgBuf); 
  for (let i=0; i<w*4*h; i+=4) {  
    imgView[i+0] = imgData.data[i+0]; 
    imgView[i+1] = imgData.data[i+1]; 
    imgView[i+2] = imgData.data[i+2]; 
    imgView[i+3] = imgData.data[i+3]; 
  }  
  // ctx.putImageData(imgData, x, y+400);             
} 


function restoreImage(x, y, w, h) { 
  var can = document.getElementById('canvas'); 
  var ctx = can.getContext('2d'); 
  var imgData = ctx.createImageData(w, h); 
  // var imgData = ctx.getImageData(x, y, w, h); 
  // var imgBuf = new ArrayBuffer(w*4*h); 
  // var imgView = new Uint8Array(imgBuf); 
  for (let i=0; i<w*4*h; i+=4) {  
    imgData.data[i+0] = imgView[i+0]; 
    imgData.data[i+1] = imgView[i+1]; 
    imgData.data[i+2] = imgView[i+2]; 
    imgData.data[i+3] = imgView[i+3]; 
  } 
  ctx.putImageData(imgData, x, y); 
}

function createImage(str) { 
  
}

function insertImage(x,y,w,h,buf) { 
  
}





