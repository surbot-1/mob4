function appHomeChats() { 
var cnv = document.getElementById("canvas"); 
var ctx = cnv.getContext('2d'); 
ctx.fillStyle = "rgba(0, 0, 128, 1.0)"; // blue
ctx.fillRect(0, 0, 1080, 144); 
  writecStr(128*1,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"CHATS"); 
  writecStr(128*3+64-24,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"STATUS"); 
  writecStr(128*5+64,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"CALLS");  
	
  fileViewerUrl(1080-128+32, 8+32, "icon/business-man-icon-64.bmp"); 
  fileViewerUrl(920, 2024, "icon/add-icon-128.bmp"); 
	
ctx.fillStyle = "rgba(240, 240, 240, 1.0)";  // lightgray 
ctx.fillRect(0, 144, 1080, 2032); 
	
	
/* fileViewerUrl(64, 144*1+8, "icon/business-woman-icon-128.bmp"); 
writecStr(200,144*1+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"sAy"); 
fileViewerUrl(64, 144*2+8, "icon/business-man-icon-128.bmp"); 
writecStr(200,144*2+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"Yash Shiv"); 
fileViewerUrl(64, 144*3+8, "icon/business-man-icon-128.bmp"); 
writecStr(200,144*3+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"Jitendra"); */ 
	
chatbotactive=false; useractive=false; sendactive=10; 
appPtr=0; appPtri=0; appPtrf=0; 
	
var acname=[]; 
var acsts=[]; 
	
function writecName(cname, i) {  
    acname[i]=cname; acsts[i]=true; 
    fileViewerUrl(64, 144*i+8, "icon/business-man-icon-128.bmp"); 
    writecStr(200,144*i+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],cname); 
} 
	
function rcvcName() { 
   var tmr; var cname="";
   var rcv = contView[appcontcount*32+0]; 
   tmr = setInterval( ()=> { 
     if (rcv) { 
       clearInterval(tmr); 
       for (let i=1; i<appcontcount+1; i++) { 
	  for (let j=0; j<(contView[i*32+2]); j++) { 
	    cname += ascChar(contView[i*32+8+j]); 
	  }  
	  writecName(cname,i); cname=""; 
       } 
     } else if (!rcv) { 
       rcv = contView[appcontcount*32+0]; 
     }
   }, 1000); 
} 
	
if (true) { 
   var tmr; appcontcount=0; 
   var count = readAppContactCount(sender); 
   tmr = setInterval( ()=> { 
      if (appcontcount) { 
          clearInterval(tmr); 
          for (let i=1; i<appcontcount+1; i++) { 
	     readAppContact(sender, i); 
          } 
	  rcvcName(); 
      } else if (!appcontcount) { 
         count = readAppContactCount(sender); 
      }
   }, 1000); 
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
		    if (acsts[1]) { 
                      clearInterval(timer); appHomeChatsChatbot(); 
		    }
              } else if (x>0 && x<1080 && y>144*2 && y<144*3) { 
		   if (acsts[2]) { 
		      clearInterval(timer); 
		      receiver = acname[2];  
		      appHomeChatsUser(receiver); 
		   }
              } else if (x>0 && x<1080 && y>144*3 && y<144*4) { 
		   if (acsts[3]) { 
		      clearInterval(timer); 
		      receiver = acname[3]; 
		      appHomeChatsUser(receiver); 
		   }
              } else if (x>0 && x<1080 && y>144*4 && y<144*5) { 
		   if (acsts[4]) { 
		      clearInterval(timer); 
		      receiver = acname[4]; 
		      appHomeChatsUser(receiver); 
		   }
              } else if (x>0 && x<1080 && y>144*5 && y<144*5+144) { 
		   if (acsts[5]) { 
		      clearInterval(timer); 
		      receiver = acname[5]; 
		      appHomeChatsUser(receiver); 
		   }
	      } else if (x>0 && x<1080 && y>144*6 && y<144*6+144) { 
		   if (acsts[6]) { 
		      clearInterval(timer); 
		      receiver = acname[6]; 
		      appHomeChatsUser(receiver); 
		   } 
              } else if (x>0 && x<1080 && y>144*7 && y<144*8) { 
		   if (acsts[7]) { 
		      clearInterval(timer); 
		      receiver = acname[7]; 
		      appHomeChatsUser(receiver); 
		   }
              } else if (x>0 && x<1080 && y>144*8 && y<144*9) { 
		   if (acsts[8]) { 
		      clearInterval(timer); 
		      receiver = acname[8]; 
		      appHomeChatsUser(receiver); 
		   }
              } else if (x>0 && x<1080 && y>144*9 && y<144*10) { 
		   if (acsts[9]) { 
		      clearInterval(timer); 
		      receiver = acname[9]; 
		      appHomeChatsUser(receiver); 
		   }
	      } else if (x>0 && x<1080 && y>144*10 && y<144*11) { 
		   if (acsts[10]) { 
		      clearInterval(timer); 
		      receiver = acname[10]; 
		      appHomeChatsUser(receiver); 
		   }
	      } else if (x>0 && x<1080 && y>144*11 && y<144*11+144) { 
	      } else if (x>0 && x<1080 && y>144*12 && y<144*12+144) { 
	      } else if (x>920 && x<920+128 && y>2024 && y<2024+128) { 
		      clearInterval(timer); newContact(); 
	      }
		      
           } 
	}
	timer = setInterval(check, 0020); 

}

function appHomeStatus() { 
} 

function appHomeCalls() { 
} 











