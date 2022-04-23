function appHomeChats() { 
var cnv = document.getElementById("canvas"); 
var ctx = cnv.getContext('2d'); 
ctx.fillStyle = "rgba(0, 0, 128, 1.0)"; // blue
ctx.fillRect(0, 0, 1080, 144); 
  writecStr(128+360*0,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"CHATS"); 
  writecStr(128+360*1,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"STATUS"); 
  writecStr(128+360*2,48,480,128,"font2448",[255,255,255,255],[0,0,128,255],"CALLS"); 
	
  fileViewerUrl(920, 2024, "icon/add-icon-128.bmp"); 
	
ctx.fillStyle = "rgba(240, 240, 240, 1.0)";  // lightgray 
ctx.fillRect(0, 144, 1080, 2032); 
	
	
/* fileViewerUrl(64, 144*1+8, "icon/business-woman-icon-128.bmp"); 
writecStr(200,144*1+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"sAy"); 
fileViewerUrl(64, 144*2+8, "icon/business-man-icon-128.bmp"); 
writecStr(200,144*2+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"Yash Shiv"); 
fileViewerUrl(64, 144*3+8, "icon/business-man-icon-128.bmp"); 
writecStr(200,144*3+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],"Jitendra"); */ 
	
var fname=[""]; 
	
function writefName() {  
     for (let i=1; i<appfriendcount+1; i++) {
	fileViewerUrl(64, 144*i+8, "icon/business-man-icon-128.bmp"); 
        writecStr(200,144*i+48,480,128,"ubuntubold",[0,0,0,255],[240,240,240,255],fname[i]); 
     }
} 
	
function addFriend() { 
     saveImage(0,144,1080,2032); 
     imageRect(0,144,1080,2032,"rgba(240,240,240,1.0)"); 
     imageRect(200,144*2+8,680,128,"rgba(0,0,128,1.0)"); 
     imageRect(200+8,144*2+8+8,680-16,128-16,"rgba(255,255,255,1.0)"); 
     imageRect(200,144*3+8,680,128,"rgba(0,0,128,1.0)"); 
     writecStr(200+268+36,144*3+8+40,24*3,48,"font2448",[255,255,255,255],[0,0,128,255],"Add"); 
	drawKeypad(0,1664,ktype); 
        showCursor(200+16,144*2+8+40);
}
	
if (true) { 
   var tmr; appfriendcount=0; 
   var fcount = readAppFriendCount(sender); 
   tmr = setInterval( ()=> { 
   if (appfriendcount) { 
       clearInterval(tmr); 
       for (let i=1; i<appfriendcount+1; i++) { 
	   readAppFriend(sender, i); 
       } 
   } 
   }, 0200); 
} 
	
if (true) { 
   var tmr; appfriendname=""; 
   var rcvcmp = fndView[appfriendcount*32+0]; 
   tmr = setInterval( ()=> { 
     if (rcvcmp) { 
       clearInterval(tmr); 
       for (let i=1; i<appfriendcount+1; i++) { 
	  for (let j=0; i<(fndView[i*32+2]); j++) { 
	    fname[i] += ascChar(fndView[i*32+8+j]); 
	  } 
        writefName(); 
       } 
     } else if (!rcvcmp) { 
       rcvcmp = fndView[appfriendcount*32+0]; 
     }
   }, 0200); 
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
		      clearInterval(timer); appHomeChatsChatbot(); 
              } else if (x>0 && x<1080 && y>144*2 && y<144*3) { 
		      clearInterval(timer); 
		      receiver = "Yash Shiv"; 
		      appHomeChatsUser(receiver); 
              } else if (x>0 && x<1080 && y>144*3 && y<144*4) { 
		      clearInterval(timer); 
		      receiver = "Jitendra"; 
		      appHomeChatsUser(receiver); 
              } else if (x>0 && x<1080 && y>144*4 && y<144*5) { 
		      clearInterval(timer); 
		      receiver = "sAy1"; 
		      appHomeChatsUser(receiver); 
              } else if (x>0 && x<1080 && y>144*5 && y<144*5+144) { 
		      clearInterval(timer); 
		      receiver = "sAy2"; 
		      appHomeChatsUser(receiver); 
	      } else if (x>0 && x<1080 && y>160*6 && y<160*6+144) { 
	      } else if (x>0 && x<1080 && y>160*7 && y<160*7+144) { 
	      } else if (x>0 && x<1080 && y>160*8 && y<160*8+144) { 
	      } else if (x>0 && x<1080 && y>160*9 && y<160*9+144) { 
	      } else if (x>0 && x<1080 && y>160*10 && y<160*10+144) { 
	      } else if (x>920 && x<920+128 && y>2024 && y<2024+128) { 
		      addFriend(); 
	      }
		      
           } 
	}
	timer = setInterval(check, 0020); 

}

function appHomeStatus() { 
} 

function appHomeCalls() { 
} 











