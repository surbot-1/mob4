function fileViewerDrive(x,y,filedir,clust,size) { 
  var filename=filedir.substring(0,8); 
  var fileext=filedir.substring(8,11); 
  if (fileext=="txt") { alert(filedir); alert(clust); alert(size);
    fileViewerDriveTxt(x,y,filedir,clust,size); 
  } else if (fileext=="bmp" || fileext=="BMP") { 
    fileViewerDriveBmp(x,y,filedir,clust,size); 
  } 
}

function fileViewerDriveTxt(x,y,filedir,clust,size) { 
  var filename = filedir.substring(0,8);
  var fileext = filedir.substring(8,11); 
  if (fileext=="txt") { alert(filedir); alert(clust); alert(size); 
     
      var fat=clust; 
      var data=[]; 
      var j=0; 
      for (let i=0; i<size; i++) {  
        data[i]=driveView[clust0+clust*8*512*(1+j)+i]; 
        if (i>=8*512*(1+j)) { 
          fat=driveView[fat1+fat*4]; 
          clust=driveView[fat1+fat*4]; 
          j++; 
        }
      } 
    // var buf=data.buffer; 
                       
    var text="";
    for (let i=0; i<size; i++) { 
       var char = ascChar(data[i]); 
       text += char; 
    } 
    writeStr(x,y,480,128,"ubuntubold",text);
  } 
} 

function fileViewerDriveBmp(x,y,filedir,clust,size) { 
  var filename = filedir.substring(0,8);
  var fileext = filedir.substring(8,11); 
  if (fileext=="bmp") { 
      var fat=clust; 
      var data=[]; 
      var j=0; 
      for (let i=0; i<size; i++) {  
        data[i]=driveView[clust0+clust*8*512+i]; 
        if (i>=8*512*(1+j)) { 
          fat=driveView[fat1+fat*4]; 
          clust=driveView[fat1+fat*4]; 
          j++; 
        }
      } alert(data); 
    // var buf=data.buffer; // alert(Uint8Array(buf)); 
    (async () => {
     var blob = new Blob([data.buffer], {type: 'text/plain'}); 
     var buf = await blob.arrayBuffer; alert(buf.byteLength);
     drawImageBmp(x, y, buf); 
      })(); 
  } 
} 
               
                
                function drawImageBmp(x, y, buf) {  alert('drawImageBmp');
                      var data = new Uint8Array(buf); alert(data);
                      var viewBuf = new ArrayBuffer(4);
                      var view = new DataView(viewBuf);
                      
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




