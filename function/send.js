function sendMessage() { 
  writeWH(msgByte); 
  var minfo = msgByte[0]; 
  var msize = msgByte[28]; 
  for (let i=0; i<msize+32; i++) { 
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
  var minfo = msgView[(msgPtr-1)*512+0]; 
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
    msgstr += ascChar(msgView[(msgPtr-1)*512+32+i]); 
  } 
  var x=0; var y=0; if (w<12*24) {w=12*24;} 
  if (minfo==0) { 
    x=1080-w-32-16; y=2048-(h+64)-32; 
    ctx.fillStyle = "rgba(200, 240, 200, 1.0)"; // blue 
    ctx.fillRect(x, y, w+32, h+32+32); 
    var time = getTime("12h"); 
    writecStr(x+16,y+16,w,h,"ubuntubold",[0,0,0,255],[200,240,200,255],msgstr); 
    writecStr(1080-16-16-12*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[200,240,200,255],time); 
    // setTimeout(() => {msgStatus(1080-16-16-4*24,y+h+24,"send");},1000); 
    setTimeout(() => {msgStatus(1080-16-16-4*24,y+h+24,"sent");},2000); 
    setTimeout(() => {msgStatus(1080-16-16-4*24,y+h+24,"dlvd");},3000); 
    setTimeout(() => {msgStatus(1080-16-16-4*24,y+h+24,"seen");},4000);  
  } else if(minfo==1) { 
    var time = getTime("12h"); 
    x=16; y=2048-(h+64)-32; 
    ctx.fillStyle = "rgba(255, 255, 255, 1.0)"; // white 
    ctx.fillRect(x, y, w+32, h+32+32); 
    writecStr(x+16,y+16,w,h,"ubuntubold",[0,0,0,255],[255,255,255,255],msgstr); 
    writecStr(w+32-7*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[255,255,255,255],time); 
  } else if(minfo==2) { 
    x=16; y=2048-(h+64)-32;
    var time = getTime("12h"); 
    ctx.fillStyle = "rgba(255, 255, 255, 1.0)"; // white 
    ctx.fillRect(x, y, w+32, h+32+32); 
    writecStr(x+16,y+16,w,h,"ubuntubold",[0,0,0,255],[255,255,255,255],msgstr); 
    writecStr(w+32-7*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[255,255,255,255],time); 
  } else if(minfo==3) { 
    var time = getTime("12h");  
    x=1080-w-32-16; y=2048-(h+64)-32; 
    ctx.fillStyle = "rgba(200, 240, 200, 1.0)"; // blue  
    ctx.fillRect(x, y, w+32, h+32+32); 
    writecStr(x+16,y+16,w,h,"ubuntubold",[0,0,0,255],[200,240,200,255],msgstr); 
    writecStr(1080-16-16-12*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[200,240,200,255],time); 
  } 
  imgData = ctx.getImageData(0,2048-(h+64)-32,1080,h+64+8); 
  for (let i=0; i<1080*4*(h+64+8); i+=4) { 
	  appView[appPtr*1080*4+i+0]=imgData.data[i+0]; 
	  appView[appPtr*1080*4+i+1]=imgData.data[i+1];
	  appView[appPtr*1080*4+i+2]=imgData.data[i+2];
	  appView[appPtr*1080*4+i+3]=imgData.data[i+3];
  } 
  appPtr += (h+64+8); 
}

function send() { 
  var cnv = document.getElementById("canvas"); 
  var ctx = cnv.getContext('2d'); 
  // var imgBuf = new ArrayBuffer(4*1080*2032); 
  // var imgData = new Uint8Array(imgBuf); 
  var buf = new ArrayBuffer(4); 
  var view = new DataView(buf); 
  var minfo = msgView[(msgPtr-1)*512+0]; 
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
    msgstr += ascChar(msgView[(msgPtr-1)*512+32+i]); 
  } 
  var x=0; var y=0; if (w<12*24) {w=12*24;} 
  if (minfo==0) { 
    x=1080-w-32-16; y=1408-(h+64)-32; 
    ctx.fillStyle = "rgba(200, 240, 200, 1.0)"; // blue 
    ctx.fillRect(x, y, w+32, h+32+32); 
    var time = getTime("12h"); 
    writecStr(x+16,y+16,w,h,"ubuntubold",[0,0,0,255],[200,240,200,255],msgstr); 
    writecStr(1080-16-16-12*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[200,240,200,255],time); 
    // setTimeout(() => {msgStatus(1080-16-16-4*24,y+h+24,"send");},1000); 
    setTimeout(() => {msgStatus(1080-16-16-4*24,y+h+24,"sent");},2000); 
    // setTimeout(() => {msgStatus(1080-16-16-4*24,y+h+24,"dlvd");},3000); 
    setTimeout(() => {msgStatus(1080-16-16-4*24,y+h+24,"seen");},4000);  
  } else if(minfo==1) { 
    var time = getTime("12h"); 
    x=16; y=1408-(h+64)-32; 
    ctx.fillStyle = "rgba(255, 255, 255, 1.0)"; // white 
    ctx.fillRect(x, y, w+32, h+32+32); 
    writecStr(x+16,y+16,w,h,"ubuntubold",[0,0,0,255],[255,255,255,255],msgstr); 
    writecStr(w+32-7*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[255,255,255,255],time); 
  } else if(minfo==2) { 
    x=16; y=1408-(h+64)-32;
    var time = getTime("12h"); 
    ctx.fillStyle = "rgba(255, 255, 255, 1.0)"; // white 
    ctx.fillRect(x, y, w+32, h+32+32); 
    writecStr(x+16,y+16,w,h,"ubuntubold",[0,0,0,255],[255,255,255,255],msgstr); 
    writecStr(w+32-7*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[255,255,255,255],time); 
  } else if(minfo==3) { 
    var time = getTime("12h");  
    x=1080-w-32-16; y=1408-(h+64)-32; 
    ctx.fillStyle = "rgba(200, 240, 200, 1.0)"; // blue  
    ctx.fillRect(x, y, w+32, h+32+32); 
    writecStr(x+16,y+16,w,h,"ubuntubold",[0,0,0,255],[200,240,200,255],msgstr); 
    writecStr(1080-16-16-12*24,y+h+24,w,h,"ubuntufont",[0,0,0,255],[200,240,200,255],time); 
  } 
  imgData = ctx.getImageData(0,1408-(h+64)-32,1080,h+64+8); 
  for (let i=0; i<1080*4*(h+64+8); i+=4) { 
	  appView[appPtr*1080*4+i+0]=imgData.data[i+0]; 
	  appView[appPtr*1080*4+i+1]=imgData.data[i+1];
	  appView[appPtr*1080*4+i+2]=imgData.data[i+2];
	  appView[appPtr*1080*4+i+3]=imgData.data[i+3];
  } 
  appPtr += (h+64+8); 
}

function replyChatbot() { 
  chatbot(); 
  sendChatbot(); 
}

function sendChatbot() { 
  writeWH(botByte); 
  var minfo = botByte[0]; 
  var msize = botByte[28]; 
  for (let i=0; i<msize+32; i++) { 
    msgView[msgPtr*512+i] = botByte[i]; 
  }  
  msgPtr++; 
  botByte[28]=0;  
  if (sendactive==1) {send1();} 
  else if (sendactive==2) {send();} 
}  

function sendSenderMessage() { 
  writeWH(sndByte); 
  var minfo = sndByte[0]; 
  var msize = sndByte[28]; 
  for (let i=0; i<msize+32; i++) { 
    msgView[msgPtr*512+i] = sndByte[i]; 
  }  
  msgPtr++; 
  sndByte[28]=0;  
  send(); 
}  

function sendUserMessage() { 
  writeWH(usrByte); 
  var minfo = usrByte[0]; 
  var msize = usrByte[28]; 
  for (let i=0; i<msize+32; i++) { 
    msgView[msgPtr*512+i] = usrByte[i]; 
  }  
  msgPtr++; 
  usrByte[28]=0;  
  if (sendactive==1) {send1();} 
  else if (sendactive==2) {send();} 
} 

function sendOnServer(user) { 
  var minfo = msgView[(msgPtr-1)*512+0]; 
  var msize = msgView[(msgPtr-1)*512+28]; 
  var msgstr = ""; 
  for (let i=0; i<msize; i++) { 
    msgstr += ascChar(msgView[(msgPtr-1)*512+32+i]); 
  }  
  var time = getTime("12h"); 
  // var ip = getIP(); 
  writeAppMessage(sender,receiver,msgid,sender,msgstr,"sent",time,"ip"); 
  writeAppMessageCount(sender,receiver,msgid); 
  msgid++; 
} 

function sendOnServerReceive(msgstr) { 
  var time = getTime("12h"); 
  writeAppMessage(sender,receiver,msgid,receiver,msgstr,"seen",time,"ip"); 
  writeAppMessageCount(sender,receiver,msgid); 
  msgid++; 	
}

function receiveFromServer(user) { 
  readAppMessage(user+"To"+sender); 
  sendUserMessage(); 
}

function writeWH(view) { 
  var msize = view[28]; 
  var j=0; var w=0; var h=32; 
  for (let i=0; i<msize; i++) {  
    if (i>=36) {w=24*36;} else {w+=24;} 
    if (view[i]==0x0A) {j=0; h+=32;} 
    if (j>=36) {j=0; h+=32;} 
    j++; 
  }
    view[16] = w&0x00FF; 
    view[17] = (w&0xFF00)>>8; 
    view[18] = h&0x00FF; 
    view[19] = (h&0xFF00)>>8; 
} 

function getWH(view) { 
  var msize = view[28]; 
  var j=0; var w=0; var h=32; 
  for (let i=0; i<msize; i++) { 
    if (i>=36) {w=24*36;} else {w+=24;} 
    if (view[i]==0x0A) {j=0; h+=32;} 
    if (j>=36) {j=0; h+=32;} 
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
  var w = getWH(mView).width; alert(w);
  var h = getWH(mView).height; alert(h); 
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








