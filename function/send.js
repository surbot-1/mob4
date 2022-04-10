function sendMessage () { 
  var minfo = msgByte[0]; 
  var msize = msgByte[28]; 
  for (let i=0; i<msize+32; i++) { 
    msgView[msgPtr*512+i] = msgByte[i]; 
  }  
  msgPtr++; 
  send(); 
}  

function send () { 
  var minfo = msgView[(msgPtr-1)*512+0]; 
  var msize = msgView[(msgPtr-1)*512+28]; 
  var str = ""; 
  for (let i=0; i<msize; i++) { 
    str += ascChar(msgView[(msgPtr-1)*512+32+i]); 
  }  
  writecStr(540,200,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],str);
}






