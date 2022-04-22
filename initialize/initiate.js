function initiate() { 

var cnv = document.getElementById("canvas"); 
var ctx = cnv.getContext('2d'); 

ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; // light gray
ctx.fillRect(0, 0, 1080, 144); 
// fileViewerUrl(64, 8, "icon/business-woman-icon-128.bmp");  
// fileViewerUrl(824, 48, "icon/video-icon-48.bmp");  
// fileViewerUrl(952, 48, "icon/telephone-icon-48.bmp"); 
// writecStr(200,48,480,32,"ubuntubold",[255,255,255,255],[0,0,128,255],"sAy"); 
// writecStr(200,80,480,32,"ubuntufont",[255,255,255,255],[0,0,128,255],"online");

ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; // light gray
ctx.fillRect(0, 144, 1080, 2032); 

ctx.fillStyle = "rgba(0,0,128,1.0)"; // blue 
ctx.fillRect(200, 288+8, 680, 128); 
ctx.fillStyle = "rgba(255,255,255,1.0)"; // white
ctx.fillRect(200+8, 288+8+8, 680-16, 128-16); 
ctx.fillStyle = "rgba(0,0,128,1.0)"; // blue 
ctx.fillRect(200, 288+144+8, 680, 128); 
ctx.fillStyle = "rgba(255,255,255,1.0)"; // white
ctx.fillRect(200+8, 288+144+8+8, 680-16, 128-16); 
ctx.fillStyle = "rgba(0,0,128,1.0)"; // blue 
ctx.fillRect(200, 288+144*2+8, 680, 128); 
writecStr(200+268,288+144*2+8+40,24*6,48,"font2448",[255,255,255,255],[0,0,128,255],"SignIn"); 

drawKeypad(0,1664,ktype); 
showCursor(200+16,288+8+40); 
/*   
ctx.fillStyle = "rgba(0,0,128,1.0)"; // blue
ctx.fillRect(0, 2048, 920, 128); 
ctx.fillStyle = "rgba(255,255,255,1.0)"; // white
ctx.fillRect(0+8, 2048+8, 920-16, 128-16);  
fileViewerUrl(680, 2080, "icon/attachment-icon-64.bmp"); 
fileViewerUrl(808, 2080, "icon/camera-icon-64.bmp"); 
fileViewerUrl(936, 2048, "icon/microphone-icon-128.bmp"); 
*/ 
} 
