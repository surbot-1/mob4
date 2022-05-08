function receive(t) { 
  // var timer; var timer2; 
  function rcvMsg() { 
    if (useractive) { 
      rcvmsgid=rcvmsgidp+1; rcvmsgsts="Null"; 
      var mid = readAppMessageStatus(receiver,sender,rcvmsgid); 
      if (rcvmsgsts=="Null") { 
          timer2 = setInterval( ()=> { 
          if (rcvmsgsts!="Null") { 
            clearInterval(timer2); 
            if (rcvmsgsts=="sent") { 
              rcvmsgidp=rcvmsgid; rcvmsgid=rcvmsgidp+1;
              rcvmsgstsp=rcvmsgsts; rcvmsgsts="Null"; 
              readAppMessage(receiver,sender,rcvmsgidp); 
              writeAppMessageStatus(receiver,sender,rcvmsgidp,"upld"); 
              } else if (rcvmsgsts=="dlvd") {  
              // rcvmsgidp=rcvmsgid; rcvmsgid=rcvmsgidp+1;
              // rcvmsgstsp=rcvmsgsts; rcvmsgsts="Null"; 
              // readAppMessage(receiver,sender,rcvmsgidp); 
              // writeAppMessageStatus(receiver,sender,rcvmsgidp,"dlvd"); 
            } else if (rcvmsgsts=="seen") { 
              rcvmsgidp=rcvmsgid; rcvmsgid=rcvmsgidp+1;
              rcvmsgstsp=rcvmsgsts; rcvmsgsts="Null"; 
            } 
          } 
        }, 0020); 
        setTimeout( ()=> {clearInterval(timer2);}, 1000); 
      } else if (rcvmsgsts!="Null") { 
        if (rcvmsgsts=="sent") { 
          rcvmsgidp=rcvmsgid; rcvmsgid=rcvmsgidp+1; 
          rcvmsgstsp=rcvmsgsts; rcvmsgsts="Null"; 
          readAppMessage(receiver,sender,rcvmsgid); 
          // writeAppMessageStatus(receiver,sender,rcvmsgidp,"seen"); 
          } else if (rcvmsgsts=="dlvd") { 
          // rcvmsgidp=rcvmsgid; rcvmsgid=rcvmsgidp+1;
          // rcvmsgstsp=rcvmsgsts; rcvmsgsts="Null"; 
          // readAppMessage(receiver,sender,rcvmsgidp); 
          // writeAppMessageStatus(receiver,sender,rcvmsgidp,"dlvd"); 
        } else if (rcvmsgsts=="seen") { 
          rcvmsgidp=rcvmsgid; rcvmsgid=rcvmsgidp+1;
          rcvmsgstsp=rcvmsgsts; rcvmsgsts="Null"; 
        } 
      } 
    } 
  } 
  if (t) { 
    timer = setInterval(rcvMsg, 2000); 
  } else if(!t) { 
    clearInterval(timer1); clearInterval(timer2); 
  }

}
