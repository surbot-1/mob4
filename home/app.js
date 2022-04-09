function apphome() {  
var cnv = document.getElementById("canvas"); 
var ctx = cnv.getContext('2d'); 
ctx.fillStyle = "rgba(0, 0, 128, 1.0)"; // blue
ctx.fillRect(0, 0, 1080, 128); 
  writecStr(128+360*0,48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"CHATS"); 
  writecStr(128+360*1,48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"STATUS"); 
  writecStr(128+360*2,48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"CALLS");
// fileViewerUrl(64, 16, "icon/business-man-icon-96.bmp"); 
// fileViewerUrl(800, 40, "icon/video-icon-48.bmp"); 
// fileViewerUrl(900, 40, "icon/telephone-icon-48.bmp"); 
	
ctx.fillStyle = "rgba(240, 240, 240, 1.0)";  // lightgray 
ctx.fillRect(0, 128, 1080, 1280); 
fileViewerUrl(64, 128*1+16, "icon/business-woman-icon-96.bmp"); 
fileViewerUrl(64, 128*2+16, "icon/business-man-icon-96.bmp"); 
fileViewerUrl(64, 128*3+16, "icon/business-man-icon-96.bmp"); 
writecStr(200,128*1+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"sAy"); 
writecStr(200,128*2+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"Yash Shiv"); 
writecStr(200,128*3+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"Jitendra"); 

}
