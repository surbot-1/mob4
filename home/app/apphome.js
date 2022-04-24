function appHomeChats() { 
var cnv = document.getElementById("canvas"); 
var ctx = cnv.getContext('2d'); 
ctx.fillStyle = "rgba(0, 0, 128, 1.0)"; // blue
ctx.fillRect(0, 0, 1080, 144); 
  writecStr(128+360*0,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"CHATS"); 
  writecStr(128+360*1,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"STATUS"); 
  writecStr(128+360*2,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"CALLS"); 
	
  fileViewerUrl(920, 2024, "icon/add-icon-128.bmp"); 
	
ctx.fillStyle = "rgba(240, 240, 240, 1.0)";  // lightgray 
ctx.fillRect(0, 144, 1080, 2032); 
	
	
/* fileViewerUrl(64, 144*1+8, "icon/business-woman-icon-128.bmp"); 
writecStr(200,144*1+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"sAy"); 
fileViewerUrl(64, 144*2+8, "icon/business-man-icon-128.bmp"); 
writecStr(200,144*2+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"Yash Shiv"); 
fileViewerUrl(64, 144*3+8, "icon/business-man-icon-128.bmp"); 
writecStr(200,144*3+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"Jitendra"); */ 
	
function addFriend() { 
     saveImage(0,144,1080,2032); 
     imageRect(0,144,1080,2032,"rgba(240,240,240,1.0)"); 
     imageRect(200,144*2+8,680,128,"rgba(0,0,128,1.0)"); 
     imageRect(200+8,144*2+8+8,680-16,128-16,"rgba(255,255,255,1.0)"); 
     imageRect(200,144*3+8,680,128,"rgba(0,0,128,1.0)"); 
     writecStr(200+268+36,144*3+8+40,24*3,48,"font2448",[255,255,255,255],[0,0,128,255],"Add"); 
	drawKeypad(0,1664,ktype); 
        showCursor(200+16,144*2+8+40); 
	
      signByte[0+28]=0; 
      signByte[0+32]=0; 
      signByte[0+33]=0; 
      signByte[0+34]=0; 
      signByte[0+35]=0; 
	
 function shwCursor(viewByte, rptr) { 
  var x=0; var y=0; var ptr=0; var ci=0; var cj=0; 
  var buf = new ArrayBuffer(4); 
  var view = new DataView(buf); 
  if (rptr==0) {x=200+16; y=144*2+8+40;} 
  else if (rptr==512) {x=200+16; y=144*3+8+40;} 
  ptr = viewByte[rptr+28]; 
  view.setUint8(0,viewByte[rptr+32]); 
  view.setUint8(1,viewByte[rptr+33]); 
  ci = view.getUint16(0); 
  view.setUint8(0,viewByte[rptr+34]); 
  view.setUint8(1,viewByte[rptr+35]); 
  cj = view.getUint16(0); 
  writeCursor(x+ci,y+cj); 
  showCursor(x+ci,y+cj); 
 }
	
 function clrCursor(viewByte, rptr) { 
  var x=0; var y=0; var ptr=0; var ci=0; var cj=0; 
  var buf = new ArrayBuffer(4); 
  var view = new DataView(buf); 
  if (rptr==0) {x=200+16; y=144*2+8+40;} 
  else if (rptr==512) {x=200+16; y=144*3+8+40;} 
  ptr = viewByte[rptr+28]; 
  view.setUint8(0,viewByte[rptr+32]); 
  view.setUint8(1,viewByte[rptr+33]); 
  ci = view.getUint16(0); 
  view.setUint8(0,viewByte[rptr+34]); 
  view.setUint8(1,viewByte[rptr+35]); 
  cj = view.getUint16(0); 
  clearCursor(x+ci,y+cj); 
 }
	
 function updtCursor(viewByte, rptr, rptrp) { 
  var x=0; var y=0; var ptr=0; var ci=0; var cj=0; 
  var buf = new ArrayBuffer(4); 
  var view = new DataView(buf); 
  if (rptrp==0) {x=200+16; y=144*2+8+40;} 
  else if (rptrp==512) {x=200+16; y=144*3+8+40;} 
  ptr = viewByte[rptrp+28]; 
  view.setUint8(0,viewByte[rptrp+32]); 
  view.setUint8(1,viewByte[rptrp+33]); 
  ci = view.getUint16(0); 
  view.setUint8(0,viewByte[rptrp+34]); 
  view.setUint8(1,viewByte[rptrp+35]); 
  cj = view.getUint16(0); 
  clearCursor(x+ci,y+cj); 
  if (rptr==0) {x=200+16; y=144*2+8+40;} 
  else if (rptr==512) {x=200+16; y=144*3+8+40;} 
  ptr = viewByte[rptr+28]; 
  view.setUint8(0,viewByte[rptr+32]); 
  view.setUint8(1,viewByte[rptr+33]); 
  ci = view.getUint16(0); 
  view.setUint8(0,viewByte[rptr+34]); 
  view.setUint8(1,viewByte[rptr+35]); 
  cj = view.getUint16(0); 
  writeCursor(x+ci,y+cj);
  showCursor(x+ci,y+cj); 
 } 
	
 function storekeyvalue(viewByte,rptr) { 
  var x=0; var y=0; var ptr=0; var ci=0; var cj=0; 
  var buf = new ArrayBuffer(4); 
  var view = new DataView(buf); 
  if (rptr==0) {x=200+16; y=144*2+8+40;} 
  else if (rptr==512) {x=200+16; y=144*3+8+40;} 
  var kstr = readKeypad(0,1664,ktype); 
  var ptr = viewByte[rptr+28]; 
  view.setUint8(0,viewByte[rptr+32]); 
  view.setUint8(1,viewByte[rptr+33]); 
  ci = view.getUint16(0); 
  view.setUint8(0,viewByte[rptr+34]); 
  view.setUint8(1,viewByte[rptr+35]); 
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
      viewByte[rptr+28]=ptr; 
      viewByte[rptr+32]=(ci&0xFF00)>>8; 
      viewByte[rptr+33]=ci&0x00FF; 
      viewByte[rptr+34]=(cj&0xFF00)>>8; 
      viewByte[rptr+35]=cj&0x00FF; 
    }
  } else if (kstr=="SPACE") { 
    writeChar(x+ci,y+cj,"font2448"," ");
    ci+=24; 
    if (ci>=24*24) {ci=0; cj=0;} 
    viewByte[rptr+64+ptr]=" ".charCodeAt(0); 
    ptr++; 
    viewByte[rptr+28]=ptr; 
    viewByte[rptr+32]=(ci&0xFF00)>>8; 
    viewByte[rptr+33]=ci&0x00FF; 
    viewByte[rptr+34]=(cj&0xFF00)>>8; 
    viewByte[rptr+35]=cj&0x00FF; 
  } else if (kstr=="ENTER") { 
  } else { 
    var kchar=readKeypad(0,1664,ktype); 
    writeChar(x+ci,y+cj,"font2448",kchar); 
    ci+=24; 
    if (ci>=24*24) {ci=0; cj=0;} 
    viewByte[rptr+64+ptr]=kchar.charCodeAt(0); 
    ptr++; 
    viewByte[rptr+28]=ptr; 
    viewByte[rptr+32]=(ci&0xFF00)>>8; 
    viewByte[rptr+33]=ci&0x00FF; 
    viewByte[rptr+34]=(cj&0xFF00)>>8; 
    viewByte[rptr+35]=cj&0x00FF; 
  } 
  writeCursor(x+ci,y+cj); 
  showCursor(x+ci,y+cj); 
 } 
	
 function add() { 
      var fsize= signByte[0+28]; 
      var fname=""; 
      for (let i=0; i<fsize; i++) { 
	   fname += ascChar(signByte[0+64+i]); 
      } 
      appfriendcount++; 
      writeAppFriend(sender,appfriendcount,fname); 
      writeAppFriendCount(sender,appfriendcount); 
      restoreImage(0,144,1080,2032); 
      appHomeChats(); 
 }
	
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
		      ptrp=ptr; ptr=0; updtCursor(signByte,ptr, ptrp); 
              } else if (x>200 && x<880 && y>144*3+8 && y<144*3+8+128) { 
		      clrCursor(signByte, ptr); clearInterval(timer); add(); 
              } else if (x>200 && x<880 && y>144*4+8 && y<144*4+8+128) { 
		      // clrCursor(signByte, ptr); clearInterval(timer); sin(); 
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
	
var afname=[]; 
	
function writefName() {  
     for (let i=1; i<appfriendcount+1; i++) {
	fileViewerUrl(64, 144*i+8, "icon/business-man-icon-128.bmp"); 
        writecStr(200,144*i+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],fname[i]); 
     }
} 
	
if (true) { 
   var tmr; appfriendcount=0; 
   var fcount = readAppFriendCount(sender); 
   tmr = setInterval( ()=> { 
      if (appfriendcount) { alert(appfriendcount);
          clearInterval(tmr); 
          for (let i=1; i<appfriendcount+1; i++) { 
	     readAppFriend(sender, i); 
          } 
      } else if (!appfriendcount) { 
         fcount = readAppFriendCount(sender); 
      }
   }, 0200); 
} 
	
if (true) { 
   var tmr; appfriendname=""; 
   var rcvcmp = friendView[appfriendcount*32+0]; 
   tmr = setInterval( ()=> { 
     if (rcvcmp) { aler(rcvcmp); 
       clearInterval(tmr); var name=""; 
       for (let i=1; i<appfriendcount+1; i++) { 
	  for (let j=0; i<(friendView[i*32+2]); j++) { 
	    name += ascChar(friendView[i*32+8+j]); 
	  } 
	  afname[i]=name; name=""; alert(afname[i]);
       } 
       writefName(); 
     } else if (!rcvcmp) { 
       rcvcmp = friendView[appfriendcount*32+0]; 
     }
   }, 0200); 
} 
	
	
	var timer;
	function check() { 
	var x = touchx;  var y = touchy; 
	var tend = touch;  
           if (tend == 3) { touch = 0;
              if (x>0 && x<360*1 && y>0 && y<144) { 
              } else if (x>360*1 && x<360*2 && y>0 && y<144) { 
              } else if (x>360*2 && x<360*3 && y>0 && y<144) { 
              } else if (x>0 && x<1080 && y>144*1 && y<144*2) { 
		      clearInterval(timer); appHomeChatsChatbot(); 
              } else if (x>0 && x<1080 && y>144*2 && y<144*3) { 
		      clearInterval(timer); 
		      receiver = "Yash Shiv"; 
		      appHomeChatsUser(receiver); 
              } else if (x>0 && x<1080 && y>144*3 && y<144*4) { 
		      clearInterval(timer); 
		      receiver = "Jitendra"; 
		      appHomeChatsUser(receiver); 
              } else if (x>0 && x<1080 && y>144*4 && y<144*5) { 
		      clearInterval(timer); 
		      receiver = "sAy1"; 
		      appHomeChatsUser(receiver); 
              } else if (x>0 && x<1080 && y>144*5 && y<144*5+144) { 
		      clearInterval(timer); 
		      receiver = "sAy2"; 
		      appHomeChatsUser(receiver); 
	      } else if (x>0 && x<1080 && y>160*6 && y<160*6+144) { 
	      } else if (x>0 && x<1080 && y>160*7 && y<160*7+144) { 
	      } else if (x>0 && x<1080 && y>160*8 && y<160*8+144) { 
	      } else if (x>0 && x<1080 && y>160*9 && y<160*9+144) { 
	      } else if (x>0 && x<1080 && y>160*10 && y<160*10+144) { 
	      } else if (x>920 && x<920+128 && y>2024 && y<2024+128) { 
		      clearInterval(timer); addFriend(); 
	      }
		      
           } 
	}
	timer = setInterval(check, 0020); 

}

function appHomeStatus() { 
} 

function appHomeCalls() { 
} 











