function fileViewerUrl(x, y, url) {  
  
  var index = url.indexOf('.'); 
  var filename = url.substring(0, index); 
  var fileext = url.substring(index+1, index+4); 
  
  if (fileext=="bmp") {fileViewerUrlBmp(x,y,url);} 
  
}
  
function fileViewerUrlBmp(x,y,url) { 
    var index = url.indexOf('.'); 
    var filename = url.substring(0, index); 
    var fileext = url.substring(index+1, index+4); 
    
    var oReq = new XMLHttpRequest(); 
    oReq.open("GET", url, true); 
    oReq.responseType = "arraybuffer"; 
    
    oReq.onload = function (oEvent) { 
      var arrayBuffer = oReq.response; 
      // var byteArray = new Uint8Array(arrayBuffer); 
      // var data = new Uint8Array(arrayBuffer); 
      
      if (arrayBuffer) { 
                      var data = new Uint8Array(arrayBuffer); 
                      var buf = new ArrayBuffer(4);
                      var view = new DataView(buf);
                      
                      var sb = data[2];        // size
                      var bgn = data[10];      // start of data byte
                      // var sd = 256*(data[15]) + (data[14]); // size
                      view.setUint8(0, data[15]);
                      view.setUint8(1, data[14]);
                      var sd = view.getUint16(0); 
        
                      view.setUint8(0, data[19]);
                      view.setUint8(1, data[18]);
                      var w = view.getUint16(0); 
        
                      view.setUint8(0, data[23]);  
                      view.setUint8(1, data[22]);
                      var h = view.getUint16(0);
                     
                      var bpp = data[28];   // 
                      var b = (data[28])/8; // bytes in color
                   
                      var cvs = document.getElementById("canvas");
                      var ctx = cvs.getContext("2d"); 
                      var imageData = ctx.createImageData(w, h); 
                     
                      if (b==3) {
                      var  i, j, k=0;
                      for ( i = w*b*h-w*b; i>0; i -=w*b ) {
                          for ( j = 0; j < w*b; j += b ) {
                            
                            imageData.data[k + 0] = data[bgn+2+i+j];         // R value
                            imageData.data[k + 1] = data[bgn+1+i+j];         // G value
                            imageData.data[k + 2] = data[bgn+0+i+j];         // B value
                            imageData.data[k + 3] = 255; // data[bgn+3+i+j]; // A value
                            k += b+1;
                           }
                          }
                        }
                   
                      else if (b==4) {
                      var i, j, k=0;
                      for ( i = w*b*h-w*b; i>0; i -=w*b ) {
                          for ( j = 0; j < w*b; j += b) {
                            
                            imageData.data[k + 0] = data[bgn+2+i+j];  // R value
                            imageData.data[k + 1] = data[bgn+1+i+j];  // G value
                            imageData.data[k + 2] = data[bgn+0+i+j];  // B value
                            imageData.data[k + 3] = data[bgn+3+i+j];  // A value
                            k += b;
                           }
                          }
                        }
                   
                        ctx.putImageData(imageData, x, y); 
      }
      
    }; 
    oReq.send(null); 
} 
  





