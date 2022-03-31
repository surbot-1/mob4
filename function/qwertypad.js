function qwertypad() { 
	
var msgBuf = new ArrayBuffer(256);
var msgView = new DataView(msgBuf);
msgView.setUint8(0, 125);
msgView.getUint8(0); // 125
var msgArr = new Uint8Array(msgBuf);
var msgStr;

var qwertyChar    = ["Q","W","E","R","T","Y","U","I","O","P",
	               "A","S","D","F","G","H","J","K","L",
	             "SI", "Z","X","C","V","B","N","M","BS",
	            "DC1","DC2",",",   "SPACE",    ".","\n"];

var qwertyHex     = [0x51,0x57,0x45,0x52,0x54,0x59,0x55,0x49,0x4F,0x50,  // 0-9  QEERTYUIOP
	               0x41,0x53,0x44,0x46,0x47,0x48,0x4A,0x4B,0x4C,     // 10-18 ASDFGHJKL
	             0x0F, 0x5A,0x58,0x43,0x56,0x42,0x4E,0x4D, 0x08,    // 19-27 siZXCVBNMbs
	             0x11, 0x12,0x2C,       0x20,        0x2E, 0x0A];   // 28-33 dc1dc2,Space.dc
	
var ci = 16; var cj = 208;
var ptr=0;
var cls=0; var cla=0; var cpr=0;
var keyChar; var kChar;
var keyHex;  var kHex;
var cxi=124+14;  var cxf=796-14;
var cyi=1440-24; var cyf=1488-24;
var cx=124+14; var cy=1440-24; var cp;
var cxp; var cyp;  
var cw=24; var ch=48; var oh=33; 
  
qwertypad1();
function qwertypad1() {
     cxp=cx; cyp=cy;
     clearInterval(cursor);
     showCursor();
     writeChar();
     // writeMessage1();
     storeMessageStr();
    // storeMessageArr();
     // putMsgCnt();
     updateCursor();
     cursor = setInterval(writeCursor, 1000); 	
	
   } // qwertypad1
	
  
 function readQwerty() {
	
     var x = cordx;
     var y = cordy;
	
   if (y>1535 && y<1535+160) {
     for (let i=0; i<10; i++) {
       if (x>108*i && x<108*i+108) {
        keyChar = qwertyChar[i];
        keyHex = qwertyHex[i];
       }
      }
     }
	
   if (y>1535+160 && y<1535+160*2) {
     for (let i=0; i<1; i++) {
       if (x>108*i && x<108*i+108+54) {
        keyChar = qwertyChar[10+i];
        keyHex = qwertyHex[10+i];
	 }
	}
     for (let i=0; i<7; i++) {
       if (x>54+108+108*i && x<54+108+108*i+108) {
        keyChar = qwertyChar[11+i];
        keyHex = qwertyHex[11+i];
	 }
	}
     for (let i=0; i<1; i++) {
       if (x>54+108*8+108*i && x<54+108*8+108*i+108+54) {
        keyChar = qwertyChar[18+i];
        keyHex = qwertyHex[18+i];
	 }
	}
       }
	
   if (y>1535+160*2 && y<1535+160*3) {
	   
     for (let i=0; i<1; i++) {
       if (x>108*i && x<54+108*i+108) {
        keyChar = qwertyChar[19+i];
        keyHex = qwertyHex[19+i];
	 }
	}
     for (let i=0; i<7; i++) {
       if (x>54+108+108*i && x<54+108+108*i+108) {
        keyChar = qwertyChar[20+i];
        keyHex = qwertyHex[20+i];
	 }
	}
     for (let i=0; i<1; i++) {
       if (x>54+108*8+108*i && x<54+108*8+108*i+108+54) {
        keyChar = qwertyChar[27+i];
        keyHex = qwertyHex[27+i];
	 }
	}
      }
	
    if (y>1535+160*3 && y<1535+160*4) {
     for (let i=0; i<1; i++) {
       if (x>108*i && x<108*i+108+54) {
        keyChar = qwertyChar[28+i];
        keyHex = qwertyHex[28+i];
	 }
	}
     for (let i=0; i<2; i++) {
       if (x>54+108+108*i && x<54+108+108*i+108) {
        keyChar = qwertyChar[29+i];
        keyHex = qwertyHex[29+i];
	 }
	}
     for (let i=0; i<1; i++) {
       if (x>54+108*3+108*i && x<54+108*6+108*i+108) {
        keyChar = qwertyChar[31+i];
        keyHex = qwertyHex[31+i]; 
	 }
	}
     for (let i=0; i<1; i++) {
       if (x>54+108*7+108*i && x<54+108*7+108*i+108) {
        keyChar = qwertyChar[32+i];
        keyHex = qwertyHex[32+i]; 
	 }
	}
    for (let i=0; i<1; i++) {
       if (x>54+108*8+108*i && x<54+108*8+108*i+108+54) {
        keyChar = qwertyChar[33+i];
        keyHex = qwertyHex[33+i]; 
	 }
	}
      } 
	
   }  // read_qwerty
	
   
function writeMessage() { 
 // var cvs = document.getElementById("canvas");
 // var ctx = cvs.getContext('2d');
  var x = cordx;
  var y = cordy;
  if (x>0 && x<1080 && y>1536 && y<2176) {
  readQwerty();
  var keyC = keyChar; 
  var canv = document.getElementById("canvas");
  var ctx = canv.getContext('2d');
  if(keyC == "SI") { 
  } else if(keyC == "BS") {
  ctx.fillStyle = "white";
  ctx.fillRect(0, 144, 1080, 1247);
  ci=16; cj=208;
  } else if(keyC == "DC1") { 
  } else if(keyC == "DC2") {
  } else if(keyC == "SPACE") {
       ctx.fillStyle = "white";
       ctx.fillRect(ci, cj-32, 4, 32);
	  ci+=48;
       if(ci>1080-48) {ci=16; cj+=64;}
       if(cj>1392-64) {ci=16; cj=208;}
	  
  } else if(keyC == "\n") {
       ctx.fillStyle = "white";
       ctx.fillRect(ci, cj-32, 4, 32);
	  ci=16; cj+=64;
       if(cj>1392-64) {ci=16; cj=208;}
	  
  } else {
       // if(ci>1080-48) {ci=16; cj+=64;}
       // if(cj>1392-64) {ci=16; cj=208;}
       ctx.fillStyle = "white";
       ctx.fillRect(ci, cj-32, 4, 32);
       ctx.font = "48px Arial";
       ctx.fillStyle = "red";
       ctx.fillText(keyC, ci, cj);
           ci+=48;
       if(ci>1080-48) {ci=16; cj+=64;}
       if(cj>1392-64) {ci=16; cj=208;}
       }  
	  
     }
   }   // write_message

	
function storeMessageStr() {
        readQwerty();
        var keyC = keyChar;
        var keyH = keyHex;
        if (keyC == "SI") {           // shift_in
                
	} else if (keyC == "BS") {    // back_space
               if (cpr==0) {
              } else {
		 msgStr = "";
                 msgArr[cpr] = 0x00;
                 cls--; cla--; cpr--;
              }
        } else if (keyC == "DC1") {    // ?123
	} else if (keyC == "DC2") {    // emoji
	} else if (keyC == "SPACE") {  // space
               msgStr += " ";
               msgArr[cpr] = 0x20;
               cls++; cla++; cpr++;
	} else if (keyC == "\n") {    // enter - new_line
               msgStr += "\n";
               msgArr[cpr] = 0x0A;
               cls++; cla++; cpr++;
        } else {               
               msgStr += keyC;
               msgArr[cpr] = keyH;
               cls++; cla++; cpr++;
               }  
     }
	
  
 function storeMessageArr() {
	 
	  readQwerty();
	 var keyC = keyChar;
	 var keyH = keyHex;
	
      if (keyH == 0x0F) {             // shift_in
                
	} else if (keyH == 0x08) {    // back_space
               msgStr = "";
               msgArr[cpr] = 0x00;
               cls--; cla--; cpr--;
        } else if (keyH == 0x11) {    // ?123
	} else if (keyH == 0x12) {    // emoji
	} else if (keyH == 0x20) {    // space
               msgStr += " ";
               msgArr[cpr] = 0x20;
               cls++; cla++; cpr++;
	} else if (keyH == 0x0A) {    // enter
               msgStr += "\n";
               msgArr[cpr] = 0x0A;
               cls++; cla++; cpr++;
        } else {               
               msgStr += keyC;
               msgArr[cpr] = keyH;
               cls++; cla++; cpr++;
               } 
       
   }
	
function writeCursor() {
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext('2d');
	
        ctx.fillStyle = "blue";
        ctx.fillRect(cx, cy, 4, 48);
	setTimeout( function() {
	ctx.fillStyle = "white";
        ctx.fillRect(cx, cy, 4, 48);
        }, 0500);
      }	 

function showCursor() {
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext('2d');
        ctx.fillStyle = "blue";
        ctx.fillRect(cx, cy, 4, 48);
        }
	
function updateCursor() {
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext('2d');
        ctx.fillStyle = "white";
        ctx.fillRect(cxp, cyp, 4, 48);
	ctx.fillStyle = "blue";
        ctx.fillRect(cx, cy, 4, 48);
        }
	
function clrCursor() {
        var cvs = document.getElementById("canvas");
        var ctx = cvs.getContext('2d');
        clearInterval(cursor);
        ctx.fillStyle = "white";
        ctx.fillRect(cx, cy, 4, 48);
        }
  
} // qwertypad 


function writeChar() {
	var x = cordx;
        var y = cordy;
  if (x>0 && x<1080 && y>1536 && y<2176) {
     var cnv = document.getElementById("canvas");
     var ctx = cnv.getContext('2d');
	readQwerty();
        var keyP = msgArr[cpr-1]; // previous
	var keyH = keyHex;
  if(keyH == 0x0F) {              // shift
  } else if(keyH == 0x08) {       // back_space
       if (cpr==0) {
       } else if(keyP==0x0A) {
	       
	       var i=0; var j=0;
	       for (let k=0; k<cpr-1; k++) {
                  if (msgArr[k]==0x0A) {
		   i=0; j++; 
		   if (j>1) {i=0; j=0;}
                  } else {
                   i++;
		   if (i>23) {i=0; j++;}
		   if (j>1) {i=0; j=0;}
		  }
		}
	      cx=cxi+28*i; cy=cyi+48*j;
	       
       } else {
        ctx.fillStyle = "white";
        ctx.fillRect(cx, cy, 4, 48);
	  cx-=28;
        if(cx<cxi) {cx=cxf; cy-=48;}
        if(cy<cyi) {cx=cxf; cy=cyf;}
        ctx.fillStyle = "white";
        ctx.fillRect(cx+4, cy, 24, 48);
       }
  } else if(keyH == 0x11) { 
  } else if(keyH == 0x12) {
  } else if(keyH == 0x20) {     // space
       ctx.fillStyle = "white";
       ctx.fillRect(cx, cy, 28, 48);
	   cx+=28;
       if(cx>cxf) {cx=cxi; cy+=48;}
       if(cy>cyf) {cx=cxi; cy=cyi;}
	  
  } else if(keyH == 0x0A) {    // enter
       ctx.fillStyle = "white";
       ctx.fillRect(cx, cy, 4, 48);
	 cx=cxi; cy+=48;
       if(cy>cyf) {cx=cxi; cy=cyi;}
       
	  
  } else {
       ctx.fillStyle = "white";
       ctx.fillRect(cx, cy, 4, 48);
        oh = keyH-0x20;
        putChar();
        cx+=28;
       if(cx>cxf) {cx=cxi; cy+=48;}
       if(cy>cyf) {cx=cxi; cy=cyi;}
       }  
     }
   }
	
 
function putChar() {
	
        var cnv = document.getElementById("canvas");
        var ctx = cnv.getContext('2d');
        var imgData = ctx.createImageData(24, 48);
        
        var fontBuf = new ArrayBuffer(24*4*48);
        var fontView = new Uint8Array(fontBuf);
             
	var cb = new Uint8Array ([0x80,0x40,0x20,0x10,0x08,0x04,0x02,0x01]);
	var fb; var k=0; 
        for (let i=0; i<3*48; i++) { 
            for (let j=0; j<8; j++) {
                 fb = font2448[3*48*oh+i] & cb[j]; 
                 if (fb) {
		   fontView[k+0] = 0x00;
                   fontView[k+1] = 0x00;
		   fontView[k+2] = 0x00;
		   fontView[k+3] = 0xFF;
		    k+=4; 
                   } else {
		   fontView[k+0] = 0xFF; 
		   fontView[k+1] = 0xFF;
		   fontView[k+2] = 0xFF;
		   fontView[k+3] = 0xFF;
		    k+=4; 
                   }
		  
              }
          }
        for (let i=0; i<24*4*48; i++) {
             imgData.data[i] = fontView[i];
              }
        ctx.putImageData(imgData,cx+4, cy);   
     }
    
  } // qwertypad

