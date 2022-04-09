function appHomeChatsUser1() {  
var cnv = document.getElementById("canvas"); 
var ctx = cnv.getContext('2d'); 
ctx.fillStyle = "rgba(0, 0, 128, 1.0)"; // blue
ctx.fillRect(0, 0, 1080, 144); 
fileViewerUrl(64, 8, "icon/business-man-icon-128.bmp"); 
fileViewerUrl(800, 48, "icon/video-icon-48.bmp"); 
fileViewerUrl(900, 48, "icon/telephone-icon-48.bmp"); 
  writecStr(200,48,480,128,"ubuntubold",[255,255,255,255],[128,128,128,255],"sAy");
	
ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; 
ctx.fillRect(0, 144, 1080, 2032); 
 /*  
fileViewerUrl(64, 144*1+8, "icon/business-woman-icon-96.bmp"); 
fileViewerUrl(64, 144*2+8, "icon/business-man-icon-96.bmp"); 
fileViewerUrl(64, 144*3+8, "icon/business-man-icon-96.bmp"); 
writecStr(200,144*1+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"sAy"); 
writecStr(200,144*2+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"Yash Shiv"); 
writecStr(200,144*3+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"Jitendra"); 
*/ 
ctx.fillStyle = "rgba(0,0,128,1.0)"; // blue
ctx.fillRect(0, 2048, 920, 128); 
ctx.fillStyle = "rgba(255,255,255,1.0)"; // white
ctx.fillRect(0+8, 2048+8, 920-16, 128-16); 
fileViewerUrl(830, 2080, "icon/attachment-icon-64.bmp"); 
fileViewerUrl(940, 2080, "icon/microphone-icon-128.bmp"); 
}








