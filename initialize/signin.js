function signin() { 

var cnv = document.getElementById("canvas"); 
var ctx = cnv.getContext('2d'); 

ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; // light gray
ctx.fillRect(0, 0, 1080, 144); 

ctx.fillStyle = "rgba(240, 240, 240, 1.0)"; // light gray
ctx.fillRect(0, 144, 1080, 2032); 

ctx.fillStyle = "rgba(0,0,128,1.0)"; // blue 
ctx.fillRect(200, 144*2+8, 680, 128); 
ctx.fillStyle = "rgba(255,255,255,1.0)"; // white
ctx.fillRect(200+8, 144*2+8+8, 680-16, 128-16); 
ctx.fillStyle = "rgba(0,0,128,1.0)"; // blue 
ctx.fillRect(200, 144*3+8, 680, 128); 
ctx.fillStyle = "rgba(255,255,255,1.0)"; // white
ctx.fillRect(200+8, 144*3+8+8, 680-16, 128-16); 
ctx.fillStyle = "rgba(0,0,128,1.0)"; // blue 
ctx.fillRect(200, 144*4+8, 680, 128); 
	
var signinform = ["", "", "Mobile/Email", "OTP/Password"]; 
	
writecStr(200+16+8,144*2+48+8,24*24,48,"ubuntufont",[48,48,48,255],[255,255,255,255],signinform[2]); 
writecStr(200+16+8,144*3+48+8,24*24,48,"ubuntufont",[48,48,48,255],[255,255,255,255],signinform[3]); 
	
  writecStr(200+268,144*4+8+40,24*6,48,"font2448",[255,255,255,255],[0,0,128,255],"SignIn"); 
  writecStr(200,144*5+8+48,24*9,32,"ubuntufont",[32,32,32,255],[240,240,240,255],"Password?"); 
  writecStr(200+24*22,144*5+8+48,24*6,32,"ubuntufont",[32,32,32,255],[240,240,240,255],"SignUp"); 
	
  imageRect(200,144*6+8+50,28,28,"rgba(128,128,128,1.0)"); 
  imageRect(200+4,144*6+8+54,20,20,"rgba(255,255,255,1.0)"); 
  writecStr(200+44,144*6+8+48,24*11,32,"ubuntufont",[32,32,32,255],[240,240,240,255],"Remember me"); 

	
for (let i=0; i<10; i++) {
     signByte[i*64+0]=0; 
     signByte[i*64+1]=0; 
     signByte[i*64+2]=0; 
     signByte[i*64+3]=0; 
     signByte[i*64+4]=0; 
     signByte[i*64+5]=0; 
     signByte[i*64+6]=0; 
     signByte[i*64+7]=0; 
} 
	
ktype=0; 
drawKeypad(0,1664,ktype); 
showCursor(200+16,144*2+8+40); 
var ptr=2; var ptrp=2; 
var remember=false; 
  
  
      var timer;
      function check() { 
      var x = touchx;  var y = touchy; 
      var tend = touch;  
         if (tend == 3) { 
              touch = 0; 
              if (x>0 && x<360*1 && y>0 && y<144) { 
              } else if (x>360*1 && x<360*2 && y>0 && y<144) { 
              } else if (x>360*2 && x<360*3 && y>0 && y<144) { 
	      } else if (x>0 && x<1080 && y>144*1+8 && y<144*1+8+128) { 
              } else if (x>200 && x<880 && y>144*2+8 && y<144*2+8+128) { 
		      ptrp=ptr; ptr=2; updtCursor(signByte,ptr, ptrp); 
              } else if (x>200 && x<880 && y>144*3+8 && y<144*3+8+128) { 
		      ptrp=ptr; ptr=3; updtCursor(signByte, ptr, ptrp); 
              } else if (x>200 && x<880 && y>144*4+8 && y<144*4+8+128) { 
		      clrCursor(signByte, ptr); clearInterval(timer); sin(); 
	      } else if (x>736 && x<880 && y>144*5+8 && y<144*5+8+128) { 
                      clrCursor(signByte, ptr); clearInterval(timer); signup(); 
	      } else if (x>200 && x<200+40+24*11 && y>144*6+8 && y<144*6+8+128) { 
		      rememberme(); 
	      } else if (x>0 && x<1080 && y>144*7+8 && y<144*7+8+128) {  
	      } else if (x>0 && x<1080 && y>1664 && y<2176) { 
		      storekeyvalue(signByte,ptr); 
	      } 
           
         } 
      } 
      timer = setInterval(check, 0020); 
	
	
 function rememberme() { 
      if (remember) { 
	 remember=false; 
	 imageRect(200+4,144*6+8+54,20,20,"rgba(255,255,255,1.0)"); 
      } else if (!remember) { 
	 remember=true; 
	 imageRect(200+4,144*6+8+54,20,20,"rgba(0,0,128,1.0)"); 
      }
 }
	
 function sin() { 
      var usize= signByte[64*2+6]; 
      var psize= signByte[64*3+6]; 
      var uname=""; var pass=""; 
      for (let i=0; i<usize; i++) { 
	   uname += ascChar(signByte[64*2+16+i]); 
      } 
      for (let i=0; i<psize; i++) { 
	   pass += ascChar(signByte[64*3+16+i]);
      } 
      if (remember) { 
	  setCookie("username",uname,30); 
	  setCookie("password",pass,30); 
      }
      if (uname=="sAy1" && pass=="s@1234") { 
	  username=uname; password=pass; 
	  sender=uname; appHomeChats(1,0,1); 
      } else if (uname=="sAy2" && pass=="k@1234") { 
	  username=uname; password=pass; 
	  sender=uname; appHomeChats(1,0,1); 
      } else if (uname=="Yash Shiv" && pass=="ys@1234") { 
	  username=uname; password=pass; 
	  sender=uname; appHomeChats(1,0,1); 
      } else if (uname=="Jitendra" && pass=="j@1234") { 
	  username=uname; password=pass; 
	  sender=uname; appHomeChats(1,0,1); 
      } else { 
	  shwCursor(signByte, ptr); 
	  timer = setInterval(check, 0020); 
      }
 } 
	
 function shwCursor(viewByte, rptr) { 
  var x=0; var y=0; var ptr=0; var ci=0; var cj=0; 
  var buf = new ArrayBuffer(4); 
  var view = new DataView(buf); 
  x=200+16; y=144*rptr+8+40; 
  ptr = viewByte[rptr*64+6]; 
  view.setUint8(0,viewByte[rptr*64+2]); 
  view.setUint8(1,viewByte[rptr*64+3]); 
  ci = view.getUint16(0); 
  view.setUint8(0,viewByte[rptr*64+4]); 
  view.setUint8(1,viewByte[rptr*64+5]); 
  cj = view.getUint16(0); 
  writeCursor(x+ci,y+cj); 
  showCursor(x+ci,y+cj); 
 }
	
 function clrCursor(viewByte, rptr) { 
  var x=0; var y=0; var ptr=0; var ci=0; var cj=0; 
  var buf = new ArrayBuffer(4); 
  var view = new DataView(buf); 
  x=200+16; y=144*rptr+8+40; 
  ptr = viewByte[rptr*64+6]; 
  view.setUint8(0,viewByte[rptr*64+2]); 
  view.setUint8(1,viewByte[rptr*64+3]); 
  ci = view.getUint16(0); 
  view.setUint8(0,viewByte[rptr*64+4]); 
  view.setUint8(1,viewByte[rptr*64+5]); 
  cj = view.getUint16(0); 
  clearCursor(x+ci,y+cj); 
 }
	
 function updtCursor(viewByte, rptr, rptrp) { 
  var x=0; var y=0; var ptr=0; var ci=0; var cj=0; 
  var buf = new ArrayBuffer(4); 
  var view = new DataView(buf); 
  x=200+16; y=144*rptrp+8+40; 
  ptr = viewByte[rptrp*64+6]; 
  view.setUint8(0,viewByte[rptrp*64+2]); 
  view.setUint8(1,viewByte[rptrp*64+3]); 
  ci = view.getUint16(0); 
  view.setUint8(0,viewByte[rptrp*64+4]); 
  view.setUint8(1,viewByte[rptrp*64+5]); 
  cj = view.getUint16(0); 
  clearCursor(x+ci,y+cj); 
  x=200+16; y=144*rptr+8+40; 
  ptr = viewByte[rptr*64+6]; 
  view.setUint8(0,viewByte[rptr*64+2]); 
  view.setUint8(1,viewByte[rptr*64+3]); 
  ci = view.getUint16(0); 
  view.setUint8(0,viewByte[rptr*64+4]); 
  view.setUint8(1,viewByte[rptr*64+5]); 
  cj = view.getUint16(0); 
  writeCursor(x+ci,y+cj);
  showCursor(x+ci,y+cj); 
 }
	
 function storekeyvalue(viewByte,rptr) { 
  var x=0; var y=0; var ptr=0; var ci=0; var cj=0; 
  var buf = new ArrayBuffer(4); 
  var view = new DataView(buf); 
  x=200+16; y=144*rptr+8+40;  
  var kstr = readKeypad(0,1664,ktype); 
  var ptr = viewByte[rptr*64+6]; 
  view.setUint8(0,viewByte[rptr*64+2]); 
  view.setUint8(1,viewByte[rptr*64+3]); 
  ci = view.getUint16(0); 
  view.setUint8(0,viewByte[rptr*64+4]); 
  view.setUint8(1,viewByte[rptr*64+5]); 
  cj = view.getUint16(0); 
  clearCursor(x+ci,y+cj); 
  
  if (ptr==0) { 
     imageRect(x,y,24*24,48,"rgba(255,255,255,1.0)"); 
  } 
       
  if (kstr=="SHIFT") {  
    if (ktype==0 || ktype==2) { 
      ktype++; 
      drawKeypad(0,1664,ktype);
    } else if (ktype==1 || ktype==3) { 
      ktype--; 
      drawKeypad(0,1664,ktype); 
    }
  } else if (kstr=="?123") { 
    ktype=2; 
    drawKeypad(0,1664,ktype);
  } else if (kstr=="ABC") { 
    ktype=0; 
    drawKeypad(0,1664,ktype); 
  } else if (kstr=="BS") { 
    if (ptr==0) { 
    } else { 
      if (ci==0) {ci=24*23;} else {ci-=24;} 
      writeChar(x+ci,y+cj,"font2448"," "); 
      ptr--; 
      viewByte[rptr*64+6]=ptr; 
      viewByte[rptr*64+2]=(ci&0xFF00)>>8; 
      viewByte[rptr*64+3]=ci&0x00FF; 
      viewByte[rptr*64+4]=(cj&0xFF00)>>8; 
      viewByte[rptr*64+5]=cj&0x00FF; 
    }
  } else if (kstr=="SPACE") { 
    writeChar(x+ci,y+cj,"font2448"," ");
    ci+=24; 
    if (ci>=24*24) {ci=0; cj=0;} 
    viewByte[rptr*64+16+ptr]=" ".charCodeAt(0); 
    ptr++; 
    viewByte[rptr*64+6]=ptr; 
    viewByte[rptr*64+2]=(ci&0xFF00)>>8; 
    viewByte[rptr*64+3]=ci&0x00FF; 
    viewByte[rptr*64+4]=(cj&0xFF00)>>8; 
    viewByte[rptr*64+5]=cj&0x00FF; 
  } else if (kstr=="ENTER") { 
  } else { 
    var kchar=readKeypad(0,1664,ktype); 
    writeChar(x+ci,y+cj,"font2448",kchar); 
    ci+=24; 
    if (ci>=24*24) {ci=0; cj=0;} 
    viewByte[rptr*64+16+ptr]=kchar.charCodeAt(0); 
    ptr++; 
    viewByte[rptr*64+6]=ptr; 
    viewByte[rptr*64+2]=(ci&0xFF00)>>8; 
    viewByte[rptr*64+3]=ci&0x00FF; 
    viewByte[rptr*64+4]=(cj&0xFF00)>>8; 
    viewByte[rptr*64+5]=cj&0x00FF; 
  } 
	 
  if (ptr==0) { 
      writecStr(x+ci+8,y+cj+8,24*24,48,"ubuntufont",[48,48,48,255],[255,255,255,255],signinform[rptr]); 
  } 
	 
  writeCursor(x+ci,y+cj); 
  showCursor(x+ci,y+cj); 
 } 

} 


function gotoSignin() { 
     /* var unamed; var passd: 
      var unamea; var passa; 
      getUserSigninInfo(); 
      getAppSigniupInfo(); 
      setTimeout(function(){
         if (unamed == unamea && passd == passa) {
                 signin = true; 
                 var date = getDate("ddmmyyyy"); 
                 var time = getTime("12h"); 
              var ref = firebase.database().ref("App/User/Signin"); 
              ref.set({
                  Username: unamed, 
                  Password: passd, 
                  Date: date, 
                  Tate: time, 
                  ip: "ip"
              }); 
           } else { 
              signinsts = false; 
           } 
        } , 5000 );
                
        function getUserSigninInfo() {
                  
        } 
        function getAppSignupInfo() {
            var ref = firebase.database().ref("App/User/Signup");
            ref.once("value", function(snapshot) { 
            unamea = snapshot.child("Username").val();
            passa = snapshot.child("Password").val();
            });
        }  */
  }
