function fileViewerDrive(x,y,filedir,cluno,size) {  
 /* var filename=""; 
  var fileext=""; 
  fileext=filedir.substring(8,11); 
  
  if (fileext=="txt") {fileViewerDriveTxt(x,y,filedir,cluno,size);} 
*/
} 

function fileViewerDriveTxt(x,y,filedir,cluno,size) { alert('1'); alert(filedir); 
  var filename=""; 
  var fileext=""; 
  fileext=filedir.substring(8,11); 
  alert(fileext); 
   if (fileext=="txt") { alert(clust0);
    var text=""; 
    for (let i=0; i<size; i++) {
      text+=ascChar(driveView[clust0+cluno*8*512+i]); 
    } alert(text); alert(driveView[clust0+cluno*8*512+0]); 
    writeStr(x,y,480,128,"ubuntubold",text);
  } 
  
}
