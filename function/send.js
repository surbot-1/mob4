function sendMessage () { 
  var minfo = msgByte[0]; 
  var msize = msgByte[28]; 
  for (let i=0; i<msize+32; i++) { 
    msgView[msgPtr*512+i] = msgByte[i]; 
  } alert(msgPtr); 
  msgPtr++; 
  send(); 
} 

function send () { 
  var minfo = msgView[(msgPtr-1)*512+0]; 
  var msize = msgView[(msgPtr-1)*512+28]; 
  var str = ""; 
  for (let i=0; i<msize; i++) { 
    str += ascChar(msgView[(msgPtr-1)*512+32+i]); 
  } alert(str);
  writecStr(540,200,480,128,[0,0,0,255],[240,240,240,255],"ubuntubold",str);
}






