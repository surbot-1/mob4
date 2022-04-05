function fileViewerDrive(x,y,filedir,cluno,size) { 
  var filename=filedir.substring(0,8); 
  var fileext=filedir.substring(8,11); 
  if (fileext=="txt") {fileViewerDriveTxt(x,y,filedir,cluno,size);} 
}

function fileViewerDriveTxt(x,y,filedir,cluno,size) { 
  var filename=filedir.sunstring(0,8);
  var fileext=filedir.substring(8,11); 
  if (fileext=="txt") { 
    var text="";
    for (let i=0; i<size; i++) { 
       var char = ascChar(driveView[clust0+cluno*8*512+i]); 
       text += char; 
    } 
    writeStr(x,y,480,128,"ubuntubold",text);
  } 
} 




