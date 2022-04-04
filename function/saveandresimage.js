function saveImage(x, y, w, h) { alert('1');
  var can = document.getElementById("canvas"); alert('2');
  var ctx = can.getContext('2d'); alert('3');
  // var imgData = ctx.createImageData(w, h); alert('4');
  // var imgData = ctx.getImageData(20, 200, 100, 100); alert('5');
  // ctx.putImageData(imgData, 20, 400); alert('6'); 
                                
            var cvs4 = document.getElementById('canvas1');
            var ctx4 = cvs4.getContext('2d'); 
            // var data4;
                  var img4 = new Image();
                  img4.src = 'logo/Turbo-Snail-icon-_1_.bmp';
                  img4.onload = function (e4)
                      { 
                    
                      ctx4.drawImage(img4, 20, 400, 128, 128); 
                      var imgData4 = ctx4.getImageData(20, 400, 128, 128); 
                      ctx4.putImageData(imgData4, 20, 600); 
                      
                       }; 
                    
  }
                          
