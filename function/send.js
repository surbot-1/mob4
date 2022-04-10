function sendMessage() { 
  var minfo = msgByte[0]; 
  var msize = msgByte[28]; 
  for (let i=0; i<msize+32; i++) { 
    msgView[msgPtr*512+i] = msgByte[i]; 
  }  
  msgPtr++; 
  send(); 
  clearCursor(16,1448); 
  var cnv = document.getElementById("canvas"); 
  var ctx = cnv.getContext('2d'); 
  ctx.fillStyle = "rgba(255, 255, 255, 1.0)"; // white
  ctx.fillRect(16, 1448, 24*24, 48); 
  ci=0; cj=0; msgByte[28]=0; // msize 
  showCursor(16,1448); 
}  

function send() { 
  var minfo = msgView[(msgPtr-1)*512+0]; 
  var msize = msgView[(msgPtr-1)*512+28]; 
  var str = ""; 
  for (let i=0; i<msize; i++) { 
    str += ascChar(msgView[(msgPtr-1)*512+32+i]); 
  }  
  writecStr(540,200,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],str);
}






