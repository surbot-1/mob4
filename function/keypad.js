// drawKeypad(20, 1648); // 2160-512
function drawKeypad(x, y) {  // alert('1');
  var px=0; var py=0; 
  var pw=0; var ph=0;
  var cl=10; var rw=4; 
  var kc=0; var kr=0; 
  var kl=12; var kt=16; 
  var kw=80; var kh=96; 
  
  var cvs = document.getElementById("canvas"); 
  var ctx = cvs.getContext('2d'); 
  var imgData = ctx.createImageData(kw, kh); 
	
	ctx.fillStyle = "rgba(192,192,192,1.0)"; // gray
	ctx.fillRect(x, y, 1040, 128*4);
	ctx.fillStyle = "rgba(192,192,192,1.0)"; // gray
	ctx.fillRect(x, y-128, 1040, 128); 
	
	ctx.fillStyle = "rgba(0,0,192,1.0)"; // blue
	ctx.fillRect(x, y-128*2, 1040, 128);
	ctx.fillStyle = "rgba(255,255,255,1.0)"; // white
	ctx.fillRect(x+4, y-128*2+4, 1040-8, 128-8); 
	
  var imgBuf = new ArrayBuffer(kw*4*kh*rw*cl); 
  var imgView = new Uint8Array(imgBuf); 
  
  for (let i=0; i<(kw*4*kh)*(rw*cl); i+=4) { 
    imgView[i+0] = 0xFF; // R
    imgView[i+1] = 0xFF; // G
    imgView[i+2] = 0xFF; // B
    imgView[i+3] = 0xFF; // A
  } 

   function keyChar(kc, kr) {  
      var keychar = [["Q","W","E","R","T","Y","U","I","O","P"],
	               ["A","S","D","F","G","H","J","K","L"],
	             ["SI", "Z","X","C","V","B","N","M","BS"],
	            ["DC1","DC2",",",   "SPACE",    ".","ENTER"]]; 
	  var key = keychar[kr][kc];
	  return key; 
  }  alert('2'); 
  
  function draw(kc, kr, kw, kh, kl, kt) { 
	  var kx=x+px+(kw+kl*2)*kc; 
	  var ky=y+py+(kh+kt*2)*kr; 
	  imgData = ctx.createImageData(kw+pw, kh+ph);
	  for (let i=0; i<(kw+pw)*4*(kh+ph); i++) { 
		  imgData.data[i] = imgView[(kw*4*kh*cl)*kr+(kw*4*kh)*kc+i]; 
	  } 
	  ctx.putImageData(imgData, kx+kl, ky+kt); 
	  /* ctx.beginPath(); 
	  ctx.lineWidth = "2"; 
	  ctx.strokeStyle = "rgba(220,220,220,1.0)"; // "black"; 
	  ctx.rect(kx, ky, kw+pw+kl*2, kh+ph+kt*2); 
	  ctx.stroke(); */
  } alert('3'); 
  
  for (let j=0; j<rw; j++) { 
    for (let i=0; i<cl; i++) { 
      if (j==0 && i==0) {cl=10; px=0;} 
      if (j==1 && i==0) {cl=9; px=((kw+kl*2)/2);} 
      if (j==2 && i==0) {cl=9; px=0; pw=((kw+kl*2)/2);} 
      if (j==2 && i==1) {cl=9; px=((kw+kl*2)/2); pw=0;} 
      if (j==2 && i==8) {cl=9; px=((kw+kl*2)/2); pw=((kw+kl*2)/2);}
      if (j==3 && i==0) {cl=5; px=0; pw=((kw+kl*2)/2);} 
      if (j==3 && i==1) {cl=5; px=((kw+kl*2)/2); pw=0;} 
      if (j==3 && i==2) {cl=5; px=((kw+kl*2)/2); pw=((kw+kl*2)*4);} 
      if (j==3 && i==3) {cl=5; px=((kw+kl*2)/2)+((kw+kl*2)*4); pw=0;} 
      if (j==3 && i==4) {cl=5; px=((kw+kl*2)/2)+((kw+kl*2)*4); pw=((kw+kl*2)/2);}
      kc=i; kr=j; 
      draw(kc, kr, kw, kh, kl, kt); 
    } 
  }  
  
}

/* 
function readKeypad(x, y) {  
  var tx=cordx; var ty=cordy; 
  var px=0; var py=0; 
  var pw=0; var ph=0;
  var cl=10; var rw=4; 
  var kc=0; var kr=0; 
  var kl=12; var kt=16; 
  var kw=80; var kh=96; 
	var b=false; 
	
  function keyChar(kc, kr) {  
      var keychar = [["Q","W","E","R","T","Y","U","I","O","P"],
	               ["A","S","D","F","G","H","J","K","L"],
	             ["SI", "Z","X","C","V","B","N","M","BS"],
	            ["DC1","DC2",",",   "SPACE",    ".","ENTER"]]; 
	  return keychar[kr][kc]; 
  }
	
	function read(kc, kr, kw, kh, kl, kt) { 
	  var kx=x+px+(kw+kl*2)*kc; 
	  var ky=y+py+(kh+kt*2)*kr; 
		if (tx>kx && tx<(kx+kw+pw) && ty>ky && ty<(ky+kh+ph)) {   
			b=true; 
		} else {b=false;}
	}
	
  for (let j=0; j<rw; j++) { 
    for (let i=0; i<cl; i++) { 
      if (j==0 && i==0) {cl=10; px=0;} 
      if (j==1 && i==0) {cl=9; px=((kw+kl*2)/2);} 
      if (j==2 && i==0) {cl=9; px=0; pw=((kw+kl*2)/2);} 
      if (j==2 && i==1) {cl=9; px=((kw+kl*2)/2); pw=0;} 
      if (j==2 && i==8) {cl=9; px=((kw+kl*2)/2); pw=((kw+kl*2)/2);}
      if (j==3 && i==0) {cl=5; px=0; pw=((kw+kl*2)/2);} 
      if (j==3 && i==1) {cl=5; px=((kw+kl*2)/2); pw=0;} 
      if (j==3 && i==2) {cl=5; px=((kw+kl*2)/2); pw=((kw+kl*2)*4);} 
      if (j==3 && i==3) {cl=5; px=((kw+kl*2)/2)+((kw+kl*2)*4); pw=0;} 
      if (j==3 && i==4) {cl=5; px=((kw+kl*2)/2)+((kw+kl*2)*4); pw=((kw+kl*2)/2);}
      kc=i; kr=j; 
      read(kc, kr, kw, kh, kl, kt); 
      if (b) {break;} 
    } 
    if (b) {break;} 
  }  
	
   if (b) {
	return keyChar(kc, kr); 
   } else {return false;} 
	
} 


function writeStr(x, y, w, h, font, str) {  
	var cw; var ch; 

	if (font=="font1632") { cw=16; ch=32; 
	} else if (font=="font2448") { cw=24; ch=48; 
	} else if (font=="font3264") { cw=32; ch=64; 
	} else if (font=="inconsolafont") { cw=24; ch=32; 
	} else if (font=="ununtufont") { cw=24; ch=32; 
	} else if (font=="ubuntubold") { cw=24; ch=32; 
	} 
	
	var i=0; var j=0;
	for (let k=0; k<(str.length); k++) { 
		var char=str.charAt(k); 
		writeChar(x+i, y+j, font, char); 
		i+=cw; 
		if (i>=w) {i=0; j+=ch;} 
		if(j>=h) {i=0; j=0;}
	}
	
}

*/ 
function writeChar(x, y, font, char) {  
	var cw; var ch; var oh; 
	var offset = (char.charCodeAt(0))-32;
	
	if (font=="font1632") {  
		cw=16; ch=32; oh=offset;
	} else if (font=="font2448") { 
		cw=24; ch=48; oh=offset;
	} else if (font=="font3264") { 
		cw=32; ch=64; oh=offset; 
	} else if (font=="inconsolafont") { 
		cw=24; ch=32; oh=offset; 
	} else if (font=="ununtufont") { 
		cw=24; ch=32; oh=offset; 
	} else if (font=="ubuntubold") { 
		cw=24; ch=32; oh=offset; 
	}
	
        var cnv = document.getElementById("canvas");
        var ctx = cnv.getContext('2d');
        var imgData = ctx.createImageData(cw, ch);
        
        var fontBuf = new ArrayBuffer(cw*4*ch);
        var fontView = new Uint8Array(fontBuf);
             
	var cb = new Uint8Array ([0x80,0x40,0x20,0x10,0x08,0x04,0x02,0x01]);
	var fb; var k=0; 
        for (let i=0; i<(cw/8)*ch; i++) { 
            for (let j=0; j<8; j++) {  
		 if (font=="font1632") { 
			 fb = font1632[(cw/8)*ch*oh+i] & cb[j]; 
		 } else if (font=="font2448") { 
			 fb = font2448[(cw/8)*ch*oh+i] & cb[j]; 
		 } else if (font=="font3264") { 
			 fb = font3264[(cw/8)*ch*oh+i] & cb[j]; 
		 } else if (font=="inconsolafont") { 
			 fb = inconsolafont[(cw/8)*ch*oh+i] & cb[j]; 
		 } else if (font=="ununtufont") { 
			 fb = ubuntufont[(cw/8)*ch*oh+i] & cb[j]; 
		 } else if (font=="ubuntubold") { 
			 fb = ubuntubold[(cw/8)*ch*oh+i] & cb[j]; 
		 }
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
        for (let i=0; i<cw*4*ch; i++) { 
             imgData.data[i] = fontView[i]; 
              }
        ctx.putImageData(imgData,x, y);   
     }
alert('10');
}






