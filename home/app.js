function apphome() {  
var cnv = document.getElementById("canvas"); 
var ctx = cnv.getContext('2d'); 
ctx.fillStyle = "rgba(0, 0, 128, 1.0)"; // blue
ctx.fillRect(0, 0, 1080, 144); 
  writecStr(128+360*0,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"CHATS"); 
  writecStr(128+360*1,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"STATUS"); 
  writecStr(128+360*2,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"CALLS");
// fileViewerUrl(64, 16, "icon/business-man-icon-96.bmp"); 
// fileViewerUrl(800, 40, "icon/video-icon-48.bmp"); 
// fileViewerUrl(900, 40, "icon/telephone-icon-48.bmp"); 
	
ctx.fillStyle = "rgba(240, 240, 240, 1.0)";  // lightgray 
ctx.fillRect(0, 144, 1080, 2032);  
fileViewerUrl(64, 144*1+8, "icon/business-woman-icon-128.bmp"); 
fileViewerUrl(64, 144*2+8, "icon/business-man-icon-128.bmp"); 
fileViewerUrl(64, 144*3+8, "icon/business-man-icon-128.bmp"); 
writecStr(200,144*1+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"sAy"); 
writecStr(200,144*2+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"Yash Shiv"); 
writecStr(200,144*3+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"Jitendra"); 
	
	var timer;
	function check() { 
	var x = touchx;  var y = touchy; 
	var tend = touch;  
           if (tend == 3) { touch = 0;
              if (x>0 && x<360*1 && y>0 && y<144) { 
              } else if (x>360*1 && x<360*2 && y>0 && y<144) { 
              } else if (x>360*2 && x<360*3 && y>0 && y<144) { 
              } else if (x>0 && x<1080 && y>144*1 && y<144*2) { 
              } else if (x>0 && x<1080 && y>144*2 && y<144*3) { 
              } else if (x>0 && x<1080 && y>144*3+8 && y<144*3+8+128) { 
              } else if (x>0 && x<1080 && y>160*4 && y<160*4+144) { 
              } else if (x>0 && x<1080 && y>160*5 && y<160*5+144) { 
	      } else if (x>0 && x<1080 && y>160*6 && y<160*6+144) { 
	      } else if (x>0 && x<1080 && y>160*7 && y<160*7+144) { 
	      } else if (x>0 && x<1080 && y>160*8 && y<160*8+144) { 
	      } else if (x>0 && x<1080 && y>160*9 && y<160*9+144) { 
	      } else if (x>0 && x<1080 && y>160*10 && y<160*10+144) { 
	      } else if (x>0 && x<1080 && y>2032 && y<2176) { 
		      
	      }
		      
           } 
	}
	timer = setInterval(check, 0100); 

}
