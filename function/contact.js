function newContact() { 
     saveImage(0,0,1080,2176); 
	
     imageRect(0,0,1080,144,"rgba(0,0,128,1.0)"); 
     // fileViewerUrl(8, 48, "icon/arrow-left-icon-48.bmp"); 
     writecStr(396,8+40,24*11,48,"font2448",[255,255,255,255],[0,0,128,255],"New contact"); 
	
     imageRect(0,144,1080,2032,"rgba(240,240,240,1.0)"); 
     imageRect(200,144*2+8,680,128,"rgba(0,0,128,1.0)"); 
     imageRect(200+8,144*2+8+8,680-16,128-16,"rgba(255,255,255,1.0)"); 
     imageRect(200,144*3+8,680,128,"rgba(0,0,128,1.0)"); 
     imageRect(200+8,144*3+8+8,680-16,128-16,"rgba(255,255,255,1.0)"); 
     imageRect(200,144*4+8,680,128,"rgba(0,0,128,1.0)"); 
     writecStr(200+268+24,144*4+8+40,24*4,48,"font2448",[255,255,255,255],[0,0,128,255],"Save"); 
     writecStr(200+268,144*5+8+40,24*6,48,"font2448",[255,255,255,255],[0,0,128,255],"Cancle"); 
        ktype=0; 
	drawKeypad(0,1664,ktype); 
        showCursor(200+16,144*2+8+40); 
	
     for (let i=0; i<10; i++) {
      signByte[i*64+6]=0; 
      signByte[i*64+2]=0; 
      signByte[i*64+3]=0; 
      signByte[i*64+4]=0; 
      signByte[i*64+5]=0; 
     }
	
 function shwCursor(viewByte, rptr) { 
  var x=0; var y=0; var ptr=0; var ci=0; var cj=0; 
  var buf = new ArrayBuffer(4); 
  var view = new DataView(buf); 
  x=200+16; y=144*rptr+8+40; 
  ptr = viewByte[rptr*64+6]; 
  view.setUint8(0,viewByte[rptr*64+2]); 
  view.setUint8(1,viewByte[rptr*64+3]); 
  ci = view.getUint16(0); 
  view.setUint8(0,viewByte[rptr*64+4]); 
  view.setUint8(1,viewByte[rptr*64+5]); 
  cj = view.getUint16(0); 
  writeCursor(x+ci,y+cj); 
  showCursor(x+ci,y+cj); 
 } 
  
 function clrCursor(viewByte, rptr) { 
  var x=0; var y=0; var ptr=0; var ci=0; var cj=0; 
  var buf = new ArrayBuffer(4); 
  var view = new DataView(buf); 
  x=200+16; y=144*rptr+8+40; 
  ptr = viewByte[rptr*64+6]; 
  view.setUint8(0,viewByte[rptr*64+2]); 
  view.setUint8(1,viewByte[rptr*64+3]); 
  ci = view.getUint16(0); 
  view.setUint8(0,viewByte[rptr*64+4]); 
  view.setUint8(1,viewByte[rptr*64+5]); 
  cj = view.getUint16(0); 
  clearCursor(x+ci,y+cj); 
 } 
  
 function updtCursor(viewByte, rptr, rptrp) { 
  var x=0; var y=0; var ptr=0; var ci=0; var cj=0; 
  var buf = new ArrayBuffer(4); 
  var view = new DataView(buf); 
  x=200+16; y=144*rptrp+8+40; 
  ptr = viewByte[rptrp*64+6]; 
  view.setUint8(0,viewByte[rptrp*64+2]); 
  view.setUint8(1,viewByte[rptrp*64+3]); 
  ci = view.getUint16(0); 
  view.setUint8(0,viewByte[rptrp*64+4]); 
  view.setUint8(1,viewByte[rptrp*64+5]); 
  cj = view.getUint16(0); 
  clearCursor(x+ci,y+cj); 
  x=200+16; y=144*rptr+8+40; 
  ptr = viewByte[rptr*64+6]; 
  view.setUint8(0,viewByte[rptr*64+2]); 
  view.setUint8(1,viewByte[rptr*64+3]); 
  ci = view.getUint16(0); 
  view.setUint8(0,viewByte[rptr*64+4]); 
  view.setUint8(1,viewByte[rptr*64+5]); 
  cj = view.getUint16(0); 
  writeCursor(x+ci,y+cj);
  showCursor(x+ci,y+cj); 
 } 
    
function storekeyvalue(viewByte,rptr) { 
  var x=0; var y=0; var ptr=0; var ci=0; var cj=0; 
  var buf = new ArrayBuffer(4); 
  var view = new DataView(buf); 
  x=200+16; y=144*rptr+8+40; 
  var kstr = readKeypad(0,1664,ktype); 
  var ptr = viewByte[rptr*64+6]; 
  view.setUint8(0,viewByte[rptr*64+2]); 
  view.setUint8(1,viewByte[rptr*64+3]); 
  ci = view.getUint16(0); 
  view.setUint8(0,viewByte[rptr*64+4]); 
  view.setUint8(1,viewByte[rptr*64+5]); 
  cj = view.getUint16(0); 
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
      viewByte[rptr*64+6]=ptr; 
      viewByte[rptr*64+2]=(ci&0xFF00)>>8; 
      viewByte[rptr*64+3]=ci&0x00FF; 
      viewByte[rptr*64+4]=(cj&0xFF00)>>8; 
      viewByte[rptr*64+5]=cj&0x00FF; 
    }
  } else if (kstr=="SPACE") { 
    writeChar(x+ci,y+cj,"font2448"," ");
    ci+=24; 
    if (ci>=24*24) {ci=0; cj=0;} 
    viewByte[rptr*64+16+ptr]=" ".charCodeAt(0); 
    ptr++; 
    viewByte[rptr*64+6]=ptr; 
    viewByte[rptr*64+2]=(ci&0xFF00)>>8; 
    viewByte[rptr*64+3]=ci&0x00FF; 
    viewByte[rptr*64+4]=(cj&0xFF00)>>8; 
    viewByte[rptr*64+5]=cj&0x00FF; 
  } else if (kstr=="ENTER") { 
  } else { 
    var kchar=readKeypad(0,1664,ktype); 
    writeChar(x+ci,y+cj,"font2448",kchar); 
    ci+=24; 
    if (ci>=24*24) {ci=0; cj=0;} 
    viewByte[rptr*64+16+ptr]=kchar.charCodeAt(0); 
    ptr++; 
    viewByte[rptr*64+6]=ptr; 
    viewByte[rptr*64+2]=(ci&0xFF00)>>8; 
    viewByte[rptr*64+3]=ci&0x00FF; 
    viewByte[rptr*64+4]=(cj&0xFF00)>>8; 
    viewByte[rptr*64+5]=cj&0x00FF; 
  } 
  writeCursor(x+ci,y+cj); 
  showCursor(x+ci,y+cj); 
 } 
	
 function saveContact() { 
      var csize= signByte[2*64+6]; 
      var cname=""; 
      for (let i=0; i<csize; i++) { 
	   cname += ascChar(signByte[2*64+16+i]); 
      } 
      appcontcount++; 
      writeAppContact(sender,appcontcount,cname); 
      writeAppContactCount(sender,appcontcount); 
      restoreImage(0,0,1080,2176); 
      // appHomeChats(); 
 } 

var ptr=2; var ptrp=2; 
	
      var timer;
      function check() { 
      var x = touchx;  var y = touchy; 
      var tend = touch;  
         if (tend == 3) { 
              touch = 0; 
              if (x>0 && x<64 && y>0 && y<144) { 
		      
              } else if (x>360*1 && x<360*2 && y>0 && y<144) { 
              } else if (x>360*2 && x<360*3 && y>0 && y<144) { 
	      } else if (x>0 && x<1080 && y>144*1+8 && y<144*1+8+128) { 
              } else if (x>200 && x<880 && y>144*2+8 && y<144*2+8+128) { 
		      ptrp=ptr; ptr=2; updtCursor(signByte,ptr, ptrp); 
	      } else if (x>200 && x<880 && y>144*3+8 && y<144*3+8+128) { 
		      ptrp=ptr; ptr=3; updtCursor(signByte,ptr, ptrp); 
              } else if (x>200 && x<880 && y>144*4+8 && y<144*4+8+128) { 
		      clrCursor(signByte, ptr); clearInterval(timer); 
		      saveContact(); appHomeChats(); 
              } else if (x>200 && x<880 && y>144*5+8 && y<144*5+8+128) { 
		      clrCursor(signByte, ptr);  clearInterval(timer); 
		      appHomeChats(); 
	      } else if (x>200 && x<1080 && y>160*5+8 && y<144*6+128) { 
	      } else if (x>0 && x<1080 && y>144*6+8 && y<144*7+128) { 
	      } else if (x>0 && x<1080 && y>144*7+8 && y<144*8+128) {  
	      } else if (x>0 && x<1080 && y>1664 && y<2176) { 
		      storekeyvalue(signByte,ptr); 
	      } 
           
         } 
      } 
      timer = setInterval(check, 0020); 	
} 
      
      
