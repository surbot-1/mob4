function saveImage(x, y, w, h) { 
  alert('1'); 
  var can = document.getElementById('canvas'); alert('2');
  var ctx = can.getContext('2d'); alert('3'); 
  var imgData = ctx.getImageData(x, y, w, h); alert('4'); 
  var imgBuf = new ArrayBuffer(w*4*h); 
  var imgView = new Uint8Array(imgBuf); 
  // var imgData = ctx.createImageData(w, h); alert('5'); 
  for (let i=0; i<w*4*h; i+=4) {  
    imgView[i+0] = imgData.data[i+0]; 
    imgView[i+1] = imgData.data[i+1]; 
    imgView[i+2] = imgData.data[i+2]; 
    imgView[i+3] = imgData.data[i+3]; 
  }   alert((imgData.data[0])); 
  ctx.putImageData(imgData, 20, 1000); alert('6'); 
                                
            var cvs4 = document.getElementById('canvas');
            var ctx4 = cvs4.getContext('2d'); 
            // var data4;
                  var img4 = new Image();
                  img4.src = 'logo/Turbo-Snail-icon-_1_.bmp';
                  img4.onload = function (e4)
                      { 
                    
                      ctx4.drawImage(img4, 20, 400, 128, 128); 
                      var imgData4 = ctx4.getImageData(20, 400, 128, 128); 
                      ctx4.putImageData(imgData4, 20, 600); 
                      
                      var imgData41 = ctx4.getImageData(20, 200, 128, 128); 
                      ctx4.putImageData(imgData41, 20, 800); 
                      
                       }; 
                    
  }
                          
