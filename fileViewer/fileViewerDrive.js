function fileViewerDrive(x,y,filedir,clust,size) { 
  var filename=filedir.substring(0,8); 
  var fileext=filedir.substring(8,11); 
  if (fileext=="txt") { 
    fileViewerDriveTxt(x,y,filedir,clust,size); 
  } 
}

function fileViewerDriveTxt(x,y,filedir,clust,size) { 
  var filename = filedir.substring(0,8);
  var fileext = filedir.substring(8,11); 
  if (fileext=="txt") { 
    var text="";
    for (let i=0; i<size; i++) { 
       var char = ascChar(driveView[clust0+clust*8*512+i]); 
       text += char; 
    } 
    writeStr(x,y,480,128,"ubuntubold",text);
  } 
} 

function fileViewerDriveBmp(x,y,filedir,clust,size) { 
  var filename = filedir.substring(0,8);
  var fileext = filedir.substring(8,11); 
  if (fileext=="bmp" || fileext=="BMP") { 
      var dataByte=[]; 
      var j=0; 
      for (let i=0; i<size; i++) {  
        if (i>=8*512*j && i<8*512*(j+1)) { 
          dataByte[i]=driveView[clust0+clust*8*512*j+i]; 
        } 
        clust=driveView[fat1+fat*4]; 
        fat=driveView[fat1+fat*4]; 
        j++; 
      } 
      var buf=dataByte.buffer; 
    drawImageBmp(x,y,480,128,"ubuntubold",text);
  } 
} 




