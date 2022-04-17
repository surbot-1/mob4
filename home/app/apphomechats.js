function appHomeChatsChatbot() {  
var cnv = document.getElementById("canvas"); 
var ctx = cnv.getContext('2d'); 

ctx.fillStyle = "rgba(0, 0, 128, 1.0)"; // blue
ctx.fillRect(0, 0, 1080, 144); 
fileViewerUrl(64, 8, "icon/business-woman-icon-128.bmp");  
fileViewerUrl(824, 48, "icon/video-icon-48.bmp");  
fileViewerUrl(952, 48, "icon/telephone-icon-48.bmp"); 
  writecStr(200,48,480,32,"ubuntubold",[255,255,255,255],[0,0,128,255],"sAy"); 
  writecStr(200,80,480,32,"ubuntufont",[255,255,255,255],[0,0,128,255],"online"); 
	
ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; 
ctx.fillRect(0, 144, 1080, 2032); 
ctx.fillStyle = "rgba(0,0,128,1.0)"; // blue
ctx.fillRect(0, 2048, 920, 128); 
ctx.fillStyle = "rgba(255,255,255,1.0)"; // white
ctx.fillRect(0+8, 2048+8, 920-16, 128-16);  
fileViewerUrl(680, 2080, "icon/attachment-icon-64.bmp"); 
fileViewerUrl(808, 2080, "icon/camera-icon-64.bmp"); 
fileViewerUrl(936, 2048, "icon/microphone-icon-128.bmp"); 

if (appPtr) {
var ax=0; var ay=0; var aw=1080; var ah=0; 
if (appPtr<=1880) {ay=144+1880-appPtr; ah=appPtr;} 
else if (appPtr>1880) {ay=144; ah=1880;} 
appPtri=0; appPtrf=ah; 
var imgData = ctx.createImageData(aw, ah); 
for (let i=0; i<aw*4*ah; i+=4) { 
    imgData.data[i+0]=appView[appPtri*1080*4+i+0]; 
    imgData.data[i+1]=appView[appPtri*1080*4+i+1]; 
    imgData.data[i+2]=appView[appPtri*1080*4+i+2]; 
    imgData.data[i+3]=appView[appPtri*1080*4+i+3]; 
} 
ctx.putImageData(imgData,0,ay); 
} 
	
chatbotactive=true; useractive=false; sendactive=1; 
var ptr=appPtr; 
	
	var timer; 
	function check() { 
	var x = touchx;  var y = touchy; 
	var tend = touch;  
           if (tend == 3) { touch = 0;
              if (x>0 && x<360*1 && y>0 && y<144) { 
              } else if (x>360*1 && x<360*2 && y>0 && y<144) { 
              } else if (x>360*2 && x<360*3 && y>0 && y<144) { 
              } else if (x>1080-128 && x<1080 && y>144*1 && y<144*2) { 
		      if (ptr>=32) {ptr-=32;} 
		      showMessage(0,144,1080,1880,0,ptr); 
              } else if (x>0 && x<1080 && y>144*2 && y<144*3) { 
              } else if (x>0 && x<1080 && y>144*3+8 && y<144*3+8+128) { 
              } else if (x>0 && x<1080 && y>160*4 && y<160*4+144) { 
              } else if (x>0 && x<1080 && y>160*4 && y<160*4+144) { 
	      } else if (x>0 && x<1080 && y>160*4 && y<160*4+144) { 
	      } else if (x>0 && x<1080 && y>160*4 && y<160*4+144) { 
	      } else if (x>0 && x<1080 && y>160*4 && y<160*4+144) { 
	      } else if (x>0 && x<1080 && y>160*4 && y<160*4+144) { 
	      } else if (x>1080-128 && x<1080 && y>1920 && y<2048) { 
		      if (ptr<appPtr) {ptr+=32;}  
		      showMessage(0,144,1080,1880,0,ptr); 
	      } else if (x>0 && x<680 && y>2048 && y<2176) { 
		      clearInterval(timer); appHomeChatsChatbotChat();
	      } else if (x>680 && x<680+64 && y>2080 && y<2080+64) { 
		      /* clearInterval(timer); */ attachment2(); 
	      } else if (x>808 && x<808+64 && y>2080 && y<2080+64) { 
		      /* clearInterval(timer); */ camera(); 
	      } else if (x>936 && x<936+128 && y>2048 && y<2048+128) { 
		      /* clearInterval(timer); */ mic(); 
	      }
		      
           } 
	}
	timer = setInterval(check, 0020); 
} 

function appHomeChatsChatbotChat() {  
var cnv = document.getElementById("canvas"); 
var ctx = cnv.getContext('2d'); 
ctx.fillStyle = "rgba(0, 0, 128, 1.0)"; // blue
ctx.fillRect(0, 0, 1080, 144); 
fileViewerUrl(64, 8, "icon/business-woman-icon-128.bmp");  
fileViewerUrl(824, 48, "icon/video-icon-48.bmp"); 
fileViewerUrl(952, 48, "icon/telephone-icon-48.bmp"); 
  writecStr(200,48,480,32,"ubuntubold",[255,255,255,255],[0,0,128,255],"sAy"); 
  writecStr(200,80,480,32,"ubuntufont",[255,255,255,255],[0,0,128,255],"online");
	
ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; // light gray
ctx.fillRect(0, 144, 1080, 1264); 
	
ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; // lightgray
ctx.fillRect(0, 1408, 1080, 128); 
ctx.fillStyle = "rgba(0,0,128,1.0)"; // blue
ctx.fillRect(0, 1408, 920, 128); 
ctx.fillStyle = "rgba(255,255,255,1.0)"; // white
ctx.fillRect(0+8, 1408+8, 920-16, 128-16); 
fileViewerUrl(680, 1440, "icon/attachment-icon-64.bmp"); 
fileViewerUrl(808, 1440, "icon/camera-icon-64.bmp"); 
fileViewerUrl(936, 1408, "icon/telegram-icon-128.bmp"); 
	
if (appPtr) {
var ax=0; var ay=0; var aw=1080; var ah=0; 
if (appPtr<=1240) {ay=144+1240-appPtr; ah=appPtr;} 
else if (appPtr>1240) {ay=144; ah=1240;} 
appPtri=appPtr-ah; appPtrf=ah; 
var imgData = ctx.createImageData(aw, ah); 
for (let i=0; i<aw*4*ah; i+=4) { 
    imgData.data[i+0]=appView[appPtri*1080*4+i+0]; 
    imgData.data[i+1]=appView[appPtri*1080*4+i+1]; 
    imgData.data[i+2]=appView[appPtri*1080*4+i+2]; 
    imgData.data[i+3]=appView[appPtri*1080*4+i+3]; 
} 
ctx.putImageData(imgData,0,ay); 
}
	
drawKeypad(0,1664,ktype); 
showCursor(16,1448); 
chatbotactive=true; useractive=0; sendactive=2; 
var ptr=appPtr; 
	
	var timer;
	function check() { 
	var x = touchx;  var y = touchy; 
	var tend = touch;  
           if (tend == 3) { touch = 0;
              if (x>0 && x<360*1 && y>0 && y<144) { 
              } else if (x>360*1 && x<360*2 && y>0 && y<144) { 
              } else if (x>360*2 && x<360*3 && y>0 && y<144) { 
              } else if (x>1080-128 && x<1080 && y>144*1 && y<144*2) { 
		      if (ptr>=32) {ptr-=32;} 
		      showMessage(0,144,1080,1240,0,ptr); 
              } else if (x>0 && x<1080 && y>144*2 && y<144*3) { 
              } else if (x>0 && x<1080 && y>144*3+8 && y<144*3+8+128) { 
              } else if (x>0 && x<1080 && y>144*3 && y<144*3+144) { 
              } else if (x>0 && x<1080 && y>144*3 && y<160*3+144) { 
	      } else if (x>0 && x<1080 && y>160*3 && y<160*3+144) { 
	      } else if (x>0 && x<1080 && y>160*3 && y<160*3+144) { 
	      } else if (x>0 && x<1080 && y>160*3 && y<160*3+144) { 
	      } else if (x>0 && x<1080 && y>160*3 && y<160*3+144) { 
	      } else if (x>1080-128 && x<1080 && y>1280 && y<1408) { 
		      if (ptr<appPtr) {ptr+=32;}  
		      showMessage(0,144,1080,1240,0,ptr); 
	      } else if (x>680 && x<680+64 && y>1440 && y<1440+64) { 
		      /* clearInterval(timer); */ attachment(); 
	      } else if (x>808 && x<808+64 && y>1440 && y<1440+64) { 
		      /* clearInterval(timer); */ camera(); 
	      } else if (x>936 && x<936+128 && y>1408 && y<1408+128) { 
		      if (ptr!=appPtr) { 
			      ptr=appPtr; showMessage(0,144,1080,1240,0,ptr); 
		      } else if (ptr==appPtr) {}
		      sendMessage(); ptr=appPtr; 
              } else if (x>1080-128 && x<1080 && y>1536 && y<1664) { 
		      clearInterval(timer); clearCursor(16,1448); 
		      appHomeChatsChatbot(); 
	      } else if (x>0 && x<1080 && y>1664 && y<2176) { 
		      /* clearInterval(timer); */ message(); 
	      }
		      
           } 
	}
	timer = setInterval(check, 0020); 
} 

function appHomeChatsUser(user) {  
var cnv = document.getElementById("canvas"); 
var ctx = cnv.getContext('2d'); 
ctx.fillStyle = "rgba(0, 0, 128, 1.0)"; // blue
ctx.fillRect(0, 0, 1080, 144); 
fileViewerUrl(64, 8, "icon/business-man-icon-128.bmp");  
fileViewerUrl(824, 48, "icon/video-icon-48.bmp");  
fileViewerUrl(952, 48, "icon/telephone-icon-48.bmp"); 
  writecStr(200,48,480,32,"ubuntubold",[255,255,255,255],[0,0,128,255],user); 
  writecStr(200,80,480,32,"ubuntufont",[255,255,255,255],[0,0,128,255],"online"); 
	
ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; 
ctx.fillRect(0, 144, 1080, 2032); 
ctx.fillStyle = "rgba(0,0,128,1.0)"; // blue
ctx.fillRect(0, 2048, 920, 128); 
ctx.fillStyle = "rgba(255,255,255,1.0)"; // white
ctx.fillRect(0+8, 2048+8, 920-16, 128-16);  
fileViewerUrl(680, 2080, "icon/attachment-icon-64.bmp"); 
fileViewerUrl(808, 2080, "icon/camera-icon-64.bmp"); 
fileViewerUrl(936, 2048, "icon/microphone-icon-128.bmp");  
	
if (appPtr) {
var ax=0; var ay=0; var aw=1080; var ah=0; 
if (appPtr<1880) {ay=144+1880-appPtr; ah=appPtr;} 
else if (appPtr>=1880) {ay=144; ah=1880;} 
appPtri=0; appPtrf=ah; 
var imgData = ctx.createImageData(aw, ah); 
for (let i=0; i<aw*4*ah; i+=4) { 
    imgData.data[i+0]=appView[appPtri*1080*4+i+0]; 
    imgData.data[i+1]=appView[appPtri*1080*4+i+1]; 
    imgData.data[i+2]=appView[appPtri*1080*4+i+2]; 
    imgData.data[i+3]=appView[appPtri*1080*4+i+3]; 
} 
ctx.putImageData(imgData,0,ay); 
} else if (!appPtr) { 
   var timer; var count=0; msgcount=0; 
   var countf = readAppMessageCount(sender,receiver); 
   /* var tmr = setInterval( ()=> { 
   if (msgcount) {clearInterval(tmr);} 
   }, 0200); */ 
function rcvMsg() { 
 if (msgcount) { if (rcvmsgidp<msgcount) {rcvmsgid=rcvmsgidp+1;} else {rcvmsgid=0;} rcvmsgsts="Null"; 
    var mid = readAppMessageStatus(sender,receiver,rcvmsgid); 
    if (rcvmsgsts=="Null") { 
       var tmr = setInterval( ()=> {
          if (rcvmsgsts!="Null") { 
              clearInterval(tmr); 
              if (true) { 
		 rcvmsgidp=rcvmsgid; rcvmsgid=rcvmsgidp+1;
		 rcvmsgstsp=rcvmsgsts; rcvmsgsts="Null"; 
		 readAppMessageOnce(sender,receiver,rcvmsgidp); 
		 writeAppMessageStatus(sender,receiver,rcvmsgidp,"seen"); 
		 count++; if (count==msgcount) {clearInterval(timer);} 
	      }
          } 
       }, 0020); 
       setTimeout( ()=> {clearInterval(tmr);}, 1000); 
    } else if (rcvmsgsts!="Null") { 
	if (true) { 
           rcvmsgidp=rcvmsgid; rcvmsgid=rcvmsgidp+1;
           rcvmsgstsp=rcvmsgsts; rcvmsgsts="Null"; 
           readAppMessageOnce(sender,receiver,rcvmsgidp); 
           writeAppMessageStatus(sender,receiver,rcvmsgidp,"seen"); 
           count++; if (count==msgcount) {clearInterval(timer);} 
	} 
    }
 } 
} 
timer = setInterval(rcvMsg, 2000); 
} 
	
chatbotactive=false; useractive=true; sendactive=1; 
	
	var timer;
	function check() { 
	var x = touchx;  var y = touchy; 
	var tend = touch;  
           if (tend == 3) { touch = 0;
              if (x>0 && x<360*1 && y>0 && y<144) { 
              } else if (x>360*1 && x<360*2 && y>0 && y<144) { 
              } else if (x>360*2 && x<360*3 && y>0 && y<144) { 
              } else if (x>0 && x<1080 && y>144*1 && y<144*2) { 
		    //  clearInterval(timer); appHomeChatsUser1(); 
              } else if (x>0 && x<1080 && y>144*2 && y<144*3) { 
              } else if (x>0 && x<1080 && y>144*3+8 && y<144*3+8+128) { 
              } else if (x>0 && x<1080 && y>160*4 && y<160*4+144) { 
              } else if (x>0 && x<1080 && y>160*5 && y<160*5+144) { 
	      } else if (x>0 && x<1080 && y>160*6 && y<160*6+144) { 
	      } else if (x>0 && x<1080 && y>160*7 && y<160*7+144) { 
	      } else if (x>0 && x<1080 && y>160*8 && y<160*8+144) { 
	      } else if (x>0 && x<1080 && y>160*9 && y<160*9+144) { 
	      } else if (x>0 && x<1080 && y>160*10 && y<160*10+144) { 
	      } else if (x>0 && x<680 && y>2048 && y<2176) { 
		      clearInterval(timer); appHomeChatsUserChat(user); 
	      } else if (x>680 && x<680+64 && y>2080 && y<2080+64) { 
		      attachment2(); 
	      } else if (x>808 && x<808+64 && y>2080 && y<2080+64) { 
		      camera(); 
	      } else if (x>936 && x<936+128 && y>2048 && y<2048+128) { 
		      mic(); 
	      }
		      
           } 
	}
	timer = setInterval(check, 0020); 
} 

function appHomeChatsUserChat(user) {  
var cnv = document.getElementById("canvas"); 
var ctx = cnv.getContext('2d'); 
ctx.fillStyle = "rgba(0, 0, 128, 1.0)"; // blue
ctx.fillRect(0, 0, 1080, 144); 
fileViewerUrl(64, 8, "icon/business-man-icon-128.bmp");  
fileViewerUrl(824, 48, "icon/video-icon-48.bmp"); 
fileViewerUrl(952, 48, "icon/telephone-icon-48.bmp"); 
  writecStr(200,48,480,32,"ubuntubold",[255,255,255,255],[0,0,128,255],user); 
  writecStr(200,80,480,32,"ubuntufont",[255,255,255,255],[0,0,128,255],"online");
	
ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; // lightgrsy
ctx.fillRect(0, 144, 1080, 1264); 
	
ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; // lightgray
ctx.fillRect(0, 1408, 1080, 128); 
	
ctx.fillStyle = "rgba(0,0,128,1.0)"; // blue
ctx.fillRect(0, 1408, 920, 128); 
ctx.fillStyle = "rgba(255,255,255,1.0)"; // white
ctx.fillRect(0+8, 1408+8, 920-16, 128-16); 
fileViewerUrl(680, 1440, "icon/attachment-icon-64.bmp"); 
fileViewerUrl(808, 1440, "icon/camera-icon-64.bmp"); 
fileViewerUrl(936, 1408, "icon/telegram-icon-128.bmp"); 
	
if (appPtr) {
var ax=0; var ay=0; var aw=1080; var ah=0; 
if (appPtr<1240) {ay=144+1240-appPtr; ah=appPtr;} 
else if (appPtr>=1240) {ay=144; ah=1240;} 
appPtri=appPtr-ah; appPtrf=ah; 
var imgData = ctx.createImageData(aw, ah); 
for (let i=0; i<aw*4*ah; i+=4) { 
    imgData.data[i+0]=appView[appPtri*1080*4+i+0]; 
    imgData.data[i+1]=appView[appPtri*1080*4+i+1]; 
    imgData.data[i+2]=appView[appPtri*1080*4+i+2]; 
    imgData.data[i+3]=appView[appPtri*1080*4+i+3]; 
} 
ctx.putImageData(imgData,0,ay); 
} else if (!appPtr) { 
   var timer; var count=0; 
      var countf = readAppMessageCount(sender,receiver); 
function rcvMsg() { 
 if (msgcount) { if (rcvmsgidp<msgcount) {rcvmsgid=rcvmsgidp+1;} else {rcvmsgid=0;} rcvmsgsts="Null"; 
    var mid = readAppMessageStatus(sender,receiver,rcvmsgid); 
    if (rcvmsgsts=="Null") { 
       var tmr = setInterval( ()=> {
          if (rcvmsgsts!="Null") { 
              clearInterval(tmr); 
              if (true) {  
		 rcvmsgidp=rcvmsgid; rcvmsgid=rcvmsgidp+1;
		 rcvmsgstsp=rcvmsgsts; rcvmsgsts="Null"; 
		 readAppMessageOnce(sender,receiver,rcvmsgidp); 
		 writeAppMessageStatus(sender,receiver,rcvmsgidp,"seen"); 
		 count++; if (count==msgcount) {clearInterval(timer);} 
	      }
          } 
       }, 0020); 
       setTimeout( ()=> {clearInterval(tmr);}, 1000); 
    } else if (rcvmsgsts!="Null") { 
	if (true) { 
           rcvmsgidp=rcvmsgid; rcvmsgid=rcvmsgidp+1;
           rcvmsgstsp=rcvmsgsts; rcvmsgsts="Null"; 
           readAppMessageOnce(sender,receiver,rcvmsgidp); 
           writeAppMessageStatus(sender,receiver,rcvmsgidp,"seen"); 
           count++; if (count==msgcount) {clearInterval(timer);} 
	} 
    }
 } 
} 
timer = setInterval(rcvMsg, 2000); 
} 
	
drawKeypad(0,1664,ktype); 
showCursor(16,1448); 
chatbotactive=false; useractive=true; sendactive=2; 
	
	var timer;
	function check() { 
	var x = touchx;  var y = touchy; 
	var tend = touch;  
           if (tend == 3) { touch = 0;
              if (x>0 && x<360*1 && y>0 && y<144) { 
              } else if (x>360*1 && x<360*2 && y>0 && y<144) { 
              } else if (x>360*2 && x<360*3 && y>0 && y<144) { 
              } else if (x>0 && x<1080 && y>144*1 && y<144*2) { 
		    //  clearInterval(timer); apphomechatsUser(); 
              } else if (x>0 && x<1080 && y>144*2 && y<144*3) { 
              } else if (x>0 && x<1080 && y>144*3+8 && y<144*3+8+128) { 
              } else if (x>0 && x<1080 && y>144*3 && y<144*3+144) { 
              } else if (x>0 && x<1080 && y>144*3 && y<160*3+144) { 
	      } else if (x>0 && x<1080 && y>160*3 && y<160*3+144) { 
	      } else if (x>0 && x<1080 && y>160*3 && y<160*3+144) { 
	      } else if (x>0 && x<1080 && y>160*3 && y<160*3+144) { 
	      } else if (x>0 && x<1080 && y>160*3 && y<160*3+144) { 
	      } else if (x>0 && x<1080 && y>160*3 && y<160*3+144) { 
	      } else if (x>680 && x<680+64 && y>1440 && y<1440+64) { 
		      attachment(); 
	      } else if (x>808 && x<808+64 && y>1440 && y<1440+64) { 
		      camera(); 
	      } else if (x>936 && x<936+128 && y>1408 && y<1408+128) { 
		      sendMessage(); sendOnServer(user); 
	      } else if (x>1080-128 && x<1080 && y>1536 && y<1664) { 
		      clearInterval(timer); clearCursor(16,1448); 
		      appHomeChatsUser(user); 
	      } else if (x>0 && x<1080 && y>1664 && y<2176) { 
		      message(); 
	      }
		      
           } 
	}
	timer = setInterval(check, 0020); 
} 

/* function appHomeChatsUser2Chat() {  
var cnv = document.getElementById("canvas"); 
var ctx = cnv.getContext('2d'); 
ctx.fillStyle = "rgba(0, 0, 128, 1.0)"; // blue
ctx.fillRect(0, 0, 1080, 144); 
fileViewerUrl(64, 8, "icon/business-woman-icon-128.bmp");  
fileViewerUrl(824, 48, "icon/video-icon-48.bmp"); 
fileViewerUrl(952, 48, "icon/telephone-icon-48.bmp"); 
  writecStr(200,48,144,96,"ubuntubold",[255,255,255,255],[0,0,128,255],"Jitendra"); 
  writecStr(200,80,144,96,"ubuntufont",[255,255,255,255],[0,0,128,255],"online");
	
ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; 
ctx.fillRect(0, 144, 1080, 1264); 
	
ctx.fillStyle = "rgba(0,0,128,1.0)"; // blue
ctx.fillRect(0, 1408, 920, 128); 
ctx.fillStyle = "rgba(255,255,255,1.0)"; // white
ctx.fillRect(0+8, 1408+8, 920-16, 128-16); 
fileViewerUrl(680, 1440, "icon/attachment-icon-64.bmp"); 
fileViewerUrl(808, 1440, "icon/camera-icon-64.bmp"); 
fileViewerUrl(936, 1408, "icon/telegram-icon-128.bmp"); 
	
drawKeypad(0,1664,ktype); 
showCursor(16,1448); 
bot=true;  
	
	var timer;
	function check() { 
	var x = touchx;  var y = touchy; 
	var tend = touch;  
           if (tend == 3) { touch = 0;
              if (x>0 && x<360*1 && y>0 && y<144) { 
              } else if (x>360*1 && x<360*2 && y>0 && y<144) { 
              } else if (x>360*2 && x<360*3 && y>0 && y<144) { 
              } else if (x>0 && x<1080 && y>144*1 && y<144*2) { 
		    //  clearInterval(timer); apphomechatsuser1(); 
              } else if (x>0 && x<1080 && y>144*2 && y<144*3) { 
              } else if (x>0 && x<1080 && y>144*3+8 && y<144*3+8+128) { 
              } else if (x>0 && x<1080 && y>144*3 && y<144*3+144) { 
              } else if (x>0 && x<1080 && y>144*3 && y<160*3+144) { 
	      } else if (x>0 && x<1080 && y>160*3 && y<160*3+144) { 
	      } else if (x>0 && x<1080 && y>160*3 && y<160*3+144) { 
	      } else if (x>0 && x<1080 && y>160*3 && y<160*3+144) { 
	      } else if (x>0 && x<1080 && y>160*3 && y<160*3+144) { 
	      } else if (x>0 && x<1080 && y>160*3 && y<160*3+144) { 
	      } else if (x>680 && x<680+64 && y>1440 && y<1440+64) { 
		      attachment(); 
	      } else if (x>808 && x<808+64 && y>1440 && y<1440+64) { 
		      camera(); 
	      } else if (x>936 && x<936+128 && y>1408 && y<1408+128) { 
		      sendMessage(); 
	      } else if (x>0 && x<1080 && y>1664 && y<2176) { 
		      message(); 
	      }
		      
           } 
	}
	timer = setInterval(check, 0100); 
} */ 









