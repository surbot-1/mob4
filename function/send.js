function sendMessage() { 
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
  var minfo = msgView[(msgPtr-1)*512+0]; 
  var msize = msgView[(msgPtr-1)*512+28]; 
  var str = ""; 
  for (let i=0; i<msize; i++) { 
    str += ascChar(msgView[(msgPtr-1)*512+32+i]); 
  }  
  var x=0; var y=0; 
  if (minfo==0) { x=600; y=200; 
  } else if(minfo==1) { x=0; y=232; 
  }
  writecStr(x,y,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],str);
}

function replyChatbot() { 
  chatbot(); 
  sendChatbot(); 
}

function sendChatbot() { 
  var minfo = botByte[0]; 
  var msize = botByte[28]; 
  for (let i=0; i<msize+32; i++) { 
    msgView[msgPtr*512+i] = botByte[i]; 
  }  
  msgPtr++; 
  botByte[28]=0;  
  send(); 
}  




