function Contact() { 
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
	
 function addContact() { 
      var csize= signByte[0+28]; 
      var cname=""; 
      for (let i=0; i<csize; i++) { 
	   cname += ascChar(signByte[0+64+i]); 
      } 
      appcontcount++; 
      writeAppContact(sender,appcontcount,cname); 
      writeAppContactCount(sender,appcontcount); 
      restoreImage(0,144,1080,2032); 
      // appHomeChats(); 
 } 
      
      
