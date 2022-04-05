function fileViewerDrive(x,y,filedir,cluno,size) {  
  var filename=""; 
  var fileext=""; 
  fileext=filedir.substring(8,11); 
  if (fileext=="txt") { 
    fileViewerDriveTxt(x,y,filedir,cluno,size); 
  } 
} 

function fileViewerDriveTxt(x,y,filedir,cluno,size) { 
  var filename=""; 
  var fileext=""; 
  fileext=filedir.substring(8,11); 
  if (fileext=="txt") { 
    for (let i=0; i<size; i++) { 
       text += ascChar(driveView[clust0+cluno*8*512+i]); 
    } 
    writeStr(x,y,480,128,"ubuntubold",text);
  } 
}
