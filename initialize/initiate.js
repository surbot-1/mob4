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
ctx.fillRect(200, 144*2+8, 680, 128); 
ctx.fillStyle = "rgba(255,255,255,1.0)"; // white
ctx.fillRect(200+8, 144*2+8+8, 680-16, 128-16); 
ctx.fillStyle = "rgba(0,0,128,1.0)"; // blue 
ctx.fillRect(200, 144*3+8, 680, 128); 
ctx.fillStyle = "rgba(255,255,255,1.0)"; // white
ctx.fillRect(200+8, 144*3+8+8, 680-16, 128-16); 
ctx.fillStyle = "rgba(0,0,128,1.0)"; // blue 
ctx.fillRect(200, 144*4+8, 680, 128); 
  writecStr(200+268,144*4+8+40,24*6,48,"font2448",[255,255,255,255],[0,0,128,255],"SignIn"); 
  writecStr(200,144*5+8+48,24*9,32,"ubuntufont",[32,32,32,255],[240,240,240,255],"Password?"); 
  writecStr(200+24*22+8,144*5+8+48,24*6,32,"ubuntufont",[32,32,32,255],[240,240,240,255],"SignUp"); 

drawKeypad(0,1664,ktype); 
showCursor(200+16,144*2+8+40); 
  
  
      var timer;
      function check() { 
      var x = touchx;  var y = touchy; 
      var tend = touch;  
         if (tend == 3) { 
              touch = 0; 
              if (x>0 && x<360*1 && y>0 && y<144) { 
              } else if (x>360*1 && x<360*2 && y>0 && y<144) { 
              } else if (x>360*2 && x<360*3 && y>0 && y<144) { 
	      } else if (x>0 && x<1080 && y>144*1 && y<144*2) { 
              } else if (x>200 && x<1080 && y>144*2+8 && y<144*3+128) { 
		      uname(); 
              } else if (x>200 && x<1080 && y>144*3+8 && y<144*4+128) { 
		      pass(); 
              } else if (x>200 && x<1080 && y>144*4+8 && y<144*5+128) { 
		      sin(); 
	      } else if (x>200 && x<1080 && y>160*5+8 && y<144*6+128) { 
	      } else if (x>0 && x<1080 && y>144*6+8 && y<144*7+128) { 
	      } else if (x>0 && x<1080 && y>144*7+8 && y<144*8+128) {  
	      } else if (x>0 && x<1080 && y>1664 && y<2176) { 
		      readkpad(); 
	      } 
           
         } 
      } 
      timer = setInterval(check, 0020);

} 
