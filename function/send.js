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
  if (bot) {setTimeout(replyChatbot, 5000);}
}  

function send() { 
  var cnv = document.getElementById("canvas"); 
  var ctx = cnv.getContext('2d'); 
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
  var str = ""; 
  for (let i=0; i<msize; i++) { 
    str += ascChar(msgView[(msgPtr-1)*512+32+i]); 
  }  
  var x=0; var y=0; 
  if (minfo==0) { 
    x=600; y=200; 
    ctx.fillStyle = "rgba(128, 128, 240, 1.0)"; // blue 
    ctx.fillRect(x, y, w+32, h+32+32); 
    writecStr(x+16,y+16,480-48,128,"ubuntubold",[0,0,0,255],[128,128,240,255],str); 
    writecStr(x+192,h+32,480-48,128,"ubuntubold",[0,0,0,255],[128,128,240,255],getTime("12h")); 
  } else if(minfo==1) { 
    x=16; y=328; 
    ctx.fillStyle = "rgba(255, 255, 255, 1.0)"; // blue 
    ctx.fillRect(x, y, w+32, h+32+32); 
    writecStr(x+16,y+16,480-48,128,"ubuntubold",[0,0,0,255],[255,255,255,255],str); 
    writecStr(x+192,h+32,480-48,128,"ubuntubold",[0,0,0,255],[255,255,255,255],getTime("12h")); 
  } 
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
  send(); 
}  

function writeWH(view) { 
  var msize = view[28]; 
  var j=0; var w=24*18; var h=32; 
  for (let i=0; i<msize; i++) { 
    if (view[i]==0x0A) {j=0; h+=32;} 
    if (j>=18) {j=0; h+=32;} 
    j++; 
  }
    view[16] = w&0x00FF; 
    view[17] = (w&0xFF00)>>8; 
    view[18] = h&0x00FF; 
    view[19] = (h&0xFF00)>>8; 
}


