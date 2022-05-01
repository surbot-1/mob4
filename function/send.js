function sendMessage() { 
  writeWH(msgByte); 
  var minfo = msgByte[32]; 
  var msize = msgByte[28]; 
  var mtype="text"; 
  for (let i=0; i<mtype.length; i++) { 
    msgByte[64+i] = mtype.charCodeAt(i);
  }  
  var status="sent"; 
  for (let i=0; i<status.length; i++) { 
    msgByte[36+i] = status.charCodeAt(i);
  }  
  var date = getDate("ddmmyyyy"); 
  for (let i=0; i<date.length; i++) { 
    msgByte[40+i] = date.charCodeAt(i);
  }  
  var time = getTime("12h"); 
  for (let i=0; i<time.length; i++) { 
    msgByte[50+i] = time.charCodeAt(i);
  }  
  for (let i=0; i<msize+80; i++) { 
    msgView[msgPtr*512+i] = msgByte[i]; 
  }  
  msgPtr++; 
  ci=0; cj=0; msgByte[28]=0; // msize 
  send(); 
  clearCursor(16,1448); 
  var cnv = document.getElementById("canvas"); 
  var ctx = cnv.getContext('2d'); 
  ctx.fillStyle = "rgba(255, 255, 255, 1.0)"; // white
  ctx.fillRect(16, 1448, 24*24, 48); 
  writeCursor(16,1448); 
  showCursor(16,1448);   
  if (chatbotactive) {setTimeout(replyChatbot, 5000);}
}  

function send1() { 
  var cnv = document.getElementById("canvas"); 
  var ctx = cnv.getContext('2d'); 
  // var imgBuf = new ArrayBuffer(4*1080*2032); 
  // var imgData = new Uint8Array(imgBuf); 
  var buf = new ArrayBuffer(4); 
  var view = new DataView(buf); 
  var minfo = msgView[(msgPtr-1)*512+32]; 
  var msize = msgView[(msgPtr-1)*512+28]; 
  view.setUint8(0, msgView[(msgPtr-1)*512+17]); 
  view.setUint8(1, msgView[(msgPtr-1)*512+16]);  
  var w = view.getUint16(0); 
  view.setUint8(0, msgView[(msgPtr-1)*512+19]); 
  view.setUint8(1, msgView[(msgPtr-1)*512+18]);  
  var h = view.getUint16(0); 
  var imgData = ctx.createImageData(1080, 1904-(h+64)-32); 
  imgData = ctx.getImageData(0,144+h+64+8,1080,1904-(h+64)-32); 
  ctx.putImageData(imgData,0,144); 
  ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; // lightgray
  ctx.fillRect(0, 2048-(h+64)-32, 1080, h+64+32); 
  var msgstr = ""; 
  for (let i=0; i<msize; i++) { 
    msgstr += ascChar(msgView[(msgPtr-1)*512+80+i]); 
  } 
  var status=""; 
  for (let i=0; i<4; i++) { 
    status += ascChar(msgView[(msgPtr-1)*512+36+i]); 
  } 
  var time=""; 
  for (let i=0; i<7; i++) { 
    time += ascChar(msgView[(msgPtr-1)*512+50+i]); 
  } 
  var x=0; var y=0; if (w<12*24) {w=12*24;} 
  if (minfo==0) { 
    x=1080-w-32-16; y=2048-(h+64)-32; 
    ctx.fillStyle = "rgba(200, 240, 200, 1.0)"; // blue 
    ctx.fillRect(x, y, w+32, h+32+32); 
    writecStr(x+16,y+16,w,h,"font2448",[0,0,0,255],[200,240,200,255],msgstr); 
    writecStr(1080-16-16-12*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[200,240,200,255],time); 
    writecStr(1080-16-16-4*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[200,240,200,255],status); 
    // setTimeout(() => {msgStatus(1080-16-16-4*24,y+h+24,"send");},1000); 
    // setTimeout(() => {msgStatus(1080-16-16-4*24,y+h+24,"sent");},2000); 
    // setTimeout(() => {msgStatus(1080-16-16-4*24,y+h+24,"dlvd");},3000); 
    // setTimeout(() => {msgStatus(1080-16-16-4*24,y+h+24,"seen");},4000);  
  } else if(minfo==1) { 
    x=16; y=2048-(h+64)-32; 
    ctx.fillStyle = "rgba(255, 255, 255, 1.0)"; // white 
    ctx.fillRect(x, y, w+32, h+32+32); 
    writecStr(x+16,y+16,w,h,"font2448",[0,0,0,255],[255,255,255,255],msgstr); 
    writecStr(w+32-7*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[255,255,255,255],time); 
  } else if(minfo==2) { 
    x=16; y=2048-(h+64)-32; 
    ctx.fillStyle = "rgba(255, 255, 255, 1.0)"; // white 
    ctx.fillRect(x, y, w+32, h+32+32); 
    writecStr(x+16,y+16,w,h,"font2448",[0,0,0,255],[255,255,255,255],msgstr); 
    writecStr(w+32-7*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[255,255,255,255],time); 
  } else if(minfo==3) { 
    x=1080-w-32-16; y=2048-(h+64)-32; 
    ctx.fillStyle = "rgba(200, 240, 200, 1.0)"; // blue  
    ctx.fillRect(x, y, w+32, h+32+32); 
    writecStr(x+16,y+16,w,h,"font2448",[0,0,0,255],[200,240,200,255],msgstr); 
    writecStr(1080-16-16-12*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[200,240,200,255],time); 
    writecStr(1080-16-16-4*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[200,240,200,255],status); 
  } 
  imgData = ctx.getImageData(0,2048-(h+64)-32,1080,h+64+8); 
  for (let i=0; i<1080*4*(h+64+8); i+=4) { 
	  appView[appPtr*1080*4+i+0]=imgData.data[i+0]; 
	  appView[appPtr*1080*4+i+1]=imgData.data[i+1];
	  appView[appPtr*1080*4+i+2]=imgData.data[i+2];
	  appView[appPtr*1080*4+i+3]=imgData.data[i+3];
  } 
  var mptr=appPtr; 
  appPtr += (h+64+8); 
  var mx=1080-w-32-16; var my=mptr; 
  var mw=w+32; var mh=h+64; 
  dirView[dirPtr*32+0]=msgid&0x00FF; 
  dirView[dirPtr*32+1]=(msgid&0xFF00)>>8; 
  dirView[dirPtr*32+16]=mx&0x000000FF; 
  dirView[dirPtr*32+17]=(mx&0x0000FF00)>>8; 
  dirView[dirPtr*32+18]=(mx&0x00FF0000)>>16; 
  dirView[dirPtr*32+19]=(mx&0xFF000000)>>24; 
  dirView[dirPtr*32+20]=my&0x000000FF; 
  dirView[dirPtr*32+21]=(my&0x0000FF00)>>8; 
  dirView[dirPtr*32+22]=(my&0x00FF0000)>>16; 
  dirView[dirPtr*32+23]=(my&0xFF000000)>>24; 
  dirView[dirPtr*32+24]=mw&0x00FF; 
  dirView[dirPtr*32+25]=(mw&0xFF00)>>8; 
  dirView[dirPtr*32+26]=mh&0x00FF; 
  dirView[dirPtr*32+27]=(mh&0xFF00)>>8; 
  dirView[dirPtr*32+28]=mw*4*mh&0x000000FF; 
  dirView[dirPtr*32+29]=(mw*4*mh&0x0000FF00)>>8; 
  dirView[dirPtr*32+30]=(mw*4*mh&0x00FF0000)>>16; 
  dirView[dirPtr*32+31]=(mw*4*mh&0xFF000000)>>24; 
  dirPtr++; 
}

function send() { 
  var cnv = document.getElementById("canvas"); 
  var ctx = cnv.getContext('2d'); 
  // var imgBuf = new ArrayBuffer(4*1080*2032); 
  // var imgData = new Uint8Array(imgBuf); 
  var buf = new ArrayBuffer(4); 
  var view = new DataView(buf); 
  var minfo = msgView[(msgPtr-1)*512+32]; 
  var msize = msgView[(msgPtr-1)*512+28]; 
  view.setUint8(0, msgView[(msgPtr-1)*512+17]); 
  view.setUint8(1, msgView[(msgPtr-1)*512+16]);  
  var w = view.getUint16(0); 
  view.setUint8(0, msgView[(msgPtr-1)*512+19]); 
  view.setUint8(1, msgView[(msgPtr-1)*512+18]);  
  var h = view.getUint16(0); 
  var imgData = ctx.createImageData(1080, 1264-32-(h+64)); 
  imgData = ctx.getImageData(0,144+h+64+8,1080,1264-32-(h+64)); 
  ctx.putImageData(imgData,0,144); 
  ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; // lightgray
  ctx.fillRect(0, 1408-(h+64)-32, 1080, h+64+32); 
  var msgstr = ""; 
  for (let i=0; i<msize; i++) { 
    msgstr += ascChar(msgView[(msgPtr-1)*512+80+i]); 
  } 
  var status=""; 
  for (let i=0; i<4; i++) { 
    status += ascChar(msgView[(msgPtr-1)*512+36+i]); 
  } 
  var time=""; 
  for (let i=0; i<7; i++) { 
    time += ascChar(msgView[(msgPtr-1)*512+50+i]); 
  } 
  var x=0; var y=0; if (w<12*24) {w=12*24;} 
  if (minfo==0) { 
    x=1080-w-32-16; y=1408-(h+64)-32; 
    ctx.fillStyle = "rgba(200, 240, 200, 1.0)"; // blue 
    ctx.fillRect(x, y, w+32, h+32+32);  
    writecStr(x+16,y+16,w,h,"font2448",[0,0,0,255],[200,240,200,255],msgstr); 
    writecStr(1080-16-16-12*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[200,240,200,255],time); 
    writecStr(1080-16-16-4*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[200,240,200,255],status); 
    // setTimeout(() => {msgStatus(1080-16-16-4*24,y+h+24,"send");},1000); 
    // setTimeout(() => {msgStatus(1080-16-16-4*24,y+h+24,"sent");},2000); 
    // setTimeout(() => {msgStatus(1080-16-16-4*24,y+h+24,"dlvd");},3000); 
    // setTimeout(() => {msgStatus(1080-16-16-4*24,y+h+24,"seen");},4000);  
  } else if(minfo==1) { 
    x=16; y=1408-(h+64)-32; 
    ctx.fillStyle = "rgba(255, 255, 255, 1.0)"; // white 
    ctx.fillRect(x, y, w+32, h+32+32); 
    writecStr(x+16,y+16,w,h,"font2448",[0,0,0,255],[255,255,255,255],msgstr); 
    writecStr(w+32-7*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[255,255,255,255],time); 
  } else if(minfo==2) { 
    x=16; y=1408-(h+64)-32; 
    ctx.fillStyle = "rgba(255, 255, 255, 1.0)"; // white 
    ctx.fillRect(x, y, w+32, h+32+32); 
    writecStr(x+16,y+16,w,h,"font2448",[0,0,0,255],[255,255,255,255],msgstr); 
    writecStr(w+32-7*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[255,255,255,255],time); 
  } else if(minfo==3) { 
    x=1080-w-32-16; y=1408-(h+64)-32; 
    ctx.fillStyle = "rgba(200, 240, 200, 1.0)"; // blue  
    ctx.fillRect(x, y, w+32, h+32+32); 
    writecStr(x+16,y+16,w,h,"font2448",[0,0,0,255],[200,240,200,255],msgstr); 
    writecStr(1080-16-16-12*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[200,240,200,255],time); 
    writecStr(1080-16-16-4*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[200,240,200,255],status); 
  }
  imgData = ctx.getImageData(0,1408-(h+64)-32,1080,h+64+8); 
  for (let i=0; i<1080*4*(h+64+8); i+=4) { 
	  appView[appPtr*1080*4+i+0]=imgData.data[i+0]; 
	  appView[appPtr*1080*4+i+1]=imgData.data[i+1];
	  appView[appPtr*1080*4+i+2]=imgData.data[i+2];
	  appView[appPtr*1080*4+i+3]=imgData.data[i+3];
  } 
  var mptr=appPtr; 
  appPtr += (h+64+8); 
  var mx=1080-w-32-16; var my=mptr; 
  var mw=w+32; var mh=h+64; 
  dirView[dirPtr*32+0]=msgid&0x00FF; 
  dirView[dirPtr*32+1]=(msgid&0xFF00)>>8; 
  dirView[dirPtr*32+16]=mx&0x000000FF; 
  dirView[dirPtr*32+17]=(mx&0x0000FF00)>>8; 
  dirView[dirPtr*32+18]=(mx&0x00FF0000)>>16; 
  dirView[dirPtr*32+19]=(mx&0xFF000000)>>24; 
  dirView[dirPtr*32+20]=my&0x000000FF; 
  dirView[dirPtr*32+21]=(my&0x0000FF00)>>8; 
  dirView[dirPtr*32+22]=(my&0x00FF0000)>>16; 
  dirView[dirPtr*32+23]=(my&0xFF000000)>>24; 
  dirView[dirPtr*32+24]=mw&0x00FF; 
  dirView[dirPtr*32+25]=(mw&0xFF00)>>8; 
  dirView[dirPtr*32+26]=mh&0x00FF; 
  dirView[dirPtr*32+27]=(mh&0xFF00)>>8; 
  dirView[dirPtr*32+28]=mw*4*mh&0x000000FF; 
  dirView[dirPtr*32+29]=(mw*4*mh&0x0000FF00)>>8; 
  dirView[dirPtr*32+30]=(mw*4*mh&0x00FF0000)>>16; 
  dirView[dirPtr*32+31]=(mw*4*mh&0xFF000000)>>24; 
  dirPtr++; 
}

function replyChatbot() { 
  chatbot(); 
  sendChatbot(); 
}

function sendChatbot() { 
  writeWH(botByte); 
  var minfo = botByte[32]; 
  var msize = botByte[28]; 
  for (let i=0; i<msize+80; i++) { 
    msgView[msgPtr*512+i] = botByte[i]; 
  }  
  msgPtr++; 
  botByte[28]=0;  
  if (sendactive==1) { 
      if (appPtrf!=appPtr) { 
      var ptr=appPtr; showMessage(0,144,1080,1880,0,ptr); 
      } else if (appPtrf==appPtr) {}
      send1(); 
  } 
  else if (sendactive==2) { 
      if (appPtrf!=appPtr) { 
      var ptr=appPtr; showMessage(0,144,1080,1240,0,ptr); 
      } else if (appPtrf==appPtr) {} 
      send(); 
  } 
}  

function sendSenderMessage() { 
  writeWH(sndByte); 
  var minfo = sndByte[32]; 
  var msize = sndByte[28]; 
  for (let i=0; i<msize+80; i++) { 
    msgView[msgPtr*512+i] = sndByte[i]; 
  }  
  msgPtr++; 
  sndByte[28]=0;  
  send(); 
}  

function sendUserMessage() { 
  writeWH(usrByte); 
  var minfo = usrByte[32]; 
  var msize = usrByte[28]; 
  for (let i=0; i<msize+80; i++) { 
    msgView[msgPtr*512+i] = usrByte[i]; 
  }  
  msgPtr++; 
  usrByte[28]=0;  
  if (sendactive==1) { 
      if (appPtrf!=appPtr) { 
      var ptr=appPtr; showMessage(0,144,1080,1880,0,ptr); 
      } else if (appPtrf==appPtr) {}
      send1(); 
  } 
  else if (sendactive==2) { 
      if (appPtrf!=appPtr) { 
      var ptr=appPtr; showMessage(0,144,1080,1240,0,ptr); 
      } else if (appPtrf==appPtr) {} 
      send(); 
  } 
} 

function sendOnServer(user) { 
  var minfo = msgView[(msgPtr-1)*512+32]; 
  var msize = msgView[(msgPtr-1)*512+28]; 
  var mtype = ""; 
  for (let i=0; i<4; i++) { 
    mtype += ascChar(msgView[(msgPtr-1)*512+64+i]); 
  }  
  var msgstr = ""; 
  for (let i=0; i<msize; i++) { 
    msgstr += ascChar(msgView[(msgPtr-1)*512+80+i]); 
  }  
  var status =""; 
  for (let i=0; i<4; i++) { 
    status += ascChar(msgView[(msgPtr-1)*512+36+i]); 
  }  
  var date = getDate("ddmmyyyy"); 
  var time = getTime("12h"); 
  // var ip = getIP(); 
  writeAppMessage(sender,receiver,msgid,sender,mtype,msgstr,"sent",date,time,"ip"); 
  writeAppMessageCount(sender,receiver,msgid); 
  writeReadStatus(sender,receiver,msgid); 
  msgid++; 
} 

function sendOnServerRcv(user) { 
  var minfo = msgView[(msgPtr-1)*512+32]; 
  var msize = msgView[(msgPtr-1)*512+28]; 
  var mtype =""; 
  for (let i=0; i<4; i++) { 
    mtype += ascChar(msgView[(msgPtr-1)*512+64+i]); 
  }  
  var msgstr =""; 
  for (let i=0; i<msize; i++) { 
    msgstr += ascChar(msgView[(msgPtr-1)*512+80+i]); 
  }  
  var status =""; 
  for (let i=0; i<4; i++) { 
    status += ascChar(msgView[(msgPtr-1)*512+36+i]); 
  }  
  var date =""; 
  for (let i=0; i<10; i++) { 
    date += ascChar(msgView[(msgPtr-1)*512+40+i]); 
  }  
  var time =""; 
  for (let i=0; i<7; i++) { 
    time += ascChar(msgView[(msgPtr-1)*512+50+i]); 
  }  
  // var ip = getIP(); 
  writeAppMessage(sender,receiver,msgid,receiver,mtype,msgstr,"seen",date,time,"ip"); 
  writeAppMessageCount(sender,receiver,msgid); 
  msgid++; 
} 

function sendOnServerRcvImg(sndr,rcvr,mid,name,mtype,msg,sts,date,time,ip) { 
	writeAppMessage(sender,receiver,msgid,receiver,mtype,msg,sts,date,time,ip); 
        writeAppMessageCount(sender,receiver,msgid); 
        msgid++; 
}

function receiveFromServer(user) { 
  readAppMessage(user+"To"+sender); 
  sendUserMessage(); 
} 

function writeReadStatus(sndr,rcvr,mid) { 
  var tmr; var tmr2; var b=true;  // readmsgsts="Null"; 
  var x=0; var y=0; var w=24*4; var h=32; 
  var readsts = readAppMessageReadStatus(sndr,rcvr,mid);  
  function f1() { 
    if (readmsgsts=="dlvd" && b) { b=false; 
       if (sendactive==1) {x=1080-16-16-4*24; y=2048-32-32-8;} 
       else if (sendactive==2) {x=1080-16-16-4*24; y=1408-32-32-8;} 
       writecStr(x,y,w,h,"ubuntufont",[0,0,0,255],[200,240,200,255],"dlvd"); 
    } else if (readmsgsts=="seen") { 
       clearInterval(tmr); clearInterval(tmr2); 
       if (sendactive==1) {x=1080-16-16-4*24; y=2048-32-32-8;} 
       else if (sendactive==2) {x=1080-16-16-4*24; y=1408-32-32-8;} 
       writecStr(x,y,w,h,"ubuntufont",[0,0,0,255],[200,240,200,255],"seen"); 
    } 
  }
  tmr = setInterval(f1, 0100); 
  tmr2 = setInterval( ()=> {readAppMessageReadStatus(sndr,rcvr,mid);}, 2000);
}

function writeWH(view) { 
  var msize = view[28]; 
  var w=0; var h=48+8;  
  var j=0; 
  for (let i=0; i<msize; i++) {  
    if (i>=36) {w=24*36;} else {w+=24;} 
    if (view[i]==0x0A) {j=0; h+=48+8;} 
    if (j>=36) {j=0; h+=48+8;} 
    j++; 
  }
    view[16] = w&0x00FF; 
    view[17] = (w&0xFF00)>>8; 
    view[18] = h&0x00FF; 
    view[19] = (h&0xFF00)>>8; 
} 

function getWH(view) { 
  var msize = view[28]; 
  var j=0; var w=0; var h=32+4; 
  for (let i=0; i<msize; i++) { 
    if (i>=36) {w=24*36;} else {w+=24;} 
    if (view[i]==0x0A) {j=0; h+=32+4;} 
    if (j>=36) {j=0; h+=32+4;} 
    j++; 
  }
    view[16] = w&0x00FF; 
    view[17] = (w&0xFF00)>>8; 
    view[18] = h&0x00FF; 
    view[19] = (h&0xFF00)>>8; 
  var obj = { 
    width: w, 
    height: h
  }; 
  return obj; 
} 

function updateMsgSts(x,y,mView,s) { 
  var w = getWH(mView).width; 
  var h = getWH(mView).height; 
  msgStatus(x+360,y+h+32,s); 
}

function msgStatus(x,y,s) { 
  var status=""; 
  if (s=="send") {status="send";} 
  else if (s=="sent") {status="sent";} 
  else if (s=="dlvd") {status="dlvd";} 
  else if (s=="seen") {status="seen";} 
  writecStr(x,y,432,128,"ubuntufont",[0,0,0,255],[200,240,200,255],status); 
} 

function showMessage(x,y,w,h,vi,vf) { 
     if (appPtr) { 
        var ax=0; var ay=0; var aw=w; var ah=0; var ai=0; 
	if (appPtr<=h) {ay=h-appPtr; ah=appPtr; ai=0;} 
	else if (appPtr>h) {ay=0; ah=h; ai=vf-h;} 
	var cnv = document.getElementById("canvas"); 
        var ctx = cnv.getContext('2d'); 
	var imgData = ctx.createImageData(aw, ah); 
	for (let i=0; i<aw*4*ah; i+=4) { 
            imgData.data[i+0]=appView[ai*1080*4+i+0]; 
            imgData.data[i+1]=appView[ai*1080*4+i+1]; 
            imgData.data[i+2]=appView[ai*1080*4+i+2]; 
            imgData.data[i+3]=appView[ai*1080*4+i+3]; 
	} 
	ctx.putImageData(imgData,x+ax,y+ay); 
     }
}








