function saveImage(x, y, w, h) { 
  var can = document.getElementById('canvas'); 
  var ctx = can.getContext('2d'); 
  // var imgData = ctx.createImageData(w, h); 
  var imgData = ctx.getImageData(x, y, w, h); 
  // var imgBuf = new ArrayBuffer(w*4*h); 
  // var imgView = new Uint8Array(imgBuf); 
  for (let i=0; i<w*4*h; i+=4) {  
    imgView[i+0] = imgData.data[i+0]; 
    imgView[i+1] = imgData.data[i+1]; 
    imgView[i+2] = imgData.data[i+2]; 
    imgView[i+3] = imgData.data[i+3]; 
  }  
  // ctx.putImageData(imgData, x, y+400);             
} 


function restoreImage(x, y, w, h) { 
  var can = document.getElementById('canvas'); 
  var ctx = can.getContext('2d'); 
  var imgData = ctx.createImageData(w, h); 
  // var imgData = ctx.getImageData(x, y, w, h); 
  // var imgBuf = new ArrayBuffer(w*4*h); 
  // var imgView = new Uint8Array(imgBuf); 
  for (let i=0; i<w*4*h; i+=4) {  
    imgData.data[i+0] = imgView[i+0]; 
    imgData.data[i+1] = imgView[i+1]; 
    imgData.data[i+2] = imgView[i+2]; 
    imgData.data[i+3] = imgView[i+3]; 
  } 
  ctx.putImageData(imgData, x, y); 
}

function insertImagecStr(x,y,w,h,font, fcolor, bcolor, str, view) { 
  
  function createImagecStr(x,y,w,h,font, fcolor, bcolor, str) {  
	var cw=24; var ch=32; var sw=0; var sh=0; 

	if (font=="font1632") { cw=16; ch=32; 
	} else if (font=="font2448") { cw=24; ch=48; 
	} else if (font=="font3264") { cw=32; ch=64; 
	} else if (font=="inconsolafont") { cw=24; ch=32; 
	} else if (font=="ununtufont") { cw=24; ch=32; 
	} else if (font=="ubuntubold") { cw=24; ch=32; 
	} else if (font=="arialnormal1616") { cw=16; ch=16; 
	} else if (font=="arialround1624") { cw=16; ch=24; 
	} 
	
	
        /* var ibuf = new ArrayBuffer(cw*4*ch);
        var iview = new Uint8Array(ibuf); */ 
	
	var i=0; var j=0;
	for (let k=0; k<(str.length); k++) { 
		var char=str.charAt(k); 
        insertImagecChar(x+i, y+j, font, fcolor, bcolor, char, view); 
		i+=cw; 
		if (i>=w) {i=0; j+=ch;} 
		if(j>=h) {i=0; j=0;}
	}
	
}
  
 function insertImagecChar(x, y, font, fcolor, bcolor, char, view) { 
	var cw=24; var ch=32; 
	var oh = (char.charCodeAt(0))-32; 
			      
	var fBuf = new ArrayBuffer(16*128); 
        var fView = new Uint8Array(fBuf); 
					  
	if (font=="font1632") {  
		cw=16; ch=32;
		for(let i=0; i<(cw/8)*ch; i++) {  
			fView[i]=font1632[(cw/8)*ch*oh+i]; 
		}
	} else if (font=="font2448") {  
		cw=24; ch=48;
		for(let i=0; i<(cw/8)*ch; i++) {  
			fView[i]=font2448[(cw/8)*ch*oh+i]; 
		}
	} else if (font=="font3264") {  
		cw=32; ch=64;
		for(let i=0; i<(cw/8)*ch; i++) {  
			fView[i]=font3264[(cw/8)*ch*oh+i]; 
		}
	} else if (font=="inconsolafont") {  
		cw=24; ch=32;
		for(let i=0; i<(cw/8)*ch; i++) {  
			fView[i]=inconsolafont[(cw/8)*ch*oh+i]; 
		}
	} else if (font=="ubuntufont") {  
		cw=24; ch=32;
		for(let i=0; i<(cw/8)*ch; i++) {  
			fView[i]=ubuntufont[(cw/8)*ch*oh+i]; 
		}
	} else if (font=="ubuntubold") {  
		cw=24; ch=32;
		for(let i=0; i<(cw/8)*ch; i++) {  
			fView[i]=ubuntubold[(cw/8)*ch*oh+i]; 
		}
	} else if (font=="arialnormal1616") {  
		cw=16; ch=16;
		for(let i=0; i<(cw/8)*ch; i++) {  
			fView[i]=arialnormal1616[(cw/8)*ch*oh+i]; 
		}
	} else if (font=="arialround1624") {  
		cw=16; ch=24;
		for(let i=0; i<(cw/8)*ch; i++) {  
			fView[i]=arialround1624[(cw/8)*ch*oh+i]; 
		}
	} 
	 
        /* var buf = new ArrayBuffer(cw*4*ch);
        var view = new Uint8Array(buf); */ 
   
        var fontBuf = new ArrayBuffer(cw*4*ch);
        var fontView = new Uint8Array(fontBuf); 
             
	var cb = new Uint8Array ([0x80,0x40,0x20,0x10,0x08,0x04,0x02,0x01]);
	var fb; var k=0; 
        for (let i=0; i<(cw/8)*ch; i++) { 
            for (let j=0; j<8; j++) {
                 fb = fView[i] & cb[j]; 
                 if (fb) {
		   fontView[k+0] = fcolor[0];  // 0x00;
       fontView[k+1] = fcolor[1];  // 0x00;
		   fontView[k+2] = fcolor[2];  // 0x00;
		   fontView[k+3] = fcolor[3];  // 0xFF;
		    k+=4; 
                 } else { 
		   fontView[k+0] = bcolor[0];  // 0xFF; 
		   fontView[k+1] = bcolor[1];  // 0xFF;
		   fontView[k+2] = bcolor[2];  // 0xFF;
		   fontView[k+3] = bcolor[3];  // 0xFF;
		    k+=4; 
                 }
		  
              }
          } 
        for (let i=0; i<cw*4*ch; i+=cw*4) { 
          for (let j=0; i<cw*4; i++) {
          view[x+cw*4*y+cw*4*i+j] = fontView[i]; 
        } 
        // return fontView; 
  }

}

function insertImage(x,y,w,h,buf) { 
  
}





