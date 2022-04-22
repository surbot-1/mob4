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
var ptr=0; var ptrp=0; 
  
  
      var timer;
      function check() { 
      var x = touchx;  var y = touchy; 
      var tend = touch;  
         if (tend == 3) { 
              touch = 0; 
              if (x>0 && x<360*1 && y>0 && y<144) { 
              } else if (x>360*1 && x<360*2 && y>0 && y<144) { 
              } else if (x>360*2 && x<360*3 && y>0 && y<144) { 
	      } else if (x>0 && x<1080 && y>144*1+8 && y<144*1+8+128) { 
              } else if (x>200 && x<880 && y>144*2+8 && y<144*2+8+128) { 
		      ptrp=ptr; ptr=0; updtCursor(); 
              } else if (x>200 && x<880 && y>144*3+8 && y<144*3+8+128) { 
		      ptrp=ptr; ptr=512; updtCursor(); 
              } else if (x>200 && x<880 && y>144*4+8 && y<144*4+8+128) { 
		      sin(); 
	      } else if (x>200 && x<1080 && y>160*5+8 && y<144*6+128) { 
	      } else if (x>0 && x<1080 && y>144*6+8 && y<144*7+128) { 
	      } else if (x>0 && x<1080 && y>144*7+8 && y<144*8+128) {  
	      } else if (x>0 && x<1080 && y>1664 && y<2176) { 
		      storekeyvalue(signByte,ptr); 
	      } 
           
         } 
      } 
      timer = setInterval(check, 0020); 
	
	
 function updtCursor() { 
  var ci=0; var cj=0; var pr=0; 
  if (ptrp==0) {x=200+16; y=144*2+8+40;} 
  else if (ptrp==512) {x=200+16; y=144*3+8+40;} 
  pr = viewByte[ptrp+28]; 
  ci=pr*24; cj=0; 
  clearCursor(x+ci,y+cj); 
  if (ptr==0) {x=200+16; y=144*2+8+40;} 
  else if (ptr==512) {x=200+16; y=144*3+8+40;} 
  pr = viewByte[ptr+28]; 
  ci=pr*24; cj=0; 
  writeCursor(x+ci,y+cj);
  showCursor(x+ci,y+cj); 
 }
	
 function storekeyvalue(viewByte,rptr) { 
  var x=0; var y=0; var ci=0; var cj=0; var ptr=0; 
  if (rptr==0) {x=200+16; y=144*2+8+40;} 
  else if (rptr==512) {x=200+16; y=144*3+8+40;} 
  var kstr = readKeypad(0,1664,ktype); 
  var ptr = viewByte[rptr+28]; 
  ci=ptr*24; cj=0; 
  clearCursor(x+ci,y+cj); 
  if (kstr=="SHIFT") {  
    if (ktype==0 || ktype==2) { 
      ktype++; 
      drawKeypad(0,1664,ktype);
    } else if (ktype==1 || ktype==3) { 
      ktype--; 
      drawKeypad(0,1664,ktype); 
    }
  } else if (kstr=="?123") { 
    ktype=2; 
    drawKeypad(0,1664,ktype);
  } else if (kstr=="ABC") { 
    ktype=0; 
    drawKeypad(0,1664,ktype); 
  } else if (kstr=="BS") { 
    if (ptr==0) { 
    } else { 
      if (ci==0) {ci=24*23;} else {ci-=24;} 
      writeChar(x+ci,y+cj,"font2448"," "); 
      ptr--; 
      viewByte[rptr+32]=0x00; 
      viewByte[rptr+28]=ptr; 
    }
  } else if (kstr=="SPACE") { 
    writeChar(x+ci,y+cj,"font2448"," ");
    ci+=24; 
    if (ci>=24*24) {ci=0; cj=0;} 
    viewByte[rptr+64+ptr]=" ".charCodeAt(0); 
    ptr++; 
    viewByte[rptr+32]=0x00;
    viewByte[rptr+28]=ptr; 
  } else if (kstr=="ENTER") { 
  } else { 
    var kchar=readKeypad(0,1664,ktype); 
    writeChar(x+ci,y+cj,"font2448",kchar); 
    ci+=24; 
    if (ci>=24*24) {ci=0; cj=0;} 
    viewByte[rptr+64+ptr]=kchar.charCodeAt(0); 
    ptr++; 
    viewByte[rptr+32]=0x00;
    viewByte[rptr+28]=ptr; 
  } 
  writeCursor(x+ci,y+cj); 
  showCursor(x+ci,y+cj); 
 } 

} 
