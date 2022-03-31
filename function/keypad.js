// drawKeypad(20, 1648); // 2160-512
function drawKeypad(x, y) { // alert('1');
  // var x=0; var y=0; 
  // var w=80*10; var h=80*4; 
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
	
	ctx.fillStyle = "rgba(0,0,192,1.0)"; // gray
	ctx.fillRect(x, y-128*2, 1040, 128);
	ctx.fillStyle = "rgba(255,255,255,1.0)"; // gray
	ctx.fillRect(x+4, y-128*2+4, 1040-8, 128-8);
	
        /* ctx.beginPath(); 
	ctx.lineWidth = "4"; 
	ctx.strokeStyle = "rgba(0,0,220,1.0)"; // "blue"; 
	ctx.rect(x, y-256, 1040, 128); 
	ctx.stroke(); */
	
  var imgBuf = new ArrayBuffer(kw*4*kh*rw*cl); 
  var imgView = new Uint8Array(imgBuf); 
  
  for (let i=0; i<(kw*4*kh)*(rw*cl); i+=4) { 
    imgView[i+0] = 0xFF; // R
    imgView[i+1] = 0xFF; // G
    imgView[i+2] = 0xFF; // B
    imgView[i+3] = 0xFF; // A
  } 
  
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
      draw(kc, kr, kw, kh, kl, kt); 
    } 
  }  
  
}
